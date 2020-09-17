
const container = document.createElement('div');
container.setAttribute('id', 'container');
container.style.width = '860px';
container.style.height = '860px';

const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset');
resetButton.innerHTML = 'Reset';

let randomColor = Math.floor(Math.random()*16777215).toString(16);

document.body.appendChild(resetButton);
document.body.appendChild(container);



setGrid(16, randomColor);

function setGrid(number, color) {
	if (number == null || number == '') {
		setGrid(16);
	}
	const parsedNumber = parseInt(number);
	for ( let i = 0 ; i < parsedNumber ; i++ ) {
		const row = document.createElement('div');
		row.classList.add('row');
		for (let j = 0 ; j < (number) ; j++) {
			const square = document.createElement('div');
			const squareWidth = ((1/number) * parseInt(container.style.width)) - 1;
			const squareHeight = ((1/number) * parseInt(container.style.height)) - 1;
			square.classList.add('square');
			square.style.width = `${squareWidth}px`;
			square.style.height = `${squareHeight}px`;
			square.addEventListener('mouseenter', () => {
				square.style.backgroundColor = '#' + randomColor;
			})
			row.appendChild(square);
		}
		container.appendChild(row);
	}
}

container.addEventListener('mouseenter', () => {
	randomColor = Math.floor(Math.random()*16777215).toString(16);
})

resetButton.addEventListener('click', () => {
	const newSquares = prompt("How many squares per side should the new sketch have?");
	container.innerHTML = '';
	setGrid(newSquares);
});