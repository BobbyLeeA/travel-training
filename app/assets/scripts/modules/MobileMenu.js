class MobileMenu {
    constructor() {   
        this.menuContent = document.querySelector(".site-header__menu-content")
        this.siteHeader = document.querySelector(".site-header")
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.events()
    }
    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
        this.siteHeader.classList.toggle("site-header--is-expanded")
        this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    }
}

export default MobileMenu