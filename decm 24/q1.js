// Factorial of a number



var num = prompt("Enter the number");
var fact = 1;

    for(num; num>= 1; num = num - 1) {
         fact = fact * num;
          console.log(fact);
}