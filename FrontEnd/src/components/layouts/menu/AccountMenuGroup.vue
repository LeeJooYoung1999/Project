<script setup>
import { computed } from 'vue';   // 계산 속성사용
import MenuItem from './MenuItem.vue';  // 메뉴 컴포넌트불러오기
import AccountMenuItem from './AccountMenuItem.vue';
import LogoutMenuItem from './LogoutMenuItem.vue';
import config from '@/config';

import { useAuthStore } from '@/stores/auth.js';
const auth = useAuthStore();

// 로그인 상태(임시: false)
const islogin = computed(() => auth.isLogin); //로그인 여부에 따라 계정정보 달라짐.
// 사용자 이름(임시: 없음)
const username = computed(() =>  auth.username); //중앙저장소에서 로그인된 username가져와 계정메뉴 구성.

const { login, join } = config.accoutMenus;  // 설정 파일에서 계정메뉴가져오기

</script>

<template>
  <ul class="navbar-nav ms-auto">

    <!-- 로그인상태일때-->
    <template v-if="islogin">
      <AccountMenuItem :username="username" />  <!-- 사용자이름표시메뉴-->
      <LogoutMenuItem />  <!-- 로그아웃메뉴-->
    </template>

    <!-- 비로그인상태일때-->
    <template v-else>
      <MenuItem :menu="login" />  <!-- 로그인메뉴-->
      <MenuItem :menu="join" /> <!-- 회원가입메뉴-->
    </template>

  </ul>
</template>
