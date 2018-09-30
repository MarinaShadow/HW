// var memory, color;
// var price = false;
// var img = 'default.png';

// while(true){
//     memory = prompt('Memory');
//     if(+memory === 16){
//         price = 300;
//         break;
//     } else if(+memory === 32) {
//         price = 500;
//         break;
//     } else if(+memory === 64) {
//         price = 700;
//         break;
//     } else if(memory === null) {
//         break;
//     } else {
//         alert('Повторите');
//     }
// }

// while(price !== false){
//     color = prompt('Color');
//     // if(color === 'black' || color === 'silver' || color === 'red' || color === null){
//     //     break;
//     // } else {
//     //     alert('Повторите');
//     // }

//     if(color === 'red'){
//         img = 'red1.png';
//         break;
//     } else if(color === 'black') {
//         img = 'black.png';
//         break;
//     } else if(color === 'silver') {
//         img = 'silver.png';
//         break;
// 	} else if(color === null) {
//         break;
// 	} else {
//         alert('Повторите');
//     }
// }


// if(price && color) {
//     document.write('<img src="img/'+img+'">');
//     document.write('<h1>Цена: '+price+'$</h1>');
// } else if (price){
// 	document.write('<h1>Цена: '+price+'$</h1>');
// }else {
//     document.write('<h1 style="color: red">ПОКА!</h1>');
// }

// 1) Дописать пример с занятия так, чтобы я могу ввести
// только память и получить только цену и вежливое прощание

// 2) Модернезировать (либо переписать) скрипт таким образом,
// чтобы цена зависела не только от памяти, но и от цвета
// ДЛЯ ОПТИМАЛЬНОГО РЕШЕНИЯ ЗАДАЧИ (ЭТО НЕ ЗНАЧИТ ЧТО ОБЯЗАТЕЛЬНО)
// ВАМ ПРИГОДЯТСЯ МАССИВЫ ! И ! ОБЪЕКТЫ

// 3) switch case

// 4) Тернарное выражение (тернарный вариант записи if else)