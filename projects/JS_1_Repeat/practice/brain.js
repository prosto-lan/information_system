function checkTriangle() {

    let a = Number(document.getElementById("A").value);
    let b = Number(document.getElementById("B").value);
    let c = Number(document.getElementById("C").value);

    if (!(a > 0) || !(b > 0) || !(c > 0)) {
        alert("Введите положительные числа во все поля");
        return;
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
        alert("Треугольник с такими сторонами не существует");
        return;
    }

    let biggest = a;
    let katet1 = b;
    let katet2 = c;

    if (b > biggest) {
        biggest = b;
        katet1 = a;
        katet2 = c;
    }
    if (c > biggest) {
        biggest = c;
        katet1 = a;
        katet2 = b;
    }

    let gipotenuza = Math.sqrt(katet1 * katet1 + katet2 * katet2);

    if (gipotenuza == biggest) {
        alert("Треугольник прямоугольный");
    } else if (gipotenuza > biggest) {
        alert("Треугольник остроугольный");
    } else {
        alert("Треугольник тупоугольный");
    }
}

function replaceNums() {

    let N = Number(document.getElementById("N").value);
    let Z = Number(document.getElementById("Z").value);

    let sign;
    if (N < 0) {
        sign = -1;
    } else {
        sign = 1;
    }
    N = Math.abs(N);

    let result = 0;
    let multiplier = 1;
    let count = 0;

    if (N === 0) {
        alert("result:" +  0 + ", count: " + 0)
    }

    for (let i = 0; N > 0; N = Math.floor(N / 10), i++) {
        let digit = N % 10;

        if (digit > Z) {
            digit = Z;
            count++;
        }

        result += digit * multiplier;
        multiplier *= 10;
    }

    alert(" result: " + result * sign + ", count: " + count );
}