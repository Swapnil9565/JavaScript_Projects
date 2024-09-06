let billAmount = document.getElementById("bill-amount");
let tipPercentage = document.getElementById("tip-percentage");
let result = document.getElementById("result");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  tipAmount = (billAmount.value * tipPercentage.value) / 100;
  total = parseInt(billAmount.value) + tipAmount;
  result.innerText = `Total:₹${total}`;

  if (billAmount.value == "" || tipPercentage.value == "") {
    result.innerText = "Plz Enter input first";
  }
  if (billAmount.value < 0) {
    result.innerText = "Plz Enter valid Bill amount";
  }
  if (tipPercentage.value < 0) {
    result.innerText = "Plz Enter valid Tip percentage";
  }

  if (billAmount.value < 0 && tipPercentage.value < 0) {
    result.innerText = "Plz Enter valid Bill amount and Tip percentage";
  }
});
