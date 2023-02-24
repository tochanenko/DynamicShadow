let shadows = document.getElementsByClassName("dynamic_shadow");
console.log(shadows)

onmousemove = function (e) {
	for (let i = 0; i < shadows.length; i++) {
		var rect = shadows[i].getBoundingClientRect();
		let centerX = rect.left + (rect.right - rect.left) / 2;
		let centerY = rect.top + (rect.bottom - rect.top) / 2;

		let shadowDistanseX = e.clientX - centerX;
		let shadowDistanseY = e.clientY - centerY;

		let shadowDistance = Math.sqrt(Math.pow(shadowDistanseX, 2) + Math.pow(shadowDistanseY, 2))
		let sinA = shadowDistanseX / shadowDistance;
		let sinB = shadowDistanseY / shadowDistance;

		let actualShadowDistance = Math.log(shadowDistance / 5.0 + 1);

		let actualShadowDistanceX = actualShadowDistance * sinA * -1;
		let actualShadowDistanceY = actualShadowDistance * sinB * -1;

		let shadowBlur = actualShadowDistance * 2;
		// let shadowOpacity = 0.8 - actualShadowDistance / 10;
		let shadowOpacity = 0.6;

		shadows[i].style.textShadow = actualShadowDistanceX + "px " + actualShadowDistanceY + "px " + shadowBlur + "px rgba(0,0,0," + shadowOpacity + ")";
	}
}