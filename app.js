function generateNum() {
  let inputValue = Number(document.getElementById("input-value").value);
  let numberElement = document.getElementById("number");
  let i = 0;
  let value = "";

  while (i <= inputValue) {
    if (i % 2 === 0) {
      value += `${i} `;
    }
    i++;
  }

  numberElement.innerText = value.trim();
  numberElement.style.display = "block";
}
