let selectors = document.querySelectorAll("select");
console.log(selectors);

for (let select of selectors) {
  for (code in countryList) {
    let op = document.createElement("option");
    op.innerText = code;
    op.value = code;
    select.append(op);
  }
}
