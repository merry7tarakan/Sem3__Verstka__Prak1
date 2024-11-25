window.addEventListener("DOMContentLoaded", function () {
	"use strict"; 

	const cookies = document.getElementById("cookies");
	const cookiesBtn = document.getElementById("cookies__btn");

	cookiesBtn.addEventListener("click", function () {
		cookies.style.display = "none";
	});

});