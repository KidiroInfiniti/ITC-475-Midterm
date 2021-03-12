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

function Run(){

    Time();

    var tar = window.localStorage.getItem("smartTimings");
    var timings = tar.split(',')
    console.log(timings[0]);
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();

    var imgFD = document.createElement("img");
    var imgBD = document.createElement("img");
    var imgGD = document.createElement("img");
    var imgDRL = document.createElement("img");
    var imgLRL = document.createElement("img");
    var imgB1L = document.createElement("img");
    var imgB2L = document.createElement("img");
    var imgKF = document.createElement("img");
    var imgBF = document.createElement("img");
    var imgW = document.createElement("img");
    var imgD = document.createElement("img");
//Front Door
        if ((hour >= timings[0] && hour <= timings[1]))
        {
           imgFD.src = "site_files/unlocked.png"
           imgFD.height = 50;
           imgFD.width = 50;
        }
        else
        {
            imgFD.src = "site_files/locked.png"
            imgFD.height = 50;
            imgFD.width = 50;
        }
    
    var src = document.getElementById("front");
    src.appendChild(imgFD);
//Back Door
        if ((hour >= timings[2] && hour < timings[3]))
        {
            imgBD.src = "site_files/unlocked.png"
            imgBD.height = 50;
            imgBD.width = 50;
        }
        else
        {
            imgBD.src = "site_files/locked.png"
            imgBD.height = 50;
            imgBD.width = 50;
        }

    var src = document.getElementById("back");
    src.appendChild(imgBD);
//Garage Door
        if ((hour >= timings[3] && hour < timings[4]))
        {
            imgGD.src = "site_files/gdoor_poen.png"
            imgGD.height = 50;
            imgGD.width = 50;
        }
        else
        {
            imgGD.src = "site_files/gdoor_closed.png"
            imgGD.height = 50;
            imgGD.width = 50;
        }

    var src = document.getElementById("garage");
    src.appendChild(imgGD);
//Dining Room Light
        if ((hour >= timings[5] && hour < timings[6]))
        {
            imgDRL.src = "site_files/light_on.png"
            imgDRL.height = 50;
            imgDRL.width = 50;
        }
        else
        {
            imgDRL.src = "site_files/light_off.png"
            imgDRL.height = 50;
            imgDRL.width = 50;
        }

    var src = document.getElementById("dining");
    src.appendChild(imgDRL);
//Living Room Light
        if ((hour >= timings[7] && hour < timings[8]))
        {
            imgLRL.src = "site_files/light_on.png"
            imgLRL.height = 50;
            imgLRL.width = 50;
        }
        else
        {
            imgLRL.src = "site_files/light_off.png"
            imgLRL.height = 50;
            imgLRL.width = 50;
        }

    var src = document.getElementById("living");
    src.appendChild(imgLRL);
//Bed Room 1 Light
        if ((hour >= timings[9] && hour < timings[10]))
        {
            imgB1L.src = "site_files/lamp_on.png"
            imgB1L.height = 50;
            imgB1L.width = 50;
        }
        else
        {
            imgB1L.src = "site_files/lamp_off.png"
            imgB1L.height = 50;
            imgB1L.width = 50;
        }

    var src = document.getElementById("bed1");
    src.appendChild(imgB1L);
//Bed Room 2 Light
        if ((hour >= timings[11] && hour < timings[12]))
        {
            imgB2L.src = "site_files/lamp_on.png"
            imgB2L.height = 50;
            imgB2L.width = 50;
        }
        else
        {
            imgB2L.src = "site_files/lamp_off.png"
            imgB2L.height = 50;
            imgB2L.width = 50;
        }

    var src = document.getElementById("bed2");
    src.appendChild(imgB2L);
 //Kitchen Fan   
        if ((hour >= timings[13] && hour < timings[14]))
        {
            imgKF.src = "site_files/fan_on.png"
            imgKF.height = 50;
            imgKF.width = 50;
        }
        else
        {
            imgKF.src = "site_files/fan_off.png"
            imgKF.height = 50;
            imgKF.width = 50;
        }

    var src = document.getElementById("kitchen");
    src.appendChild(imgKF);
//Bathroom Fan
        if ((hour >= timings[15] && hour < timings[16]))
        {
            imgBF.src = "site_files/fan_on.png"
            imgBF.height = 50;
            imgBF.width = 50;
        }
        else
        {
            imgBF.src = "site_files/fan_off.png"
            imgBF.height = 50;
            imgBF.width = 50;
        }

    var src = document.getElementById("bath");
    src.appendChild(imgBF);
//Washer Status
        if ((hour >= timings[17] && hour < timings[18]))
        {
            imgW.src = "site_files/laundry_on.png"
            imgW.height = 50;
            imgW.width = 50;
        }
        else
        {
            imgW.src = "site_files/laundry_off.png"
            imgW.height = 50;
            imgW.width = 50;
        }

    var src = document.getElementById("washer");
    src.appendChild(imgW);
//Dryer Status
        if ((hour >= timings[19] && hour < timings[20]))
        {
            imgD.src = "site_files/laundry_on.png"
            imgD.height = 50;
            imgD.width = 50;
        }
        else
        {
            imgD.src = "site_files/laundry_off.png"
            imgD.height = 50;
            imgD.width = 50;
        }

    var src = document.getElementById("dryer");
    src.appendChild(imgD);
}