const boardwidth = 15;
const bombcount = 30;
const board = document.getElementById('board');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}




function setUp() {

	for(var i=0; i<bombcount;) {
		targetCell = board.rows[getRndInteger(0,boardwidth)].cells[getRndInteger(0,boardwidth)];
		if (targetCell.className != "bomb") {
			targetCell.className = "bomb";
			i++;
		}
	}

	for(var i=0; i<boardwidth;i++) {
		for(var j=0; j<boardwidth; j++) {
			board.rows[i].cells[j].addEventListener('click', function() {
				checkClick(this, true);
			});
			board.rows[i].cells[j].addEventListener('contextmenu', function() {
				checkClick(this, false);
			});
			checkCount(board.rows[i].cells[j], i, j);
		}
	}

}


function checkClick(element, click) {
	if(click) {
		element.className += " clicked";
		/*if(element.innerHTML = '<div id="numb">0</div>') {
			if(i-1>=0) {
				if(j-1>=0) {
					if(board.rows[i-1].cells[j-1].innerHTML == '<div id="numb">0</div>') {
						checkClick(board.rows[i-1].cells[j-1],true);
				}		
			}
		}
		if(i-1>=0) {
			if (board.rows[i-1].cells[j].innerHTML == '<div id="numb">0</div>') {
				checkClick(board.rows[i-1].cells[j],true);
			}
		}
		if(i-1>=0) {
			if(j+1<boardwidth) {
				if (board.rows[i-1].cells[j+1].innerHTML == '<div id="numb">0</div>') {
 					checkClick(board.rows[i-1].cells[j+1],true);
				}
			}
		}
		if(j-1>=0) {
			if(board.rows[i].cells[j-1].innerHTML == '<div id="numb">0</div>') {
				checkClick(board.rows[i].cells[j-1],true);
			}
		}
		if(j+1<boardwidth) {
			if(board.rows[i].cells[j+1].innerHTML == '<div id="numb">0</div>') {
				checkClick(board.rows[i].cells[j+1],true);
			}
		}
	if(i+1<boardwidth) {
		if(j-1>=0) {
			if(board.rows[i+1].cells[j-1].innerHTML == '<div id="numb">0</div>') {
				checkClick(board.rows[i].cells[j+1],true);
			}
		}
	}
	if(i+1<boardwidth) {
		if(board.rows[i+1].cells[j].className == "bomb") count++;
	}
	if(i+1<boardwidth) {
		if(j+1<boardwidth) if(board.rows[i+1].cells[j+1].className == "bomb") count++;
	}
		}
	}*/
	else element.className = " flagged";
}

function checkZeroValue(element, i, j) {

}


function checkCount(cell, i, j) {
	var count=0;
	if(i-1>=0) {
		if(j-1>=0) {
			if(board.rows[i-1].cells[j-1].className == "bomb") count++;
		}
	}
	if(i-1>=0) {
		if (board.rows[i-1].cells[j].className == "bomb") count++;
	}
	if(i-1>=0) {
		if(j+1<boardwidth) {
			if (board.rows[i-1].cells[j+1].className == "bomb") count++;
		}
	}
	if(j-1>=0) {
		if(board.rows[i].cells[j-1].className == "bomb") count++;
	}
	if(j+1<boardwidth) {
		if(board.rows[i].cells[j+1].className == "bomb") count++;
	}
	if(i+1<boardwidth) {
		if(j-1>=0) {
			if(board.rows[i+1].cells[j-1].className == "bomb") count++;
		}
	}
	if(i+1<boardwidth) {
		if(board.rows[i+1].cells[j].className == "bomb") count++;
	}
	if(i+1<boardwidth) {
		if(j+1<boardwidth) if(board.rows[i+1].cells[j+1].className == "bomb") count++;
	}
	cell.innerHTML = '<div id="numb">' + count + '</div>';
}
