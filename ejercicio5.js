var result = document.getElementsByName("result")[0];
var calculator = document.getElementsByName("calculator")[0];

var calcTotal = function(){
  calculator.value = eval(calculator.value);
}


function number(n) {
  calculator.value += n
}