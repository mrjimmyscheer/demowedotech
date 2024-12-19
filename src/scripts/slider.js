function slider() {
    const test = tns({
        container: ".my-slider",
        items: 1,
        // mouseDrag: true,
        nav: true,
        controls: false,
        speed: 800,
        // lazyload: true
    });

    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(function myFunction(item, index) {
        item.addEventListener("click", () => {
            const slideIndex = index;
            test.goTo(slideIndex);
            const activeNav = document.querySelector(".tns-nav-active");
            activeNav.innerHTML = "0" + (slideIndex + 1);
        });
    });
}

export default slider;
