/** 1. 기본문법 */
let 이름 :string = 'noi'
let 나이 :number = 28
let 출생지역 :string = 'Changwon'

let favorite :{songTitle : string, singer : string} = {songTitle : '눈물이 더 가까운 사람', singer : '이홍기'}

let project :{
  member :string[],
  days :number,
  started :boolean,
} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}

/** 2. Union Type */
let user :string = 'kim';
let age :(undefined | number) = undefined;
let married :boolean = false; 
let 철수 :(string|number|undefined|boolean)[] = [user, age, married];

let 학교 : {
  score :(number|boolean)[],
  teacher :string,
  friend :string|string[]
} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

/** 3. Function */
function 함수 (x :number) :number {
  return x * 2
}

//void : 함수에서만 사용가능, return이 없는 경우 사용
function 함수 (x :number) :void {
  1 + 1
}

//union type사용 시 타입지정을 엄격히 안하면 에러남
function 함수 (x :number | string) :number {
  return x + 2 //string일 수도 있기때문에 에러남
}

function 숙제1 (name? :string) {
  if (name) {
    console.log(`안녕하세요 ${name}`)
  } else {
    console.log(`이름이 없습니다`)
  }
}

function 숙제2 (x :number | string) :number {
  return console.log(x.toString().length)
}

function 태욱이는결혼가능할까 (money :number, house :boolean, charm :string) :string | void{
  let score :number = 0
  score += money  //월소득 당 점수 (만원단위)
  if (house) { score += 500 } //집 보유하고 있으면 +500
  if (charm === '상') { score += 100} //외모 "상"이면 +100
  if (score >= 600){
    return '결혼가능'
  }
}

