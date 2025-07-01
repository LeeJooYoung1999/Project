import api from '@/api';

const BASE_URL = '/api/member';     //모든 요청은 /api/member를 기준으로 전송
const headers = { 'Content-Type': 'multipart/form-data' };  //회원가입시 파일업로드(아바타)가 포함되므로, 형식을 변경해줌.

export default {
  async checkUsername(username) {
    // username 중복 체크, true: 중복(사용불가),  false: 사용 가능 - GET방식
    const { data } = await api.get(`${BASE_URL}/checkusername/${username}`);
    console.log('AUTH GET CHECKUSERNAME', data);
    return data;
  },

  async create(member) {
    //사용자 정보 업로드(생성) - POST요청

    // 아바타 파일 업로드 – multipart 인코딩 필요(FormData 객체 사용)
    const formData = new FormData();    //formdata객체를 이용해 multipart형식으로 회원정보를 구성함.
    formData.append('username', member.username);
    formData.append('email', member.email);
    formData.append('password', member.password);
    
    if (member.avatar) {    //avatar는 선택적으로 포함.
      formData.append('avatar', member.avatar);
    }
    
    const { data } = await api.post(BASE_URL, formData, headers);
    
    console.log('AUTH POST: ', data);
    return data;
  },

  async update(member) {  //async = 비동기 함수선언
    // 사용자 정보 업데이트 - PUT요청
    const formData = new FormData();
    formData.append('username', member.username);
    formData.append('password', member.password);
    formData.append('email', member.email);

    if (member.avatar) { //avatar는 선택적으로 포함.
      formData.append('avatar', member.avatar);
    }

    //axios인스턴스(인터셉터 설정완료) 통해 HTTP PUT 요청을 실행함.
    const { data } = await api.put(`${BASE_URL}/${member.username}`, formData, headers);
    console.log('AUTH PUT: ', data);
    return data;
  }
};
