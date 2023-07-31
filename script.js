const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelector('.chosen-color');
const eraser = document.querySelector('.eraser');

let color = 'black';

colors.onchange = function () {
	color = colors.value;
}

pixels.forEach((pixel) => {
	pixel.addEventListener('click', function () {
		if (eraser.checked) {
			pixel.style.backgroundColor = 'white';
		} else { pixel.style.backgroundColor = color; }

	});
});