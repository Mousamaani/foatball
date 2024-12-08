// game.js
const ball = document.getElementById('ball');
const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');

let ballX = 290;
let ballY = 190;
let ballSpeedX = 4;
let ballSpeedY = 4;
let paddle1Y = 150;
let paddle2Y = 150;
let player1Score = 0;
let player2Score = 0;

// تحريك المجاديف
document.addEventListener('keydown', function(event) {
    if (event.key === 'w' && paddle1Y > 0) {
        paddle1Y -= 20;
    }
    if (event.key === 's' && paddle1Y < 300) {
        paddle1Y += 20;
    }
    if (event.key === 'ArrowUp' && paddle2Y > 0) {
        paddle2Y -= 20;
    }
    if (event.key === 'ArrowDown' && paddle2Y < 300) {
        paddle2Y += 20;
    }
});

// اللعبة الرئيسية
function updateGame() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // التفاعل مع الجدران
    if (ballY <= 0 || ballY >= 380) {
        ballSpeedY = -ballSpeedY;
    }

    // التفاعل مع المجاديف
    if (ballX <= 20 && ballY >= paddle1Y && ballY <= paddle1Y + 100) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX >= 560 && ballY >= paddle2Y && ballY <= paddle2Y + 100) {
        ballSpeedX = -ballSpeedX;
    }

    // تسجل النقاط
    if (ballX <= 0) {
        player2Score++;
        score2.textContent = player2Score;
        resetBall();
    }

    if (ballX >= 580) {
        player1Score++;
        score1.textContent = player1Score;
        resetBall();
    }

    // تحريك الكرة
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    // تحريك المجاديف
    paddle1.style.top = `${paddle1Y}px`;
    paddle2.style.top = `${paddle2Y}px`;
}

// إعادة تعيين الكرة
function resetBall() {
    ballX = 290;
    ballY = 190;
    ballSpeedX = -ballSpeedX;
    ballSpeedY = 4;
}

// تشغيل اللعبة
setInterval(updateGame, 1000 / 60); // 60 إطار في الثانية
