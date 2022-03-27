const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const eventDay ='1 Jan 2023';

function countdown(){
    const eventDayData = new Date(eventDay);
    const currentData = new Date();
    const diff = (eventDayData-currentData)/1000
    const days = Math.floor(diff / 3600 / 24)
    const hours = Math.floor(diff / 3600 )% 24
    const mins = Math.floor(diff / 60) %60
    const sec = Math.floor(diff) % 60
    daysEl.innerHTML= formateTime(days);
    hoursEl.innerHTML= formateTime(hours);
    minsEl.innerHTML= formateTime(mins);
    secondsEl.innerHTML= formateTime(sec);

   
}
function formateTime(time){
    return time < 10 ? `0${time}` : time;

}
setInterval(countdown,1000)