function navbar() {
    // //open en close searchbar
    const searchButton = document.querySelector(".search-button");
    const searchField = document.querySelector(".search-field");
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu-ding");
    const overlay = document.querySelector(".overlay");

    const toggleOverlay = () => {
        const isActiveMenu = menu.classList.contains("active");
        const isActiveSearch = searchField.classList.contains("active");
    
        overlay.classList.toggle("active", isActiveMenu || isActiveSearch);
    };
    
    searchButton.addEventListener("click", () => {
        searchField.classList.toggle("active");
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
        toggleOverlay();
    });

    //open en close menu
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
        if (searchField.classList.contains("active")) {
            searchField.classList.remove("active");
        }
        toggleOverlay();
    });

    
}

export default navbar;
