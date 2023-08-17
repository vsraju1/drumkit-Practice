var drums = document.querySelectorAll(".drum").length;

for (var i = 0; i < drums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var currentElement = this.innerHTML;
        makeSound(currentElement);
        animation(currentElement);
    });
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animation(event.key);
});

function makeSound(currentElement) {

    switch (currentElement) {
        case "w": tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a": tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s": tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d": tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j": snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k": crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l": kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

function animation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 0.200);

}






