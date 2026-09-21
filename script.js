let output = document.querySelector("#out");
let input1 = parseInt(document.querySelector("#num1").value);
let input2 = parseInt(document.querySelector("#num2").value);
let sign = document.querySelector("#sign");
let butt = document.querySelector("#calcBtn");
let sum;

butt.addEventListener("click", () => {
    let opt = sign.value
    if (opt === "+") {
        sum = input1 + input2;
    } else if (opt === "-") {
        sum = input1 - input2;
    } else if (opt === "*") {
        sum = input1 * input2;
    } else if (opt === "/") {
        sum = input1 / input2;
    }
    output.textContent = sum;
})
