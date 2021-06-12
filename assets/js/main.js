/* ケンミル */ /* 神様最高 */ "use strict"; console.log(new Date);

/* DOM */
const menuBtn = document.querySelector(".menu-btn");
const menuContent = document.querySelector(".menu-content");
const heroBtn = document.querySelector(".hero__btn");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close-btn");

/* Event Handler */

// Menu Btn
menuBtn.addEventListener("click", () => toggleMenu());

// Hero Btn
heroBtn.addEventListener("click", e => toggleModal(e.target));

// Modal
modal.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) toggleModal(e.target);
})

// Modal Close Btn
modalCloseBtn.addEventListener("click", e => toggleModal(e.target));

/* Functions */

// Toggle Menu
function toggleMenu () {
    menuContent.classList.toggle("hidden");
    menuBtn.classList.toggle("active");
}

// Toggle Modal
function toggleModal (target) {
    // console.log(target); //For Debugging
    modal.classList.toggle("hidden");
}