const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const selectors = document.querySelectorAll("select");
const btn = document.querySelector("#getResult");
const revBtn = document.querySelector("#reverseBtn");
const input = document.querySelector("#amount");
const fromCurrency = document.querySelector("#from");
const toCurrency = document.querySelector("#to");
const resultBox = document.querySelector("#result");

const updateFlag = (select) => {
  let currencyCode = select.value;
  let countryCode = countryList[currencyCode];
  let img = select.parentElement.querySelector("img");
  img.setAttribute("src", `https://flagsapi.com/${countryCode}/flat/64.png`);
};

for (let select of selectors) {
  for (let code in countryList) {
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
  resultBox.innerText = `${inputAmount} ${fromCurrency.value} = ${exchangeAmount.toFixed(4)} ${toCurrency.value}`;
  console.log(resultBox.innerText);
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
    displayResult(
      inputAmount,
      "Unable to fetch exchange rates.Please try again.",
    );
  }
};

const reverseFlags = () => {
  let fromSelector = selectors[0];
  let toSelector = selectors[1];
  let temp = fromSelector.value;
  fromSelector.value = toSelector.value;
  toSelector.value = temp;
  updateFlag(fromSelector);
  updateFlag(toSelector);
};

btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  updateExchangeRate();
});
window.addEventListener("load", () => {
  updateExchangeRate();
});
revBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  reverseFlags();
});
