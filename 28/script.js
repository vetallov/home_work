/*
 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

- поле, хранящее радиус окружности;
- get-свойство, возвращающее радиус окружности;
- set-свойство, устанавливающее радиус окружности;
- get-свойство, возвращающее диаметр окружности;
- метод, вычисляющий площадь круга, ограниченного такой окружностью;
- метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов. 
*/

class Circle {
    constructor (r) {
        if (r <= 0) {
            console.log("Radius must be > 0");
            return;
        }
        this.r = r;
    }
    get radius() {
        return this.r;
    }
    set radius(r) {
       this.r = r;
    }
    get diameter() {
        return this.r * 2;
    }
    area() {
        return (Math.PI * (this.r ** 2)).toFixed(2);
    }
    circleLength() {
        return (2 * Math.PI * this.r).toFixed(2);
    }
}

const o = new Circle (6);
console.log(o);                 // Circle {r: 6}
console.log(o.diameter);        // 12
console.log(o.area());          // 113.10
console.log(o.circleLength());  // 37.10

/*
2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

- поле, которое хранит цвет маркера;
- поле, которое хранит количество чернил в маркере (в процентах);
- метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, 
    пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
- Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера 
    и добавив метод для заправки маркера.
Продемонстрировать работу написанных методов. 
*/

class Marker {
    constructor (color, inkPercent) {
        this.color = color;
        this.inkPercent = inkPercent;
    }
    get markerProps() {
        return [this.color, this.inkPercent];
    }
    set markerProps(newProps) {
        [this.color, this.inkPercent] = [...newProps];
    }
    print(line) {
        let content = document.getElementById('content');
        console.log(content);
        
        for(let i = 0; i < line.length; i++) {

            if (this.inkPercent !== 0) {
                if (line[i] === ' ') {
                    this.inkPercent += 0.5;
                }
                content.innerHTML += line[i];
                content.style.color = this.color;
                this.inkPercent -= 0.5;
            } else {
                document.write('Marker is over');
                break;
            }
        }
    }
}

const marker = new Marker('green', 5);
console.log(marker);
//marker.print('hfhfng khkhh.');  // hfhfng khkh Marker is over

class FilledMarker extends Marker {
    fill(inkPercent) {
        if (inkPercent > 100) {
            inkPercent = 100;
        } else {
            this.inkPercent += inkPercent;
        }
    }
}

let marker2 = new FilledMarker ('red', 60);
let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam dolorum molestias nulla vitae, aliquam mollitia deleniti laudantium cupiditate ipsam.';

marker2.print(text);

document.body.setAttribute("style", "font-size: 18px; text-align: center;");
