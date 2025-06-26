package org.scoula.config;
//1. Swagger이용해 API문설르 자동으로 생성하고,
//2. JWT 인증을 적용한 테스트 환경을 제공하는   설정 파일.

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import javax.servlet.ServletContext;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    private final String API_NAME = "Board API";
    private final String API_VERSION = "1.0";
    private final String API_DESCRIPTION = "Board API 명세서";


    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title(API_NAME)
                .description(API_DESCRIPTION)
                .version(API_VERSION)
                .build();
    }

    @Bean  // =>  Docket = Swagger 설정의 핵심:  Swagger 문서를 어떤 방식으로 생성할지 설정
    public Docket api(ServletContext servletContext) {
        return new Docket(DocumentationType.SWAGGER_2)
                // JWT 인증
                .securityContexts(List.of(this.securityContext())) // SecurityContext 설정
                .securitySchemes(List.of(this.apiKey())) // ApiKey 설정
                .select()
                .apis(RequestHandlerSelectors.withClassAnnotation(RestController.class))  //@RestController가 붙은 클래스만 문서화

                .paths(PathSelectors.any()) //모든경로를 포함함.
                .build()
//                .pathProvider(new RelativePathProvider(servletContext))
                .pathMapping("/")
                .apiInfo(apiInfo());
    }

    // JWT SecurityContext 구성  -  Swagger UI에서 JWT 인증을 테스트하기 위한 설정
    private SecurityContext securityContext() {
        return SecurityContext.builder()
                .securityReferences(defaultAuth())
                .build();
    }

    private List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return List.of(new SecurityReference("Authorization", authorizationScopes));
    }

    // ApiKey 정의  -  Swagger UI에서 JWT를 사용할 수 있도록 헤더 "Authorization"를 설정.
    private ApiKey apiKey() {
        return new ApiKey("Authorization", "Authorization", "header");
    }

}