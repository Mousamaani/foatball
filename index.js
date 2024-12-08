// game.js
const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');

let playerX = 150; // موقع اللاعب (محور X)
let playerY = 440; // موقع اللاعب (محور Y)
let obstacleY = -40; // موقع العائق
let obstacleSpeed = 3; // سرعة العائق
let score = 0;

// التحكم في اللاعب عبر السحب (أو اللمس على الجوال)
document.addEventListener('touchmove', function(event) {
    const touchX = event.touches[0].clientX;
    if (touchX > 40 && touchX < 280) {
        playerX = touchX - 20; // تحريك اللاعب بناءً على اللمس
        player.style.left = `${playerX}px`;
    }
});

// تحريك العائق
function moveObstacle() {
    obstacleY += obstacleSpeed;
    if (obstacleY > 480) {
        obstacleY = -40; // إعادة العائق من الأعلى
        obstacle.style.left = `${Math.random() * 280}px`; // تغيير موقع العائق
        score++;
        scoreDisplay.textContent = score;
    }
    obstacle.style.top = `${obstacleY}px`;

    // التحقق إذا كان العائق قد اصطدم باللاعب
    if (obstacleY > playerY - 40 && obstacleY < playerY && parseInt(obstacle.style.left) === playerX) {
        alert('Game Over! Your Score: ' + score);
        resetGame();
    }
}

// إعادة تعيين اللعبة
function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    playerX = 150;
    player.style.left = `${playerX}px`;
    obstacleY = -40;
    obstacle.style.top = `${obstacleY}px`;
}

// التحديث الدوري
setInterval(moveObstacle, 20);
