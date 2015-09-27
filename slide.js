var maxImages = 3;
var image = 1;
var slider = document.getElementById('slider');
var secDuration = 5;
var timeout;

function changeImage(n) {
    
    var boutton = document.getElementById('b' + image);
    boutton.className = "boutton";
    
    if(n < 1 || n > maxImages) {
        n = 1;
    }
    slider.className = "image" + n;
    image = n
    boutton = document.getElementById('b' + image);
    boutton.className = "bouttonActiv";
    
    clearTimeout(timeout);
    timeout = setTimeout("nextSlide()", secDuration * 1000);
}

function nextSlide() {
    changeImage(image + 1);
}

changeImage(1);