
const start=document.querySelector("#start")
const stop=document.querySelector("#stop")
const reset=document.querySelector("#reset")

const Hour=document.getElementById('hr')
const Minute=document.getElementById('min')
const Second =document.getElementById('sec')
const Counter=document.getElementById('count')


var hr=0;
var min=0;
var sec=0;
var count=0;

 var timer=false//time ruka hua hai


start.addEventListener("click",()=>{
    timer=true;
    stopwatch()
})
stop.addEventListener("click",()=>{
    timer = false;
})
reset.addEventListener("click",()=>{
    timer = false;   
    hr=0;
    min=0;
    sec=0;
    count=0;
    Hour.innerHTML="00";
    Minute.innerHTML="00";
    Second.innerHTML="00";
    Counter.innerHTML="00";

})


function stopwatch() 
{
   if(timer){
      count= count+1;
      if(count ==100){
        sec=sec+1;
        count = 0;
                 }
      if(sec == 60){
            min=min+1;
            sec = 0;
         }
      if(min==60 ){
         hr=hr+1;
         min = 0;
         sec = 0;}
     var hrString= hr;
     var minString=min;
     var secString=sec;
     var countString=count;
     if(hr<10){
        hrString= "0"+ hrString
     }
     if(min<10){
        minString= "0"+ minString
     }
     if(sec<10){
        secString= "0"+ secString
     }
     if(count<10){
        countString= "0"+ countString
     }
    Hour.innerHTML=hrString;
    Minute.innerHTML=minString;
    Second.innerHTML=secString;
    Counter.innerHTML=countString;

    setTimeout(stopwatch, 10);
   }
}