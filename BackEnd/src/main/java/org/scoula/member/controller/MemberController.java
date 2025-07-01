package org.scoula.member.controller;

//MemberController - - /join, /login, /profile 같은 회원 관련 URL 요청을 처리하는 역할.

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.scoula.common.util.UploadFiles;
import org.scoula.member.dto.ChangePasswordDTO;
import org.scoula.member.dto.MemberDTO;
import org.scoula.member.dto.MemberJoinDTO;
import org.scoula.member.dto.MemberUpdateDTO;
import org.scoula.member.service.MemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.File;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class MemberController {
    final MemberService service;

    @GetMapping("/checkusername/{username}")    //id중복체크하는 GetMapping
    public ResponseEntity<Boolean> checkUsername(@PathVariable String username) {
        return ResponseEntity.ok().body(service.checkDuplicate(username));
    }

    @PostMapping("")                            //회원가입 - PostMapping
    public ResponseEntity<MemberDTO> join(MemberJoinDTO member) {
        return ResponseEntity.ok(service.join(member));
    }

    @GetMapping("/{username}/avatar")
    public void getAvatar(@PathVariable String username, HttpServletResponse response) {
        String avatarPath = "c:/upload/avatar/" + username + ".png";
        File file = new File(avatarPath);
        if (!file.exists()) {  // 아바타 등록이 없는 경우, 디폴트 아바타 이미지 사용
            file = new File("C:/upload/avatar/unknown.png");
        }

        UploadFiles.downloadImage(response, file);
    }

    @PutMapping("/{username}")
    public ResponseEntity<MemberDTO> changeProfile(MemberUpdateDTO member) {
        return ResponseEntity.ok(service.update(member));
    }

    @PutMapping("/{username}/changepassword")
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordDTO changePasswordDTO) {
        //id,pw를 JSON형태로 받을거라, @RequestBody 설정해줬음 주의!!
        service.changePassword(changePasswordDTO); //비밀번호 변경 수행하라
        return ResponseEntity.ok().build();  //본문(body) 없이 상태(성공여부)만 전송합니다.
    }

}
