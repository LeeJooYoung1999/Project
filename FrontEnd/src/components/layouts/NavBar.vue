<script setup>

import { reactive, computed } from 'vue'; // Vue의 Composition API에서 반응형 객체와 계산 속성을불러옴
import config from '@/config';            // 전역 설정값을 담고있는 config파일을 불러옴(현재 코드에서는 사용되지않음)
import MenuGroup from './menu/MenuGroup.vue';
import AccountMenuGroup from './menu/AccountMenuGroup.vue';

// 반응형 객체생성. isNavShow는 네비게이션 메뉴의 표시여부를 나타냄
// 객체 형태의 반응형상태 선언
let state = reactive({ isNavShow: false });


// state.isNavShow 값에 따라 적용할 CSS클래스명을 동적으로계산
// 상태에 따라 자동계산되는 속성 정의
let navClass = computed(() =>
    state.isNavShow
      ? 'collapse navbar-collapse show' // 메뉴가 열릴 때 클래스
      : 'collapse navbar-collapse'      // 메뉴가 닫힐때 클래스
);


// 버튼 클릭등으로 isNavShow값을 true/false로 토글하는 함수
const toggleNavShow = () => (state.isNavShow = !state.isNavShow);
</script>

<template>
  <!--부트스트랩 스타일이 적용된 최상위 네비게이션바-->
  <nav class="navbarnavbar-expand-smbg-primary navbar-dark">
    <!--반응형 레이아웃을 위한 컨테이너-->
    <div class="container-fluid">
      <!--홈으로 이동하는 라우터링크, 브랜드영역-->
      <router-link class="navbar-brand" to="/">
        <i class="fa-solid fa-house"></i>
        <!--집모양아이콘-->
        Scoula
        <!--브랜드명-->
      </router-link>
      <!--모바일화면에서 메뉴버튼 역할을 하는 햄버거버튼-->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
        @click="toggleNavShow"
      >
        <!--햄버거 아이콘-->
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--메뉴영역: isNavShow값에따라동적으로class가변경됨-->
      <div :class="navClass" id="collapsibleNavbar">
        <!--추후 네비게이션 메뉴항목들이 들어갈자리-->
        <MenuGroup :menus ="config.menus" />
        <AccountMenuGroup />
      </div>
    </div>
  </nav>
</template>
