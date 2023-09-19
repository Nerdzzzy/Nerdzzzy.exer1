function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let prodtotal = firstNum * secondNum;
  document.getElementById("prodanswer").innerHTML = `${firstNum} * ${secondNum}, equals to ${prodtotal}`;
}

document.getElementById('multiplyButton').addEventListener("click", displayProduct);

function displayDiff() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML);
  let secondNum = Number(document.getElementById('secondNum').innerHTML);

  let difftotal = firstNum - secondNum;
  document.getElementById("diffanswer").innerHTML = `${firstNum} - ${secondNum}, equals to ${difftotal}`;
}

document.getElementById('diffButton').addEventListener("click", displayDiff);
