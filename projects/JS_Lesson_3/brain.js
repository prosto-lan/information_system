/* ЗАДАНИЕ 9 */

function check() {
    if (form_9.answer.value == "4")
        alert("Правильно!");
    else alert("Неправильно");
}

/* ЗАДАНИЕ 10 */

function run() {
    var elem = document.getElementById("btn");
    var pos = 0;
    var id = setInterval(frameElement, 0.003);

    function frame() {
        if(pos==850) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.top = pos+"px";
            elem.style.left = pos+"px";
        }
    }
}

function dvig() {
    alert("Поймал!");
}