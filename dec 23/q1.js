//Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.
 
 
   var g_class = {
       
        'name': "Akhil parmar",
        'marks': 96,

     'students': [

          {
            'name': "aman",
            'marks':  86,
          },

           {
            'name': "sahil",
            'marks':  49,
          },


           {
            'name': "mohan",
            'marks':  45,
          },
           
          {
            'name': "navin",
            'marks':  88,
          },

          {
            'name': "rohan",
            'marks':  99,
          },

  ],
  };
 
    //Finding greater number from above.
    
  for(var a = 0; a < g_class.students.length; a = a + 1) {
     
     if(g_class.students[a].marks >= 85) { 
    
     
   console.log(g_class.students[a].name, g_class.students[a].marks); 

 }  
 }
