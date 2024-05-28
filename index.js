let counter=0;
let hour=0;
let minute=0;
let seconds=0;
let timer=false;
let hourDiv=document.getElementById('hour');
let minuteDiv=document.getElementById('minutes');
let secondDiv=document.getElementById('seconds');
let counterDiv=document.getElementById('ms');
let video=document.getElementById('myVideo');
let videoPlay=true;
function start(){
    timer=true;
    calculation();
    // setInterval(calculation,10);
    if(videoPlay==false){
        video.play();
        videoPlay=true;
    }
}
function stop(){
    timer=false;
   if(videoPlay==true){
    video.pause();
    videoPlay=false;
   }
}
function reset(){
    timer=false;
    if(videoPlay==true){
        video.pause();
        videoPlay=false;
       }
    
    counter=0;
    hour=0;
    minute=0;
    seconds=0;
    hourDiv.innerText="00";
    minuteDiv.innerText="00";
    secondDiv.innerText="00";
    counterDiv.innerText="00";


}
function calculation(){
    if(timer==true){
        counter=counter+1;
        if(counter==100){
            seconds=seconds+1;
            counter=0;
        }
       if(seconds==60){
            minute=minute+1;
            seconds=0;
        }
        
       if(minute==60){
            hour=hour+1;
            minute=0;
        }
        hourDiv.innerText = String(hour).padStart(2, '0');
        minuteDiv.innerText = String(minute).padStart(2, '0');
        secondDiv.innerText = String(seconds).padStart(2, '0');
        counterDiv.innerText = String(counter).padStart(2, '0');
    setTimeout(calculation,10);


// console.log("hii");

// clearInterval(x);
        
    }
}