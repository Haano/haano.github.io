let car0 = {
    speed: 100,
    color: 'green'
}
let car1 = {
    speed: 200,
    color: 'green'
}


color();

function color(color = "red") {
    if (color == "red") {
        console.log('условие');
        return;
    }
    console.log(color);
}

changeSpeed(car0);
changeSpeed(car1);

function changeSpeed(car) {
    const str = `Было ${car.speed}`;
    console.log(str);
    car.speed = 150;
    const str1 = `Стало ${car.speed}`;
    console.log(str1);
}