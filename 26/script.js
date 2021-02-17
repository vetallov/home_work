'use strict';

// 1
const car = {
    manufacturer: 'Renault',
    model: 'Megan',
    year: 2008,
    averageSpeed: 80,
    showInfo() {
        console.log(`Производитель: ${this.manufacturer},\n модель: ${this.model},\n Cредняя скорость: ${this.averageSpeed} `);
    },
    getTravelTime(s = 0, restInterval = 1) {
        if (isNaN(s) || isNaN(restInterval)) {
            return 'Error';
        }
        let travelTime = s / this.averageSpeed;
        let numberOfStops = Math.floor(travelTime / 4);
        travelTime += numberOfStops * restInterval; 
        return travelTime;
    },
}

car.showInfo();
console.log(car.getTravelTime(500));    // 7.25
console.log(car.getTravelTime(800));    // 12

// 2
const fraction1 = {
    numerator : 1,
    denominator : 5,
}

const showFraction = () => console.log(`${fraction1.numerator}/${fraction1.denominator}`); 
console.log(showFraction(fraction1));    // 1/5

function makeFraction(numerator, denominator) {
    return {
        numerator, 
        denominator, 
    };
}

const fraction2 = makeFraction(2, 9);
console.log(fraction2);  // {numerator: 2, denominator: 9}

// общий знаменатель:
const commonDenominator = (fraction1 = {}, fraction2 = {}) => {
    return fraction1.denominator * fraction2.denominator;
}

// сложение дробей
const sumOfFractions = (fraction1 = {}, fraction2 = {}) => {

    return `${fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator} / ${commonDenominator(fraction1, fraction2)}`;
}

console.log(sumOfFractions(fraction1, fraction2));      // 19/45
console.log(sumOfFractions({numerator: 3, denominator: 5}, {numerator: 4, denominator: 5}));    // 35/25

// вычитание дробей
const subtractionOfFractions = (fraction1 = {}, fraction2 = {}) => {

    return `${fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator} / ${commonDenominator(fraction1, fraction2)}`;
}

console.log(subtractionOfFractions(fraction1, fraction2));      // -1/45
console.log(subtractionOfFractions({numerator: 7, denominator: 9}, {numerator: 2, denominator: 8}));    // 38/72

// умножение дробей
const multiplicationOfFrations = (fraction1 = {}, fraction2 = {}) => {
    return `${fraction1.numerator * fraction2.numerator}/${fraction1.denominator * fraction2.denominator}`;
}

console.log(multiplicationOfFrations(fraction1, fraction2));    // 2/45

// деление дробей
const divisionOfFrations = (fraction1 = {}, fraction2 = {}) => {
    return `${fraction1.numerator * fraction2.denominator}/${fraction1.denominator * fraction2.numerator}`;
}

console.log(divisionOfFrations(fraction1, fraction2));  // 9/10

// сокращение дробей
const fractionReduction = (fraction = {}, coefficient) => {
    return `${fraction.numerator / coefficient}/${fraction.denominator / coefficient}`
}

const fraction = makeFraction(3, 9);
console.log(fractionReduction(fraction, 3));

// 3
const time = {
    h: 2,
    m: 23,
    s: 40,
    showTime() {
        console.log(`${this.h}:${this.m}:${this.s}`); 
    },
    changeSeconds(sec) {
        let hours = sec / 3600;
        this.h += Math.floor(hours);
        let minutes = (sec - Math.floor(hours) * 3600) / 60;
        this.m += Math.floor(minutes);
        this.s = sec - (Math.floor(hours) * 3600) - (Math.floor(minutes) * 60);

        if (this.s >= 60) {
            this.s %= 60;
            this.m += Math.floor(this.s / 60);
        }
        if (this.m >= 60) {
            this.m %= 60;
            this.h += Math.floor(this.m / 60);
        }

        return time;
    },
    changeMinutes(min) {
        let hours = min / 60;
        this.h += Math.floor(hours);
        this.m += min - (Math.floor(hours) * 60);
        
        if (this.m >= 60) {
            this.m %= 60;
            this.h += Math.floor(hours / 60);
        }

        return time;
    },
    changeHours(hour) {
        this.h = this.h + hour;

        return time;
    },
}

console.log(time);  // {h: 2, m: 23, s: 40, showTime: ƒ, changeSeconds: ƒ, …}

time.showTime();    // 2:23:40
console.log(time.changeSeconds(4500));       // {h: 3, m: 38, s: 0, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeSeconds(8050));       // {h: 5, m: 52, s: 10, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeSeconds(108050));     // {h: 35, m: 52, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time);       // {h: 35, m: 52, s: 50, showTime: ƒ, changeSeconds: ƒ, …}


console.log(time.changeMinutes(85));         // {h: 36, m: 17, s: 50, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeMinutes(12));         // {h: 36, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time);       // {h: 36, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}

console.log(time.changeHours(3));             // {h: 39, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time.changeHours(4));             // {h: 43, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}
console.log(time);       // {h: 43, m: 29, s: 50, showTime: ƒ, changeSeconds: ƒ, …}


const makeTime = (h = 0, m = 0, s = 0) => {
    (h < 9 && h >= 0) ? (h = `0${h}`) : h ;

    (m >= 0 && m < 9) ? (m = `${m}`) : (m >= 0 && m < 60) ? m : console.log('error.Enter 0 < m < 60');
 
    (s >= 0 && s < 9) ? (s = `${s}`) : (s >= 0 && s < 60) ? s : console.log('error.Enter 0 < s < 60');

    return {
        h, 
        m,
        s, 
    };
}

const time1 = makeTime(6, 12, 50);   
const time3 = makeTime(3, 47, 62);  // error
const time4 = makeTime(18, 38, 22);

console.log(time1);    // {h: "06", m: 12, s: 50}
console.log(time4);    // {h: 18, m: 38, s: 22}


const showTime = (time = {}) => {
    return console.log(`${time.h}:${time.m}:${time.s}`);
    
}  
showTime(time1);     // 06:12:50
showTime(time4);     // 18:38:22
