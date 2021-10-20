function random(max){
 
 
  return Math.floor(Math.random(max) * max);
}
 function myFunction(){
   var lottery = random(1000);
   var rs = document.getElementById("results");
   var rs2 = document.getElementById("results");

   if(lottery > 1000){
      const array1 = [1,6,5,7];
      array1.forEach(element => rs.innerText= "Your number: " + element);
      setTimeout(function(){ alert("You won"); }, 500);
   }

   else{
    const array1 = [1,6,5,7];
    array1.forEach(element => rs.innerText= "Your number: " + element);
    setTimeout(function(){ alert("You won"); }, 500);
   }
     
   
 }


