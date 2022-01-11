import {menu} from "./utils/menu";
import {slider} from "./utils/slider";
import {navMenu} from "./utils/navMenu";

document.addEventListener('DOMContentLoaded', function() {
	menu();
	slider();
	navMenu();
	window.onload = function () {
		console.log("load")
		document.body.classList.add('loaded_hiding');
		window.setTimeout(function () {
		  document.body.classList.add('loaded');
		  document.body.classList.remove('loaded_hiding');
		}, 500);
	}
})
