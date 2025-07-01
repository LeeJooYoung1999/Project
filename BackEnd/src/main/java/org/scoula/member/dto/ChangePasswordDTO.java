package org.scoula.member.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChangePasswordDTO {
    String username;    //사용자ID
    String oldPassword; //전 패스워드
    String newPassword; //새 패스워드
}
