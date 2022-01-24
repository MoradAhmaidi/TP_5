//Varibles
const birthday=new Date(30,09,2000);
var d=document.querySelector('#day'),
    h=document.querySelector('#hour'),
    m=document.querySelector('#min'),
    s=document.querySelector('#sec');

//Function
function Count()
{
    var sec,min,hour,day;
    const currentDate = new Date();
    const countdate=  (currentDate -  birthday) / 1000;

    day=Math.floor(countdate / 3600 / 24);
    hour=Math.floor(countdate /3600)%24;
    min=Math.floor(countdate / 60 )%60;
    sec=Math.floor(countdate)  % 60;

    d.innerHTML=day;
    h.innerHTML=hour;
    m.innerHTML=min;
    s.innerHTML=sec;
    console.log(day+" "+hour+" "+min+" "+sec);
}

//Events
setInterval(Count,1000);