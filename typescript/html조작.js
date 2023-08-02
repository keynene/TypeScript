var 제목 = document.querySelector('#title');
// 제목.innerHTML = '반가워요'   //type이 Element일 수도 있고 null일수도 있기 때문에 에러남
//'제목'이라는 변수를 narrowing 해주기
//1. 널인지 검사
// if (제목 != null){
//   제목.innerHTML = '반가워요'
// }
// 2. instanceof 로 Element의 자식인지 검사 :: 가장 많이 사용됨
// if (제목 instanceof Element){
//   제목.innerHTML = '반가워요'
// }
// 3. as 사용하기
// let 제목 = document.querySelector('#title') as Element;
// // 제목.innerHTML = '반가워요'
// 4. ?. 사용하기 :: ?왼쪽이 있으면 실행 없으면 undefined
// if (제목?.innerHTML != undefined) {
//   제목.innerHTML = '반갑소'
// }
//class가 link인 태그 href를 카카오로 변경하기
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
//id가 button인 버튼에 클릭 시 효과 넣기
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
//id가 image인 이미지 변경하기
var 이미지 = document.querySelector('#image');
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}
//class가 naver인 태그 전부 href 카카오로 변경하기
var 네이버 = document.querySelectorAll('.naver');
네이버.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
