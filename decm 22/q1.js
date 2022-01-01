//create an array using .push with prompt and also using parseInt(); -> Take three numbers and find max. (Using arrays) -> Math.max(); //For further reading.
 
 const num1 = parseFloat(prompt("Enter first number: "));
 const num2 = parseFloat(prompt("Enter second number: "));
 const num3 = parseFloat(prompt("Enter third number: "));
 let largest;

 // check the condition
 if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
 else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
 else {
    largest = num3;
}

 