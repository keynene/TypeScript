// class Person {
//   data : number = 0;
// }

// let john = new Person();
// let kim = new Person();

// console.log(john.data);
// console.log(kim.data); 


// class Person {
//   name : string;
//   age : number;
//   constructor (a : string){
//     this.name = a;
//     this.age = 20;
//   }
// }

//숙제1
// class Car {
//   model : string;
//   price : number;

//   constructor(m :string, p :number){
//     this.model = m;
//     this.price = p;
//   }
//   tax() :number{
//     return this.price /= 10 
//   }
// }

// let car1 = new Car('소나타', 3000)
// console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
// console.log(car1.tax()) //콘솔창 출력결과는 300



//숙제2
class Word {
  num 
  str 

  constructor(...w :(string|number)[]){
    let numList :number[] = []
    let strList :string[] = []
    
    w.forEach((x)=>{
      if (typeof x === 'number'){
        numList.push(x)
      } else {
        strList.push(x)
      }
    })
    this.num = numList;
    this.str = strList;

  }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']