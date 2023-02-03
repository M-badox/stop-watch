//assigning variable to a agiven elment in page
let startC=document.querySelector("#start");
let stopC=document.querySelector("#stop");
let reviveC=document.querySelector("#revive");
let countsec=document.querySelector("#sec");
let countmisec=document.querySelector("#misec");
let countmin=document.querySelector("#min");
let s=00;
let ms=00;
let mn=00;
let count;
//add event listener
window.onload=function()
{
startC.onclick=function()
{
   clearInterval(count);
   count=setInterval(counting,10);
};

stopC.onclick=function()
{
    clearInterval(count);
};

reviveC.onclick=function()
{
    clearInterval(count)
     s="0";
     ms="00";
     mn="0";

     countmin.innerHTML=mn;
     countsec.innerHTML=s;
     countmisec.innerHTML=ms;
}
function counting()
{
    ms++;
  if(ms<=9)
  {
    countmisec.innerHTML="0"+ms;
  }

  else if(ms>9 && ms<99)
  {
    countmisec.innerHTML=ms;
  }

  else 
  {
    s++;
    ms=0;
    countmisec.innerHTML=ms;
  }

  if(s<=9)
  {
    countsec.innerHTML="0"+s;
  }

 else if(s>9 && s<=59)
  {
    countsec.innerHTML=s
  }

  else
  {
    mn++;
    s=0;
    ms=0;
    countmisec.innerHTML=ms;
    countsec.innerHTML=s;
  }
  if(mn<=9)
  {
    countmin.innerHTML="0"+mn;
  }
  else
  {
    countmin.innerHTML=mn;
  }
}
}

