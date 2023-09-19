function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value  += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}
function result () {
    const display = document.getElementById("display");
    display.value = eval(display.value);
}