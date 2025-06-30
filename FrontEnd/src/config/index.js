// 스프링의 Properies와 유사한, 읽기전용 저장소. => vue컴포넌트 코딩시, 여기에 설정한값을 가져다 사용가능.
// ++) 읽기/쓰기 둘다 가능한 저장소는? => Pinia Store

export default {
  title: 'Scoula',                            // 메인 타이틀
  subtitle: 'KB Fullstack 학습(Vue+Spring)', // 서브 타이틀
  menus: [                                   // 메인 메뉴구성정보
    {
      title: '게시판',
      url: '/board/list',
      icon: 'fa-solid fa-paste',
    },
    {
      title: '여행',
      url: '/travel/list',
      icon: 'fa-solid fa-plane-departure',
    },
    {
      title: '갤러리',
      url: '/gallery/list',
      icon: 'fa-regular fa-images',
    },
  ],
  accoutMenus: {            // 인증 관련메뉴정보
    login: {
      url: '/auth/login',
      title: '로그인',
      icon: 'fa-solid fa-right-to-bracket',
    },
    join: {
      url: '/auth/join',
      title: '회원가입',
      icon: 'fa-solid fa-user-plus',
    },
  },
};
