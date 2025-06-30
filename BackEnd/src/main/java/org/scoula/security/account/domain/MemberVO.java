package org.scoula.security.account.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder  //MemberJoinDTO에서 가져다 쓰기위해 @Builder 어노테이션 추가.
public class MemberVO {
    private String username;
    private String password;
    private String email;
    private Date regDate;
    private Date updateDate;

    //Auth테이블의 role(auth컬럼)이 여러개가 필요
    //member의 username과 auth 는 1:다
    private List<AuthVO> authList;
}
