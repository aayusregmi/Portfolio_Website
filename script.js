const menu = document.querySelector(".menu-bar");
const slide_bar = document.querySelector(".slidebar-menu");
const myPhoto = document.querySelector(".myPhoto")
menu.addEventListener("click" , ()=>{
    slide_bar.classList.toggle("openSlide");
    myPhoto.classList.toggle("removeBorder");
}) 