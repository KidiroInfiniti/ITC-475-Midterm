function submitForm(){
    var fds = document.getElementById('frontDoorStart').value;
    var fde = document.getElementById('frontDoorEnd').value;
    var bds = document.getElementById('backDoorStart').value;
    var bde = document.getElementById('backDoorEnd').value;
    var gds = document.getElementById('garageDoorStart').value;
    var gde = document.getElementById('garageDoorEnd').value;
    var dls = document.getElementById('drLightStart').value;
    var dle = document.getElementById('drLightEnd').value;
    var lls = document.getElementById('lrLampStart').value;
    var lle = document.getElementById('lrLampEnd').value;
    var b1ls = document.getElementById('b1LampStart').value;
    var b1le = document.getElementById('b1LampEnd').value;
    var b2ls = document.getElementById('b2LampStart').value;
    var b2le = document.getElementById('b2LampEnd').value;
    var kfs = document.getElementById('kitchFanStart').value;
    var kfe = document.getElementById('kitchFanEnd').value;
    var bfs = document.getElementById('bathFanStart').value;
    var bfe = document.getElementById('bathFanEnd').value;
    var ws = document.getElementById('washerStart').value;
    var we = document.getElementById('washerEnd').value;
    var ds = document.getElementById('dryerStart').value;
    var de = document.getElementById('dryerEnd').value;

    

    let arrayData = []
        arrayData[0] = [fds, fde];
        arrayData[1] = [bds, bde];
        arrayData[2] = [gds, gde];
        arrayData[3] = [dls, dle];
        arrayData[4] = [lls, lle];
        arrayData[5] = [b1ls, b1le];
        arrayData[6] = [b2ls, b2le];
        arrayData[7] = [kfs, kfe];
        arrayData[8] = [bfs, bfe]; 
        arrayData[9] = [ws, we];
        arrayData[10] = [ds, de];

    window.localStorage.setItem("smartTimings", arrayData);
}

 