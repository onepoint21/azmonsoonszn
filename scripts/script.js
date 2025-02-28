// Calculate time until start date

function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Let's go!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            `${days}D:${hours}H:${minutes}M:${seconds}S`;
    }

    updateCountdown(); // Initial call to avoid 1s delay
    const interval = setInterval(updateCountdown, 1000);
}

// Set your target date
const targetDate = new Date("June 15, 2025 12:00:00").getTime();
startCountdown(targetDate);
