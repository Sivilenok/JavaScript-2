"use strict";

// Task 1 

let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e =  null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);

//  Task 2 

let height = 15;
let width = 20;

if (height<width) {
    console.log(width);
} else {
    console.log(height);
}

// Task 3
 
for (let i = 1; i <= 20; i++); {
    if ((i % 3) === 0) console.log(i);
}

// Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = ((key && documents && pen) && (apple || orange));
console.log(shouldGoToWork);

// Task 5 

let num = promt('Число'); {
    if (num % 5 === 0 && num % 3 === 0);
    console.log('FizBuz');
} else if (num % 5 === 0) {
    console.log('Fiz');
} else (num % 3 === 0) {
    console.log('Buz');
}

// Task 6

let age = prompt('Введите свой возраст'); {
    if (age >= 16 && 17 && 18);
    console.log(`Можешь выкурить сигаретку, только маме не говори`);
} else if (age > 18); {
    console.log(`Попей пивка`);
} else (age < 18); {
    console.log(`Пей колу`);
}
  
// Task 7 

let user = prompt('В какую сторону света Вы бы хотели отправиться?');
switch (user) {
    case `юг`:
        alert('На юг пойдешь счастье найдешь');
        break;
    case `север`:
        alert('На север пойдешь много денег найдешь');
        break;
    case `запад`:
        alert('На запад пойдешь верного друга найдешь');
        break;
    case `восток`:
        alert('На восток пойдешь разработчиком станешь');
        break;
    default:
        alert('Попробуйте еще раз');
}

// Advanced Task 1
