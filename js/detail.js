document.addEventListener("DOMContentLoaded", function() {
    const decreaseBtn = document.querySelector(".decrease");
    const increaseBtn = document.querySelector(".increase");
    const countSpan = document.querySelector(".count");

    let count = 1;

    increaseBtn.addEventListener("click", function() {
        count++;
        countSpan.textContent = count;
    });

    decreaseBtn.addEventListener("click", function() {
        if (count > 1) {
            count--;
            countSpan.textContent = count;
        }
    });
});
