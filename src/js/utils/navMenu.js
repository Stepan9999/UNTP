export const navMenu =() =>{
    const navOpenButt = document.getElementById("nav-menu");
    const navModalMenu = document.querySelector(".header__mob__modal");
    // const body = document.querySelector("body")
    
    navOpenButt.addEventListener("click", () =>{
        console.log("sadfs")
        // body.classList.toggle("lock")
        navOpenButt.classList.toggle('nav-atc')
        navModalMenu.classList.toggle('nav-modal-act')
    })
    
}