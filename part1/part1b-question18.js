var everySecond = setInterval(realTime, 1000);

function realTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

