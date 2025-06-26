<script setup>
import { useRouter } from 'vue-router';  // 라우터 인스턴스가져옴

const router = useRouter();              // 라우터 객체생성
const logout = (e) => { // 로그아웃시 홈으로이동
  // 로그아웃
  router.push('/');
};
</script>

<template>
  <!-- 로그아웃링크-->
  <a href="#" class="nav-link" @click.prevent="logout">
    <!-- 로그아웃아이콘-->
    <i class="fa-solid fa-right-from-bracket"></i>
    로그아웃
  </a>
</template>
