function Time()
{
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").innerText = hour + ":" + min + ":" + sec;
    let t = setTimeout(function(){ Time() }, 1000);
}

function updateTime(k) 
{
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
}


