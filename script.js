let score = document.querySelector(".score");
let slider = document.querySelector(".slider");
let ball = document.querySelector(".ball");

let min = 0;
let max = 100;
let range = max - min;
let startPoint = 0;

let sliderWidth = slider.offsetWidth - ball.offsetWidth;

function newScore() {
    let percent = (startPoint - min) / (range);
    let position = percent * sliderWidth;
    
    ball.style.left = `${position}px`;
    score.innerText = startPoint;
}
function pullBall(event) {
    let newPosition = event.clientX - slider.getBoundingClientRect().left;

    if (newPosition > sliderWidth) {
        newPosition = sliderWidth;
    }
    else if (newPosition < 0) {
        newPosition = 0;
    }

    let percent = newPosition / sliderWidth;
    startPoint = Math.round(min + percent * range);
    
    newScore();
}

ball.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", pullBall);
});
document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", pullBall);
});
newScore();