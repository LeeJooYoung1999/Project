<script setup>
import MenuItem from './MenuItem.vue';  // 메뉴 항목컴포넌트import
const props = defineProps({             // menus 배열 props 받음
  menus: { Type: Array, required: true },
});
</script>

<template>
  <!-- 네비게이션리스트-->
  <ul class="navbar-nav">
    <!-- 메뉴 배열반복렌더링-->
    <MenuItem v-for="menu in menus" :menu="menu" />
  </ul>
</template>
