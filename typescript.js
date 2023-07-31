"use strict";
// /** 1. 기본문법 */
// let 이름 :string = 'noi'
// let 나이 :number = 28
// let 출생지역 :string = 'Changwon'
let cutZero = (x) => {
    let ans;
    let test = x.slice(0, 1);
    if (test === '0') {
        ans = x.slice(1, (x.length - 1));
    }
    else {
        ans = x;
    }
    return ans;
};
console.log(cutZero('101234'));
let removeDash = (x) => {
    let ans = x.replace(/-/g, '');
    return ans;
};
console.log(removeDash('010-1234-5678'));
function call(x, func1, func2) {
    console.log(func2(func1(x)));
}
call('010-1111-2222', cutZero, removeDash);
