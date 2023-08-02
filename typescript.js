// /** 1. 기본문법 */
// let 이름 :string = 'noi'
// let 나이 :number = 28
// let 출생지역 :string = 'Changwon'
// let favorite :{songTitle : string, singer : string} = {songTitle : '눈물이 더 가까운 사람', singer : '이홍기'}
// let project :{
//   member :string[],
//   days :number,
//   started :boolean,
// } = {
//   member : ['kim', 'park'],
//   days : 30,
//   started : true,
// }
// /** 2. Union Type */
// let user :string = 'kim';
// let age :(undefined | number) = undefined;
// let married :boolean = false; 
// let 철수 :(string|number|undefined|boolean)[] = [user, age, married];
// let 학교 : {
//   score :(number|boolean)[],
//   teacher :string,
//   friend :string|string[]
// } = {
//   score : [100, 97, 84],
//   teacher : 'Phil',
//   friend : 'John'
// }
// 학교.score[4] = false;
// 학교.friend = ['Lee' , 학교.teacher]
// /** 함수에 타입 지정하는 법 & void 타입 */
// function 함수 (x :number) :number {
//   return x * 2
// }
// //void : 함수에서만 사용가능, return이 없는 경우 사용
// function 함수 (x :number) :void {
//   1 + 1
// }
// //union type사용 시 타입지정을 엄격히 안하면 에러남
// function 함수 (x :number | string) :number {
//   return x + 2 //string일 수도 있기때문에 에러남
// }
// function 숙제1 (name? :string) {
//   if (name) {
//     console.log(`안녕하세요 ${name}`)
//   } else {
//     console.log(`이름이 없습니다`)
//   }
// }
// function 숙제2 (x :number | string) :number {
//   return console.log(x.toString().length)
// }
// function 태욱이는결혼가능할까 (money :number, house :boolean, charm :string) :string | void{
//   let score :number = 0
//   score += money  //월소득 당 점수 (만원단위)
//   if (house) { score += 500 } //집 보유하고 있으면 +500
//   if (charm === '상') { score += 100} //외모 "상"이면 +100
//   if (score >= 600){
//     return '결혼가능'
//   }
// }
// /** Type, Interface */
// //type
// type personType = {
//   name :string,
//   age :number
// }
// //type확장
// type extendPersonType = personType & {
//   nickname :string
// }
// //interface
// interface personInterface {
//   name :string, 
//   age :number,
// }
// //interface확장1 :: 재선언 (자동확장)
// interface personInterface {
//   nickname :string,
// }
// //interface확장2 :: extend
// interface extendPersonInterface extend personInterface {
//   email :string
// }
// /** 타입 확정하기 Narrowing & Assertion */
// // narrowing : union type 등으로 type이 하나로 확정되지 않았을 경우 구체화 시켜주는 방법
// // assertion : union type 등으로 type이 하나로 확정되지 않았을 경우 타입 덮어쓰기
//Narrowing
// function Narrowing1 (x :number|string){
//   if (typeof x === 'string'){
//     return x + '1'
//   } else {
//     return x + 1
//   }
// }
// function Narrowing2 (x :number|string){
//   let array :number[] = [];
//   array[0] = x; //array가 number 또는 string으로 정해지지 않아서 에러남
// }
// function Narrowing3 (x :number|string){
//   let array :number[] = [];
//   if (typeof x === 'number'){
//     array[0] = x;
//   } else {
//   }
// }
//Assertion
// function Assertion1 (x :number|string){
//   let array :number[] = [];
//   array[0] = x as number;  //왼쪽에 잇는 변수를 as 이후 타입으로 덮어씀
// }
//숙제
// function narrow1 (arr :(number|string)[]){
//   let ans :number[] = [];
//   arr.forEach((x)=>{
//     if (typeof x === 'string'){
//       ans.push(parseInt(x))
//     } else {
//       ans.push(x)
//     }
//   })
//   return ans
// }
// console.log(narrow1([123, '3']))
// function narrow2 (obj :{subject : (string|string[])}){
//   let ans : string;
//   if (typeof obj.subject === 'string'){
//     ans = obj.subject
//   } else {
//     obj.subject.forEach((x) => {
//       ans = x
//     })
//   }
//   return ans
// }
// console.log(narrow2( { subject : 'math' } ))  //이 경우 'math'를 return
// console.log(narrow2( { subject : ['science', 'art', 'korean'] } )) //이 경우 'korean'을 return
/* 타입도 변수에 담아쓰세요 type 키워드 써서 & readonly */
// type Boyfriend = {
//   readonly name :string, // object 내의 밸류도 변경할 수 없도록 해줌 (읽기전용!)
// }
// const ddony :Boyfriend = {
//   name : 'JangDdoNy'
// }
// ddony.name = 'HyunJin'
// console.log(ddony.name) //HyunJin 으로 변경되지만 터미널 상에 경고처리 해줌
/** Literal Types로 만드는 const 변수 유사품 */
// const 장또니 :'대머리'|'못생김'
// function 또니(a :'키작음') :'노이가아까움' {
//   return '노이가아까움'
// }
// function literal(x :'가위'|'바위'|'보') :('가위'|'바위'|'보')[]{
//   return ['가위']
// }
// var 자료 = {
//   name : 'kim'
// } as const // as const를 붙여줘야 자료 object 안의 타입들이 다 잠김 
// function 함수 (x :'kim'){
// }
// 함수(자료.kim) //에러남 : 자료의 name의 타입이 'kim'이 아니라 'string'이기 때문
// // 내생각엔 자료라는 object 안의 name의 값이 얼마든지 바뀔 수 있어서 그런 것 같음
/** 함수와 methods에 type alias 지정하는 법 */
// type 함수타입 = (a :string) => number //함수 타입지정하려면 arrow function 써야함
// //함수표현식
// let 함수 :함수타입 = () => {}
// //함수선언식
// function 함수() {} // 함수선언식은 함수타입 따로 지정 불가능
//숙제1
// type Member = {
//   name : string,
//   age : 30,
//   plusOne : (x :number) => number,
//   changeName : () => void,
// }
// let 회원정보2 :Member = {
//   name : 'kim',
//   age : 30,
//   plusOne (x){
//     return x + 1
//   },
//   changeName : () => {
//     console.log('안녕')
//   }
// }
// 회원정보2.plusOne(1);
// 회원정보2.changeName();
//숙제2
// type cutType = (x :string) => string
// let cutZero :cutType = (x) => {
//   let ans :string;
//   let test :string = x.slice(0,1)
//   if (test === '0'){
//     ans = x.slice(1,(x.length-1))
//   } else {
//     ans = x
//   }
//   return ans
// }
// console.log(cutZero('101234'))
// type removeType = (x :string) => number
// let removeDash :removeType = (x) => {
//   let ans :number = x.replace(/-/g,'')
//   return ans
// }
// console.log(removeDash('010-1234-5678'))
// //숙제3
// type funcType1 = (x :string) => string;
// type funcType2 = (x :string) => number;
// function call(x :string, func1 :funcType1, func2 :funcType2){
//   console.log(func2(func1(x)))
// }
// call('010-1111-2222', cutZero, removeDash)
