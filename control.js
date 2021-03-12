function submitForm(){
    var frontDoorStart = document.getElementById('frontDoorStart').value;
    var frontDoorEnd = document.getElementById('frontDoorEnd').value;
    var backDoorStart = document.getElementById('backDoorStart').value;
    var backDoorEnd = document.getElementById('backDoorEnd').value;
    var garageDoorStart = document.getElementById('garageDoorStart').value;
    var garageDoorEnd = document.getElementById('garageDoorEnd').value;
    var drLightStart = document.getElementById('drLightStart').value;
    var drLightEnd = document.getElementById('drLightEnd').value;
    var lrLampStart = document.getElementById('lrLampStart').value;
    var lrLampEnd = document.getElementById('lrLampEnd').value;
    var b1LampStart = document.getElementById('b1LampStart').value;
    var b1LampEnd = document.getElementById('b1LampEnd').value;
    var b2LampStart = document.getElementById('b2LampStart').value;
    var b2LampEnd = document.getElementById('b2LampEnd').value;
    var kitchFanStart = document.getElementById('kitchFanStart').value;
    var kitchFanEnd = document.getElementById('kitchFanEnd').value;
    var bathFanStart = document.getElementById('bathFanStart').value;
    var bathFanEnd = document.getElementById('bathFanEnd').value;
    var washerStart = document.getElementById('washerStart').value;
    var washerEnd = document.getElementById('washerEnd').value;
    var dryerStart = document.getElementById('dryerStart').value;
    var dryerEnd = document.getElementById('dryerEnd').value;

    

    let arrayData = []
        arrayData[0] = [frontDoorStart, frontDoorEnd];
        arrayData[1] = [backDoorStart, backDoorEnd];
        arrayData[2] = [garageDoorStart, garageDoorEnd];
        arrayData[3] = [drLightStart, drLightEnd];
        arrayData[4] = [lrLampStart, lrLampEnd];
        arrayData[5] = [b1LampStart, b1LampEnd];
        arrayData[6] = [b2LampStart, b2LampEnd];
        arrayData[7] = [kitchFanStart, kitchFanEnd];
        arrayData[8] = [bathFanStart, bathFanEnd]; 
        arrayData[9] = [washerStart, washerEnd];
        arrayData[10] = [dryerStart, dryerEnd];

    window.localStorage.setItem("smartTimings", arrayData);
}

 