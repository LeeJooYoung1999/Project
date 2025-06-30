<script setup>
// username 문자열 props 받음
const props = defineProps({ username: String });

const avatar = `/api/member/${props.username}/avatar`;
</script>

<template>
  <!-- 네비게이션항목-->
  <li class="nav-item">
    <!-- 프로필페이지로이동하는링크-->
    <router-link class="nav-link" to="/auth/profile">
      <!-- 사용자아이콘 - 아바타-->
      <img :src="avatar" class="avatar avatar-sm" />
      <!-- 사용자이름표시-->
      {{ username }}
    </router-link>
  </li>
</template>
