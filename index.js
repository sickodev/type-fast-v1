// BUTTON FUNCTIONS
document.querySelector(".start").addEventListener("click", main);
document.addEventListener("keydown", function (event) {
    submit(event.key);
});

// GLOBAL VARIABLES
var text;
var t;
var count = 0;
var sec = 30;
var timer_val

function main() {
    document.querySelector(".start").style.visibility = "hidden";
    timer();
    t = document.getElementById("text");
    text = random();
    t.innerHTML = text;
}

function random() {
    var res = "";
    var poss = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var len = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (var i = 0; i < 5; i++) {
        res += poss.charAt(Math.floor(Math.random() * poss.length));
    }
    return res;
}

function submit(keyPressed) {
    var inputField = document.getElementById("user-input");
    if (keyPressed == "Enter") {
        if (sec > 0) {
            if (inputField.value.length == 0) {
                endScreen();
            }
            else if (inputField.value == text) {
                count += 1;
                document.getElementById("score").innerHTML = count;
                main();
            }
            else if (inputField.value != text) {
                endScreen();
            }
        }
    }
}

function timer() {
    sec = 45;
    timer_val = setInterval(function () {
        document.getElementById('timer').innerHTML = "00:" + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer_val);
            endScreen();
        }
    }, 1000);
}

function endScreen() {
    document.getElementById('timer').innerHTML = "Score: " + count;
}