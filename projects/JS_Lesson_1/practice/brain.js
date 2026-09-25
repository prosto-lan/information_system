function replaceNums() {

    N = document.getElementById("N")
    Z = document.getElementById("Z")

    let sign;
    if (n < 0) {
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