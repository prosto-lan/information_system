let numb = 0;
let count = 0;
let n1 = 0;
let n2 = 0;
let temp = 0;
let user_numb = 0; 

function randomInt(min, max) {
    if (min > max) {
        temp = max;
        max = min;
        min = temp;
        return (Math.floor(Math.random() * (max - min)) + min);
    }
    else {
        return (Math.floor(Math.random() * (max - min)) + min);
    }
}

function nextPage() {
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    localStorage.setItem("numb", randomInt(n1, n2));
    window.location.href = 'gadanie.html';
}

function check() {
    user_numb = document.getElementById("answer").value;
    numb = parseInt(localStorage.getItem("numb"));
    count++;
    document.getElementById("text").value = count;

    if (user_numb == "") {
        alert("Введите число!")
    }
    else {
        if (user_numb == numb) {
            alert("Попал! Загаданное число: " + numb);
            window.location.href = 'index.html';
        }
        else {
            if (user_numb <= numb) {
                alert("Больше");
            }
            else {
                alert("Меньше");
            }
        }
    }
}