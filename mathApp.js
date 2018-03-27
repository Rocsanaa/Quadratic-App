var button = document.getElementById('solve');

function equation(a, b, c) {
    var testP = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var testN = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return [testP, testN];
}

function displayEquation() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result = equation(a, b, c);
    var resultP = result[0];
    var resultN = result[1];
    var message = document.getElementById('solutions');
    if (isNaN(a) || isNaN(b) || isNaN(c) || a == 0) {
        message.textContent = "You entered an incorrect value for either a, b, or c. Please try again.";
        changeElementClass("a", "invalid");
        changeElementClass("b", "invalid");
        changeElementCass("c", "invalid");


    } else if (isNaN(resultP) || isNan(resultN)) {
        message.textContent = "There are no real solutions.";
        changeElementClass("a", "no_real");
        changeElementClass("b", "no_real");
        changeElementClass("c", "no_real");

    } else {
        message.textContent = "The roots to the quadratic are " + resultP + " and " + resultN + ".";
        changeElementClass("a", "real");
        changeElementClass("b", "real");
        changeElementClass("c", "real");

    }
   button.addEventListener('click', displayEquation);
