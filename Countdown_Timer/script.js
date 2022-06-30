const daysE1=document.getElementById('days');
const hourE1=document.getElementById('hours');
const minuteE1=document.getElementById('mins');
const seconds1=document.getElementById('seconds');
const currentDate=new Date();
const newYear="1 Jan "+(currentDate.getFullYear()+1);
function countdown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();
    const milliSeconds=newYearDate-currentDate;
    const days=Math.floor((milliSeconds)/(24*60*60*1000));
    const daysm=(milliSeconds)%(24*60*60*1000);
    const hours=Math.floor(daysm/(60*60*1000));
    const hourm=milliSeconds%(60*60*1000);
    const minutes=Math.floor(hourm/(60*1000));
    const minuteM=milliSeconds%(60*1000);
    const seconds=Math.floor(minuteM/1000);
 
    daysE1.innerHTML=days;
    hourE1.innerHTML=hours;
    minuteE1.innerHTML=minutes;
    seconds1.innerHTML=seconds;
}
countdown();
setInterval(countdown,1000);
