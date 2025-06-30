<script setup>
 // RouterView는 vue-router에서 제공하는 컴포넌트임
 // 현재 URL 경로에 따라 맞는 컴포넌트를 화면에 보여줌
import { RouterView } from 'vue-router';
import DefaultLayout from './components/layouts/DefaultLayout.vue';
</script>

<template>
  <DefaultLayout>
    <RouterView />  <!-- RouterView는 라우터 설정에따라 해당컴포넌트를 이위치에표시함-->
  </DefaultLayout>
</template>

<style scoped>
/* 아직 스타일 적용X */
</style>
