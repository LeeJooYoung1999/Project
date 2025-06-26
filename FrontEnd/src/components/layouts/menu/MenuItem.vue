<script setup>
// menu라는 props를 객체타입으로받아옴(필수)
const props = defineProps({
  menu: { Type: Object, required: true },
});
</script>

<template>
  <!-- 메뉴 항목하나-->
  <li class="nav-item">
    <!-- 링크로이동(url로) -->
    <router-link class="nav-link" :to="menu.url">
      <!-- 아이콘표시-->
      <i :class="menu.icon"></i>
      <!-- 메뉴 이름표시-->
      {{ menu.title }}
    </router-link>
  </li>
</template>

<style></style>
