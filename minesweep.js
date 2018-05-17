const boardwidth = 15;
const bombcount = 35;
const board = document.getElementById('board');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function checkIndex(j,i) {
if (j>=boardwidth || i>=boardwidth || j<0 || i<0) return false;
return true;
}

function setUp() {
	for(var i=0; i<bombcount;) {
		targetCell = board.rows[getRndInteger(0,boardwidth)].cells[getRndInteger(0,boardwidth)];
		if (targetCell.id != "bomb") {
			targetCell.id = "bomb";
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
	var i=element.parentNode.rowIndex;
	var j=element.cellIndex;
	if(click && element.className!="flagged") {
		element.className = "clicked";
		if(element.innerHTML == '<div id="numb">0</div>') {
			if(checkIndex(i-1,j-1)) {
				if(board.rows[i-1].cells[j-1].innerHTML == '<div id="numb">0</div>' && board.rows[i-1].cells[j-1].className != "clicked") checkClick(board.rows[i-1].cells[j-1],true);
				board.rows[i-1].cells[j-1].className = "clicked"; 
			}
			if(checkIndex(i-1,j)) {
				if(board.rows[i-1].cells[j].innerHTML == '<div id="numb">0</div>' && board.rows[i-1].cells[j].className != "clicked") checkClick(board.rows[i-1].cells[j],true);
				board.rows[i-1].cells[j].className = "clicked";	
			}
			if(checkIndex(i-1,j+1)) {
				if(board.rows[i-1].cells[j+1].innerHTML == '<div id="numb">0</div>' && board.rows[i-1].cells[j+1].className != "clicked") checkClick(board.rows[i-1].cells[j+1],true)
				board.rows[i-1].cells[j+1].className = "clicked";;
			}
			if(checkIndex(i,j-1)) {
				if(board.rows[i].cells[j-1].innerHTML == '<div id="numb">0</div>' && board.rows[i].cells[j-1].className != "clicked") checkClick(board.rows[i].cells[j-1],true);
				board.rows[i].cells[j-1].className = "clicked";	
			}
			if(checkIndex(i,j+1)) {
				if(board.rows[i].cells[j+1].innerHTML == '<div id="numb">0</div>' && board.rows[i].cells[j+1].className != "clicked") checkClick(board.rows[i].cells[j+1],true);
				board.rows[i].cells[j+1].className = "clicked";	
			}
			if(checkIndex(i+1,j-1)) {
				if(board.rows[i+1].cells[j-1].innerHTML == '<div id="numb">0</div>' && board.rows[i+1].cells[j-1].className != "clicked") checkClick(board.rows[i+1].cells[j-1],true);
				board.rows[i+1].cells[j-1].className = "clicked";	
			}
			if(checkIndex(i+1,j)) {
				if(board.rows[i+1].cells[j].innerHTML == '<div id="numb">0</div>' && board.rows[i+1].cells[j].className != "clicked") checkClick(board.rows[i+1].cells[j],true);
				board.rows[i+1].cells[j].className = "clicked";	
			}
			if(checkIndex(i+1,j+1)) {
				if(board.rows[i+1].cells[j+1].innerHTML == '<div id="numb">0</div>' && board.rows[i+1].cells[j+1].className != "clicked") checkClick(board.rows[i+1].cells[j+1],true);
				board.rows[i+1].cells[j+1].className = "clicked";
			}
		}
	}
	else if(element.className != "clicked" && element.className == "flagged") {
		element.className = "";	
	}
	else if (element.className !="clicked") element.className = "flagged";
}

function checkCount(cell, i, j) {
	var count=0;
	if(i-1>=0) {
		if(j-1>=0) {
			if(board.rows[i-1].cells[j-1].id == "bomb") count++;
		}
	}
	if(i-1>=0) {
		if (board.rows[i-1].cells[j].id == "bomb") count++;
	}
	if(i-1>=0) {
		if(j+1<boardwidth) {
			if (board.rows[i-1].cells[j+1].id == "bomb") count++;
		}
	}
	if(j-1>=0) {
		if(board.rows[i].cells[j-1].id == "bomb") count++;
	}
	if(j+1<boardwidth) {
		if(board.rows[i].cells[j+1].id == "bomb") count++;
	}
	if(i+1<boardwidth) {
		if(j-1>=0) {
			if(board.rows[i+1].cells[j-1].id == "bomb") count++;
		}
	}
	if(i+1<boardwidth) {
		if(board.rows[i+1].cells[j].id == "bomb") count++;
	}
	if(i+1<boardwidth) {
		if(j+1<boardwidth) if(board.rows[i+1].cells[j+1].id == "bomb") count++;
	}
	cell.innerHTML = '<div id="numb">' + count + '</div>';
}
