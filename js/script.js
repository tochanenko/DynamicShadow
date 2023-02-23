let shadows = document.getElementsByClassName("dynamic_shadow");
console.log(shadows)

onmousemove = function (e) {
	for (let i = 0; i < shadows.length; i++) {
		var rect = shadows[i].getBoundingClientRect();
		let centerX = rect.left + (rect.right - rect.left) / 2;
		let centerY = rect.top + (rect.bottom - rect.top) / 2;

		let shadowDistanseX = e.clientX - centerX;
		let shadowDistanseY = e.clientY - centerY;

		let shadowX = Math.log(Math.abs(shadowDistanseX / 5.0) + 1) * Math.sign(shadowDistanseX);
		let shadowY = Math.log(Math.abs(shadowDistanseY / 5.0) + 1) * Math.sign(shadowDistanseY);

		shadows[i].style.textShadow = shadowX + "px " + shadowY + "px 3px gray";
	}
}