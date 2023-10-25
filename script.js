// make sure these match the HTML element names for the ID then class.
let input = document.querySelector("#name");
let display = document.querySelector(".display");

// This code should be working
input.addEventListener("input", function () {
   const name = input.value;
   display.textContent = name;
 });

function simpleMath(num1, num2) {
     return num1 + num2;
     

}

// you should see 5 in the output of your console

console.log(simpleMath(2, 3));