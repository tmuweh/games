
// grab restart atttibute

var restart = document.querySelector("#b");

// Grab all the cells

var cells = document.querySelectorAll('td');

// Clears all the cells

function clearBoard() {
	for (var i = 0; i < cells.length; i++) {
		cells[i].textContent = '';
	}
}

restart.addEventListener('click', clearBoard);

function changeMaker() {
	if (this.textContent === '') {
		this.textContent = 'X';
	}
	else if (this.textContent ==='X') {
		this.textContent = 'O';
	}
	else{
		this.textContent = ''
	}
}

for(var i = 0; i<cells.length; i++){
	cells[i].addEventListener('click', changeMaker)
}
