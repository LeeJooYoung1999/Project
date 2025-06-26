<script setup>
// 계산 속성사용
import { computed } from 'vue';
// 메뉴 컴포넌트불러오기
import MenuItem from './MenuItem.vue';
import AccountMenuItem from './AccountMenuItem.vue';
import LogoutMenuItem from './LogoutMenuItem.vue';
import config from '@/config';

const { login, join } = config.accoutMenus;  // 설정 파일에서계정메뉴가져오기
// 로그인 상태(임시: false)
const islogin = computed(() => false); // 임시: 로그인하지 않음
// 사용자 이름(임시: 없음)
const username = computed(() => ''); // 임시: 사용자명 없음
</script>

<template>
  <ul class="navbar-nav ms-auto">
    <!-- 로그인상태일때-->
    <template v-if="islogin">
      <!-- 사용자이름표시메뉴-->
      <AccountMenuItem :username="username" />
      <!-- 로그아웃메뉴-->
      <LogoutMenuItem />
    </template>
    <!-- 비로그인상태일때-->
    <template v-else>
      <!-- 로그인메뉴-->
      <MenuItem :menu="login" />
      <!-- 회원가입메뉴-->
      <MenuItem :menu="join" />
    </template>
  </ul>
</template>
