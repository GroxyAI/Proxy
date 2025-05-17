document.addEventListener("DOMContentLoaded", () => {
    let clicks = parseInt(localStorage.getItem("clicks")) || 0;
    const countDisplay = document.getElementById("click-count");
    const clickBtn = document.getElementById("click-btn");

    countDisplay.textContent = clicks;

    clickBtn.addEventListener("click", () => {
        clicks++;
        countDisplay.textContent = clicks;
        localStorage.setItem("clicks", clicks);
    });
});
