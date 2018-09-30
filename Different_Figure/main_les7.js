var classF;
var widthF;
var heightF;
var ob = document.getElementsByName('typeFigure');
window.onchange = function() {
  for(var i=0; i<ob.length; i++)
    if (ob[0].checked) {
		document.getElementById('myCircle').style.display = 'block';
		document.getElementById('mySquare').style.display = 'none';
		document.getElementById('myOval').style.display = 'none';
		document.getElementById('myRectangle').style.display = 'none';

		classF = 'circle';
		widthF = document.querySelector('.cir').value + 'px';
		heightF = document.querySelector('.cir').value + 'px';
	  break;
	} 
	else if (ob[1].checked) {
		document.getElementById('mySquare').style.display = 'block';
		document.getElementById('myRectangle').style.display = 'none';
		document.getElementById('myOval').style.display = 'none';
		document.getElementById('myCircle').style.display = 'none';
		
		classF = 'square';
		widthF = document.querySelector('.sq').value + 'px';
		heightF = document.querySelector('.sq').value + 'px';
	  break;
	}
	else if (ob[2].checked) {
		document.getElementById('myOval').style.display = 'block';
		document.getElementById('mySquare').style.display = 'none';
		document.getElementById('myCircle').style.display = 'none';
		document.getElementById('myRectangle').style.display = 'none';

		classF = 'oval';
		widthF = document.querySelector('.ovW').value + 'px';
		heightF = document.querySelector('.ovH').value + 'px';
		break;
	}
	else if (ob[3].checked) {
		document.getElementById('myRectangle').style.display = 'block';
		document.getElementById('myOval').style.display = 'none';
		document.getElementById('mySquare').style.display = 'none';
		document.getElementById('myCircle').style.display = 'none';

		classF = 'rectangle';
		widthF = document.querySelector('.recW').value + 'px';
		heightF = document.querySelector('.recH').value + 'px';
		break;
	}
	else{}
};


function clickHandler(e) {
    var target = e.target;
    var x = e.offsetX;
    var y = e.offsetY;
    var newFigure = document.createElement('div');
    newFigure.className = classF;
    newFigure.style.left = x + 'px';
	newFigure.style.top = y + 'px';
	newFigure.style.width = widthF;
	newFigure.style.height = heightF;
    target.appendChild(newFigure);
}


var area = document.querySelector('#area');
area.addEventListener('click', clickHandler)