document.addEventListener("DOMContentLoaded", () => {
    const worksTypes = document.querySelectorAll(".works-types li");
    const worksPages = document.querySelectorAll(".works-page");

    worksTypes.forEach((type) => {
        type.addEventListener("click", () => {
            worksTypes.forEach((t) => t.classList.remove("active"));
            type.classList.add("active");

            const targetType = type.getAttribute("data-type");
            worksPages.forEach((page) => {
                page.classList.toggle("hidden", !page.classList.contains(targetType));
            });
        });
    });

    worksTypes[0].click();
});