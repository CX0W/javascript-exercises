const add = function(a,b) {
  return (a+b);
	
};

const subtract = function(a,b) {
  return (a-b);
	
};

const sum = function(array) {
  let sum=0;
  for (let i=0;i<array.length;i++){
    //console.log(args[i]);
    sum=sum+parseInt(array[i]);
    console.log(sum);
  }
  return sum;
	
};

const multiply = function(array) {

  let p=1;
  for (let i=0;i<array.length;i++){
    p=p*array[i];
  }
  return p;

};

const power = function(a,b) {
  let pow=1;

  while (b>0){
    pow=pow*a;
    b--;
  }

  return pow;


	
};

const factorial = function(a) {
  let i=a;
  let fac=1;
  while (i>0){
    fac=fac*i;
    i--;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
