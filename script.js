
const rows = document.querySelectorAll(".row-posters");

rows.forEach(row => {
    let isDown = false;
    let startX;
    let scrollLeft;

    row.addEventListener("mousedown", (e) => {
        isDown = true;
        row.classList.add("active");
        startX = e.pageX - row.offsetLeft;
        scrollLeft = row.scrollLeft;
    });

    row.addEventListener("mouseleave", () => {
        isDown = false;
    });

    row.addEventListener("mouseup", () => {
        isDown = false;
    });

    row.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - row.offsetLeft;
        const walk = (x - startX) * 2;
        row.scrollLeft = scrollLeft - walk;
    });
});
