

/* 

A closure is a function that remember variables from its outer(parent)
scope, even after the outer function has finished executing.

it "closes over" those variables and keeps them alive
*/

function check() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const c1 = check();
const c2 = check();


c1(); //1
c1(); //2
c2(); //1
c1(); //3
c2(); //2


