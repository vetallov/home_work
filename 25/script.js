'use strict';

// 1

// a)  
function func(a = 0, b = 0) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } 
    return 0;
}
console.log( func(4, 6) );  // -1
console.log( func(10, 2) );  // 1

// b)
function func(a = 0, b = 0) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

console.log( func(2, 5) );  // -1
console.log( func(8, 5) );  // 1
console.log( func(5, 5) );  // 0

// 2
function factorial (n) {
    let res = 1, i = 1;
    if (n > 0 && !isNaN(n)) {
        
        while (i <= n) {
            res *= i;
            i++;
        }
    } else if (n < 0) {
        return "Error. n < 0";
    }
    return res;
}

console.log(factorial(3));  // 6
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(-5)); // Error

// 3
function concat (a, b, c) {
    if (a >= 0 && b >= 0 && c >= 0) {
        return Number( `${a}${b}${c}` );
    }
    return 'Error. Enter positive numbers';
}

console.log(concat(2, 5, 4));  // 254
console.log(concat(2, -5, 4)); // Error. Enter positive numbers
console.log(concat(7, 8, 1));  // 781

// 4
function square (a, b = a) {
    if ( a >= 0 && b >= 0 ) {
        return a * b;
    } 

    return 'Error. Enter positive numbers';
}

console.log(square(7, 8));   // 56
console.log(square(6));      // 36
console.log(square(5, 5));   // 25
console.log(square(7, 0));   // 0
console.log(square(-7, 4));  // Error. Enter positive numbers
console.log(square('a', 2)); // Error. Enter positive numbers

// 5
function isPerfectNumber(num) {        
    let sum = 0;

    for(let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i; 
        }
    } 
    
    if (sum === num) {
        return true;
    }
    
    return false;            
}; 
console.log(isPerfectNumber(120)); // false
console.log(isPerfectNumber(496)); // true
console.log(isPerfectNumber(8128)); // true

// 6
function isPerfectNumberInRange (min, max) {
    let perfectNumbers = '';

    for (min; min <= max; min++) {
        if (isPerfectNumber(min)) {
            perfectNumbers = perfectNumbers + min.toString() + ',';
        }
    }

    if (perfectNumbers !== '') {
        return perfectNumbers;
    }

    return false;
};

console.log(isPerfectNumberInRange (3, 15000)); // 6, 28, 496, 8128

// let minNum = +prompt("Please, enter min number.");
// let maxNum = +prompt("Please, enter max number.");        
//     (isPerfectNumberInRange(minNum, maxNum)) 
//         ? alert(`Совершенные числа: ${isPerfectNumberInRange(minNum, maxNum)}`) 
//         : alert(`Нет совершенных чисел в диапазоне`);

// 7
// a)
function showTime (h, m = 0, s = 0) {
    if(h[0] !== 0 && h < 10) {
        // h = '0' + h;
        h = `0${h}`;
    } else if (h == '') {
        h = '00';
    }
    if(m[0] != 0 && m < 10) {
        m = `0${m}`;
    } else if (m == '') {
        m = '00';
    }
    if(s[0] != 0 && s < 10) {
        s = `0${s}`;
    } else if (s == '') {
        s = '00';
    }

    return (`${h}:${m}:${s}`);
}

console.log(showTime (23, 5, 45));  // 23:05:45
console.log(showTime (8));          // 08:00:00
console.log(showTime (2));          // 02:00:00

// b)
let time_ = {
    h: 5,
    s: 7
};

function addZero(n) {
    if( !isNaN(n) ) {
      return n > 9 ? n : "0" + n;
    }
  }

function timeStr(obj) {
  return [
    ( addZero( obj.h ) || "00" ),
    ( addZero( obj.m ) || "00" ),
    ( addZero( obj.s ) || "00" ),
  ].join(":");
}

time_ = {
    h: 4,
    m: 5
};
console.log( timeStr( time_ ) );  // 04:05:00

// 8
function showTimeInSeconds (h, m = 0, s = 0) {
    h *= 3600;
    m *= 60;
    let result = h + m + s;

    return result;
}

console.log( showTimeInSeconds (2) );           // 7200
console.log( showTimeInSeconds (1, 52, 12) );   // 6732
console.log( showTimeInSeconds (3, 10, 35) );   // 11435

// 9

let time = (n) => {
    let hoursFloat = n / 3600;
      // console.log(hoursFloat);
    let hours = Math.floor(hoursFloat);
      // console.log(hours);
    let minutes = Math.floor((hoursFloat - hours) * 60);
      // console.log(minutes);
    let seconds  = n - ((minutes * 60) + (hours * 3600));

    function addZero (num){
        return num > 9 ? num : `0${num}`;
    }

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
 }
console.log( time(851) ); // 00:14:11
console.log( time(7549) ); // 02:05:49


// 10

let dateDifference = (h, m = 0, s = 0, h1, m1 = 0, s1 = 0) => {
    if (h == 0) {
        h = 24;
    }
    let seconds = h * 3600 + m * 60 + s;
    let seconds1 = h1 * 3600 + m1 * 60 + s1;
    let secDifference = Math.abs(seconds1 - seconds);

    function Time(n) {
        let hoursFloat = n / 3600;
        let hours = Math.floor(hoursFloat);
        let minutes = Math.floor((hoursFloat - hours) * 60);
        let seconds  = n - ((minutes * 60) + (hours * 3600));
        function addZero (num){
            return num > 9 ? num : `0${num}`;
        }
        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
    }
    return Time(secDifference);
};
console.log(dateDifference(0, 10, 0, 10, 9, 0));   // 14:01:00
console.log(dateDifference(2, 6, 0, 5, 4, 10));    // 02:58:10
