;
(function () {
    'use strict';

    window.onload = () => {

        task1.onclick = () => {
            let num1 = Number(prompt('Для подсчета суммы чисел в заданном диапазоне введите начальную цифру диапазона'));
            let num2 = Number(prompt('Введите конечную цифру'));
            let sum = 0;
            if (num1 < num2) {
                while (num1 <= num2) {
                    sum += num1;
                    num1++;
                };
            } else if (num1 > num2) {
                while (num1 >= num2) {
                    sum += num2;
                    num2++;
                };
            };
            alert(`Сумма всех чисел в указанном диапазоне ${sum}`);
        };

        task2.onclick = () => {
            let number1 = Number(prompt('Для нахождения НОД двух чисел введите первую цифру'));
            let number2 = Number(prompt('Введите вторую цифру'));

            while (number1 != 0 && number2 != 0) {
                if (number1 > number2) {
                    number1 = number1 % number2;
                } else {
                    number2 = number2 % number1;
                };
            };
            alert(` Наибольший общий делитель двух указанных чисел равен ${number1 + number2}`);

        };

        task3.onclick = () => {
            let number = Number(prompt(' Введите число'));
            let divisor = [];
            for (let i = 2; i < number; i++) {
                if (number % i == 0 && number !== 1) {
                    console.log(i);
                    divisor.push(i);
                };
            };
            alert(`Все делители числа ${number}:  ${divisor}`);
        };

        task4.onclick = () => {
            let userNumber = prompt(' Введите число'); // 123
            let count = 0;
            for (let i = 0; i < userNumber.length; i++) {
                count += 1;
            };
            alert(` Число состоит из ${count} цифр`);
        };

        task5.onclick = () => {
            let positive = 0;
            let negative = 0;
            let zero = 0;
            let even = 0;
            let odd = 0;

            for (let i = 1; i <= 10; i++) {
                const num = prompt("Введите число");
                console.log(num);
                if (num > 0) {
                    positive++;
                }
                if (num < 0) {
                    negative++;
                }
                if (num == 0) {
                    zero++;
                }
                if (num % 2 == 0) {
                    even++;
                }
                if (num % 2 !== 0) {
                    odd++;
                };
            };
            console.log(positive);
            console.log(negative);
            console.log(zero);
            console.log(even);
            console.log(odd);
            alert(` Из введенных цифр - положительных: ${positive}, отрицательных: ${negative}, нулей: ${zero}, четных: ${even}, нечетных: ${odd}.`)

        };

        task6.onclick = () => {
            do {
                let firstNumber = prompt(' Введите первое число');
                let secondNumber = prompt(' Введите второе число');
                let operator = prompt(' Введите математический оператор', '+, -, *, /')
                let answer = eval(`${firstNumber} ${operator} ${secondNumber}`);
                alert(`Ответ ${answer}`);

            } while (confirm(' Решить еще один пример?'));
        };

        task7.onclick = () => {
            do {
                let q = prompt(' Введите число', '1234567890');
                let move = Number(prompt(' На сколько цифр сдвинуть?'));
                alert(q.slice(move) + q.slice(0, move));

            } while (confirm(' Еще одно число ?'));
        };

        task8.onclick = () => {
            const days = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
            let currentDay = 0;
            let nextDay;

            do {
                alert(`День недели - ${days[currentDay]}.`);
                nextDay = confirm(' Хотите увидеть следующий день?');
                currentDay++;
                if (currentDay === days.length) {
                    currentDay = 0;
                };

            } while (nextDay);
        };

        task9.onclick = () => {
            let tables = [];

            for (let i = 2; i <= 9; i++) {
                tables.push(`\n Таблица умножения ${i}:\n`);
                for (let j = 1; j <= 10; j++) {
                    tables.push(`${i} * ${j} = ${i*j}; `)
                };
            };
            alert(tables.join(''));
            console.log(tables.join(''));
        };

        task10.onclick = () => {
            let guessedNum = Number(alert("Загадайте число от 1 до 100"));
            let lowerLimit = 0;
            let upperLimit = 100;
            let N = 50;

            while (guessedNum !== N) {
                let answer = prompt(`Ваше число >, <, или равно ${N}`, '>, <, =');
                if (answer == '>') {
                    lowerLimit = N;
                    N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
                } else if (answer == '<') {
                    upperLimit = N;
                    N = Math.ceil((upperLimit - lowerLimit) / 2 + lowerLimit);
                } else {
                    break;
                };
            };
            alert(`Задуманное число ${N}`);
        };
    };

})();
