export default [
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('../pages/auth/LoginPage.vue'),
  },
  {
    path: '/auth/join',
    name: 'join',
    component: () => import('../pages/auth/JoinPage.vue'),  //회원과 관련된 라우팅정보는 모두 auth.js에 정의
  },
  {
    path: '/auth/profile',
    name: 'profile',
    component: () => import('../pages/auth/ProfilePage.vue'),
  },
  {
    path: '/auth/changepassword',
    name: 'changepassword',
    component: () => import('../pages/auth/ChangePasswordPage.vue'),
  },
];
