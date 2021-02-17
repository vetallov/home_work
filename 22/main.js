(function() {
    // 1
    const userName = prompt('Введите имя', '');
    alert(`Привет, ${userName} !`);
    // 2
    const currentYear = 2020;
    const userBirthYear = prompt('Введите свой год рождения');
    const userCurrentAge = currentYear - userBirthYear;
    alert(`Ваш возраст ${userCurrentAge} лет`);
    // 3
    const sideOfSquare = prompt('Введите длину стороны квадрата в см');
    const squarePerimeter = alert('Периметр квадрата равен ' + sideOfSquare * 4 + ' см');
    // 4
    const circleRadius = prompt('Введите размер радиуса окружности в см');
    const circleArea = alert('Длина окружности равна ' + (2 * ((Math.PI).toFixed(3)) * circleRadius) +
    ' см, а площадь круга с таким радиусом равна ' + (Math.PI).toFixed(3) * (circleRadius ** 2) + ' см^2');
    // 5
    const distance = prompt('Введите расстояние между городами в км');
    const time = prompt(' За сколько часов нужно добраться?');
    const speed = alert('Нужно двигаться со скоростью ' + distance / time + ' км/ч');
    // 6
    const KURS_DOLLAR_EURO = 0.915;
    const dollarsQuantity = prompt(' Введите сумму в долларах'); 
    alert('Эта сумма эквивалентна ' + dollarsQuantity * KURS_DOLLAR_EURO + ' евро');
    // 7
    const flashValue = prompt(' Введите объем флешки в ГБ');
    const mbValue = flashValue * 1024;
    alert(`На флешку размером ${flashValue} ГБ вместится ` + (mbValue / 820).toFixed(2) + ' файлов размером 820 мБ');
    // 8 
    const oneChocolatebarCost = prompt(' Введите стоимость одной шоколадки');
    const amountOfMoney = prompt(' Введите сумму денег для покупки');
    const chocolatebarsQuantity = Math.floor(amountOfMoney / oneChocolatebarCost);
    const balanceAfterPurchase = amountOfMoney - chocolatebarsQuantity * oneChocolatebarCost;
    alert(`На сумму ${amountOfMoney} можно купить ${chocolatebarsQuantity} шт. шоколадок, сдача составит ${balanceAfterPurchase}.`);
    // 9
    const number = prompt('Введите 3-значное число '); //123
    const lastCharacter = number % 10; // 3
    const number2 = Math.floor(number / 10); // 12
    secondCharacter = number2 % 10; // 2
    firstCharacter = Math.floor(number2 / 10); // 1
    console.log(lastCharacter, secondCharacter, firstCharacter);
    alert(`${lastCharacter}${secondCharacter}${firstCharacter}`);
    // 10
    const depositAmount = prompt(' Введите сумму депозитного вклада');
    const depositIncome = depositAmount * 0.05 / 360 * 61;
    alert(`При размещении депозитного вклада на сумму ${depositAmount} у.е. на 2 месяца под 5% годовых, по истечении срока вклада вы получите ${depositIncome.toFixed(2)} у.е. дохода`);

})();
