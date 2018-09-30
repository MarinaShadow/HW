var color;
var memory;
var img='silver.png';
var valCol=0;

memory={16:300, 32:500, 64:700};
while(true){
	var key1=prompt('Выбор памяти', '');
	if(value1=memory[key1]){
		break;
	}else if(key1 === null) {
		break;
	} else {
		alert('Повторите');
	}
	}

color={
	silver:[0,'silver.png'], 
	red:[50,'red.png'], 
	black:[170,'black.png']
};
while(key1 !== null){
	var key2=prompt('Введите цвет', '');
	if(value2=color[key2]){
		valCol=color[key2][0];
		img=color[key2][1];
		break;
	} else if(key2 === null) {
		break;
	} else {
		alert('Повторите');
	}
	}

var rez=+(value1+valCol);

if(value1 && value2 || value1){
	// var rez=+(value1+valCol);
	document.write('<h1>Цена: '+rez+'$</h1>'+'<br>');
	document.write('<img style="width: 100px" src="img/'+img+'">');
} else{
	document.write('<h1 style="color: red">ПОКА!</h1>');
}
