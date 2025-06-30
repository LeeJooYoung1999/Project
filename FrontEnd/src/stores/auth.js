// 인증스토어 임시작업 - 로그인하면 무조건 로그인되고, 새로고침하면 스토어 리셋.

import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

//서버로부터 받은 인증정보
const initState = {
  token: '',      // 접근 토큰(JWT)
  user: {
    username: '', // 사용자 ID
    email: '',    // Email
    roles: [],    // 권한 목록
  },
};

export const useAuthStore = defineStore('auth', () => {
  const state = ref({ ...initState });
  const isLogin = computed(() => !!state.value.user.username); // 로그인 여부
  const username = computed(() => state.value.user.username); // 로그인 사용자 ID
  const email = computed(() => state.value.user.email); // 로그인 사용자 email      들이 변경될때마다 자동계산되어 들어감.
  
  //로그인시 호출할 비동기함수 정의.
  const login = async (member) => {
    state.value.token = 'test token';
    state.value.user = {
      username: member.username,
      email: member.username + '@test.com',
    };

    // api 호출
    const { data } = await axios.post('/api/auth/login', member);
    state.value = { ...data };
    localStorage.setItem('auth', JSON.stringify(state.value));  //로컬스토리지값을 삭제
  };

  //로그아웃시 호출할 함수 정의.
  const logout = () => {
    localStorage.clear();
    state.value = { ...initState }; //state값을 초기값으로 리셋.
  };
  const getToken = () => state.value.token; //token을 갖고 axios로 서버와 통신할 때 언제든 token값을 얻기위한 함수 정의.

  const load = () => {
    const auth = localStorage.getItem('auth');
    if (auth != null) {
      state.value = JSON.parse(auth);
      console.log(state.value);
    }
  };

  load();

  return { state, username, email, isLogin, login, logout, getToken };
});
