var button = document.getElementById('solve');

function equation(a, b, c) {
	var result1 = -b - Math.sqrt(Math.pow(b, 2) - (4 * a * c)) / (2 * a);
	var result2 = -b + Math.sqrt(Math.pow(b, 2) - (4 * a * c)) / (2 * a);
}

function displaysolve() {
var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
var c = document.getElementById('c').value;
var input = document.getElementById('inputNum').value;
    var result = equation(input);
    var message = document.getElementById('result1');
    if (isNaN(input)) {
        message.textContent = "The value " + input + " is not a number.";
        changeElementClass("inputNum", "invalid");
    } else if (result == false) {
        message.textContent = "This is not a prime number.";
        changeElementClass("inputNum", "fail");
    } else {
        message.textContent = "This is a prime number.";
        changeElementClass("inputNum", "success");
    }
}

button.addEventListener("click", () => {
    document.getElementById('result').textContent = solve();
});
