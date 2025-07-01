//인터셉터 설정한 axios객체생성 -> 프로젝트 전반에서 사용할 예정.

import axios from 'axios'

import { useAuthStore } from '@/stores/auth';   //인증 상태관리용 pinia 임포트 -> 토큰을 추출해서 헤더에 실어야 해서.
import router from '@/router';                  //라우팅 기능 임포트           -> 오류발생하여 서버로부터 오류응답 받았을시, 자동으로 로그인페이지나 에러페이지로 이동시킬때 사용하기 위함.
const instance = axios.create({ //1단계 : axios 객체의 생성
    timeout: 1000,
});

//요청 인터셉터 설정
instance.interceptors.request.use(
    (config) => {
         // JWT 추출
        const { getToken } = useAuthStore();
        const token = getToken();
        if (token) {
            // 토큰이 있는 경우
            config.headers['Authorization'] = `Bearer ${token}`;
            console.log(config.headers.Authorization);
        }
        return config;
    },
    (error)=>{
        //요청중 에러발생
    return Promise.reject(error);
    }
);

//응답 인터셉터 설정.
instance.interceptors.response.use(
    (response)=>{
        //정상응답인경우 (200, 404)
        if (response.status === 200) {
            return response;
        }
        if (response.status === 404) {
            return Promise.reject('404: 페이지 없음 ' + response.request);
        }
        return response
    },
    async (error) => {
        //에러응답인경우 (401, 403, 305, 505)
        if (error.response?.status === 401) {
            const { logout } = useAuthStore();
            logout();
            router.push('/auth/login?error=login_required');        //오류응답 발생시, 로그인페이지로 자동이동. by라우터
            return Promise.reject({ error: '로그인이 필요한 서비스입니다.' });
        }
        return Promise.rejec(error);
    }
);

export default instance; //인터셉터가 적용된 axios 인스턴스를 export