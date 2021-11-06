window.onload = rotate;

var theExchange = 0;
var exImages = new Array("images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg");

function rotate() {

    theExchange++;

    if (theExchange == exImages.length) {
        theExchange = 0;
    }
    document.getElementById("volunteerToday").src = exImages[theExchange];

    setTimeout(rotate, 3000);
}