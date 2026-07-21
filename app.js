const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let selectors = document.querySelectorAll("select");
let btn = document.querySelector("#getResult");
let input = document.querySelector("#amount");
let fromCurrency = document.querySelector("#from");
let toCurrency = document.querySelector("#to");
let inputBox = document.querySelector("#input");
let outputBox = document.querySelector("#output");

let updateFlag = (select) => {
  let currencyCode = select.value;
  let countryCode = countryList[currencyCode];
  let img = select.parentElement.querySelector("img");
  img.setAttribute("src", `https://flagsapi.com/${countryCode}/flat/64.png`);
};

for (let select of selectors) {
  for (code in countryList) {
    let op = document.createElement("option");
    op.innerText = code;
    op.value = code;
    if (select.id === "from" && op.value === "INR") {
      op.selected = "selected";
    } else if (select.id === "to" && op.value === "PKR") {
      op.selected = "selected";
    }
    select.append(op);
  }
  select.addEventListener("change", (ev) => {
    updateFlag(ev.target);
  });
}
const displayResult = (inputAmount, exchangeAmount) => {
  inputBox.innerText = `${inputAmount} ${fromCurrency.value} = `;
  outputBox.innerText = `${exchangeAmount.toFixed(4)} ${toCurrency.value}`;
  console.log(outputBox.innerText);
};
const updateExchangeRate = async () => {
  let inputAmount = Number(input.value);
  console.log(inputAmount);
  if (inputAmount == "" || inputAmount < 0) {
    input.value = 1;
    inputAmount = 1;
  }
  let fromCode = fromCurrency.value.toLowerCase();
  let toCode = toCurrency.value.toLowerCase();
  console.log(fromCode, toCode);
  const URL = `${BASE_URL}/${fromCode}.json`;
  console.log(URL);
  let response = await fetch(URL);
  try {
    let data = await response.json();
    let rate = data[fromCode][toCode];
    let exchangeAmount = inputAmount * rate;
    displayResult(inputAmount, exchangeAmount);
  } catch (err) {
    displayResult(inputAmount, "ERROR 404");
  }
};
btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  updateExchangeRate();
});
