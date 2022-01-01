// Take n from the user and print first n prime numbers.



var num = prompt("Enter the number");
 var isPrime;

 for(var i = 2; i<= num; i= i + 1){
   isPrime = true;

     for(var j=2; j<=i/2; j = j + 1) {
          if(i%j == 0){
             isPrime = false; 
             break;

      }
   }

         if(isPrime == true){
             console.log(i);

  }   
    } 