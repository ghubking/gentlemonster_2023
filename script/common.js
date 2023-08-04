//header, footer JS
// header 전체메뉴 스크립트 flow
const nav = document.querySelector('#nav') //햄버거메뉴
const open_nav = document.querySelector('#open_nav') //nav클릭시open대상
const nav_close = document.querySelector('#nav_close') // X닫기
console.log(nav_close, nav, open_nav)
// 1. open-nav 초기 숨기기 #open_nav {display:none;}
open_nav.style.transform = 'translateX(100%)';  //브라우저 화면 밖으로
// css값 상태에 따라 변경이 일어날 경우 애니메이션 transition
open_nav.style.transition = 'transform 1s ease';
// 2. 햄버거메뉴 클릭 시 open-nav 출력
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)'
    // display:none 으로 숨긴대상을 다시 보이게 할 경우
    // 기존 디자인 css 에서 flex로 정렬한 대상이면 display = 'flex'
    // 기존 디자인 css 에서 flex 설정이 없었다면 display = 'block'
})
// 3. open-nav 안 X버튼(nav_close) 클릭 시 open-nav 숨기기
nav_close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)';
})

// swiper-slide open-nav 광고영역
const nav_adver = new Swiper('#nav_adver',{   // 화면에서 슬라이드가 당겨지는지 확인
    direction:'horizontal',
    autoplay:{delay:1000},
    loop:true,
    navigation: {
        nextEl: '#nav_adver .swiper-button-next',
        prevEl: '#nav_adver .swiper-button-prev',
    },
});
