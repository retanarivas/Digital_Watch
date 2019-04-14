setInterval(function update() {
    var dt = new Date();
    var hr = dt.getHours();
    var sc = dt.getMinutes();
    var sec = dt.getSeconds();
    var day = dt.getDay();
    var month = dt.getMonth();
    var yaer = dt.getFullYear();
    document.getElementById("digitalnumber").innerHTML= hr + " : " + sc + " : " + sec;
    document.getElementById("dates").innerHTML= day + " - " + (month + 1) + " - " + yaer;
}, 1000);