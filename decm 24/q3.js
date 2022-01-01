//Write a program to check the given number is a perfect square or //not

 
var num = prompt("Enter the number");
var sum =0;

  for(var i = 1; i<= num/2; i = i + 1){
       if(num % i == 0) {
          sum = sum + i;

 } 
}

       if (sum == num){

           alert(num+" is perfect square");
        }
          else {
            alert(num+ "is not a Perfect Square");
}

