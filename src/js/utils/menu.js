/** @format */

export const menu = () => {
  window.addEventListener("load", function() {
   
    const svg = document.querySelector("svg-map");
    const paths = document.querySelectorAll("svg-map > path.state");

    let i = paths.length;
    while (i--) {
      paths[i].addEventListener("mouseover", function(e) {
        svg.appendChild(e.target);
      });
    }
  });
};
