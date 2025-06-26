<script setup>
// username 문자열 props 받음
defineProps({ username: String });
</script>

<template>
  <!-- 네비게이션항목-->
  <li class="nav-item">
    <!-- 프로필페이지로이동하는링크-->
    <router-link class="nav-link" to="/auth/profile">
      <!-- 사용자아이콘-->
      <i class="fa-solid fa-user"></i>
      <!-- 사용자이름표시-->
      {{ username }}
    </router-link>
  </li>
</template>
