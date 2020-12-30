var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

bluCar_width = 100;
bluCar_height = 100;
bluCar_x = 20;
bluCar_y = 10;
var background_image = "download.png";
var bluCar_image = "blu car.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    bluCar_imgTag = new Image();
    bluCar_imgTag.onload = uploadbluCar();
    bluCar_imgTag.src = bluCar_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadblueCar() {
    ctx.drawImage(bluCar_imgTag, bluCar_x, bluCar_y, bluCar_width, bluCar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (bluCar_y>=0) {
        bluCar_y=bluCar_y-10;
        console.log("when up arrow is pressed","x="+ bluCar_x, "y="+ bluCar_y);
        uploadBackground();
        uploadbluCar();

    }
}

function down() {
    if (bluCar_y<=500) {
        bluCar_y=bluCar_y+10;
        console.log("when down arrow is pressed","x="+ bluCar_x, "y="+ bluCar_y);
        uploadBackground();
        uploadbluCar();
    }
}

function right() {
    if (bluCar_x<=700) {
        bluCar_x=bluCar_x+10;
        console.log("when left arrow is pressed","x="+ bluCar_x, "y="+ bluCar_y);
        uploadBackground();
        uploadbluCar();
    }
}

function left() {
    if (bluCar_x>=0) {
        bluCar_x=rover_x-10;
        console.log("when right arrow is presed","x="+ bluCar_x, "y="+ bluCar_y);
        uploadBackground();
        uploadbluCar();
    }

}