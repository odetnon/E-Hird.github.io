var then = new Date("Mar 1 1971 12:00:00").getTime();

var x = setInterval(function(){
    console.log("Running")
    
    var now = new Date().getTime();

    var difference = now - then;

    var yrs = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25))
    var dys = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25))/(1000 * 60 * 60 * 24));
    var hrs = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var min = Math.floor((difference % (1000 * 60 * 60))/(1000 * 60));
    var sec = Math.floor((difference % (1000 * 60))/(1000));

    document.getElementById("clock").innerHTML = yrs + "yrs " + dys + "days " + hrs + "hrs " + min + "mins " + sec + "secs ";
}, 1000);