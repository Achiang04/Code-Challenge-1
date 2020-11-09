const Calculator = function() {
  // do code here
  // let hasil = "";
  this.evaluate = function(str) {
    console.log(str)
  }
  // for (let i = 0; i < str; i++){
  //   hasil += str[i]
  // }
  
};

// Test Function do not edit
function Test(fun, result) {
  console.log(fun === result)
}

const calculate = new Calculator()

Test(calculate.evaluate('127'), 127)
Test(calculate.evaluate('2 + 3'), 5);
Test(calculate.evaluate('2 - 3 - 4'), -5);
Test(calculate.evaluate('10 *  5 / 2'), 25);

console.log("Bonus Test")
Test(calculate.evaluate('10 + 6 / 2'), 13);

// Test(calculate('contoh'), 13);

//testing