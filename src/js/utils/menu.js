export const menu = () => {
  window.addEventListener('load', function () {
    // const buttonMenu = document.getElementById('#button-menu');
    // const menu = document.getElementById('#menu');


    // buttonMenu.addEventListener('click', () => {
    //   menu.classList.toggle('active');
    // })
    let number = document.querySelector(".slider__control__nubmer > span");
    let prev = document.querySelector('.slider__control[data-slide="prev"]');
    let next = document.querySelector('.slider__control[data-slide="next"]');
    prev.addEventListener('click', ()=>{
      number.innerHTML--
    })
    next.addEventListener('click', ()=>{
      number.innerHTML++
    })
  })

}
