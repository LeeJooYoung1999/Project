<script setup>
import Header from './Header.vue';
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="container">
    <Header />
    <NavBar />
    <div class="content my-5 px-3">
      <slot></slot>   <!-- 어떤컴포넌트든 집어넣을수 있는 헐렁한 녀석 slot -->
    </div>
    <Footer />
  </div>
</template>
