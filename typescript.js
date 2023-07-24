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