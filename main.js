var secondsLeft = 20;
var countdownElement = document.getElementById("countdown");
var countdownInterval = setInterval(function() {
    secondsLeft--;
    countdownElement.textContent = "頁面將在 " + secondsLeft + " 秒後自動刷新...";
    if (secondsLeft <= 0) {
        clearInterval(countdownInterval);
        location.reload();
    }
}, 1000);
