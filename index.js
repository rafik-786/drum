var noDrum = document.querySelectorAll(".drum").length;
for (var i = 0; i < noDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
    var clicked = this.innerHTML;
    soundBox(clicked);
}

function soundBox(keyitem) {
    var audio = new Audio();
    switch (keyitem) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log(clicked);
            break;
    }
}
document.addEventListener("keypress", keyboard);

function keyboard() {
    soundBox(event.key);
}
