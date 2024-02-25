let submit = document.getElementById("submit");
let reset = document.getElementById("reset");

submit.addEventListener("click", () => {
  let weightInput = parseInt(document.getElementById("Winput").value);
  let heightInput = parseInt(document.getElementById("Hinput").value);
  let height_status = false;
  let weight_status = false;

  if (weightInput === "" || isNaN(weightInput) || weightInput < 0) {
    alert("Enter a valid weight");
  } else {
    weight_status = true;
  }

  if (heightInput === "" || isNaN(heightInput) || heightInput < 0) {
    alert("Enter a valid Height");
  } else {
    height_status = true;
  }

  if (height_status && weight_status) {
    let BMI = (weightInput / ((heightInput * heightInput) / 10000)).toFixed(1);
    let message = document.getElementById("message");
    message.innerText = BMI;
    message.style.color = "green";
    weightInput.innerText = "";
  }
});

reset.addEventListener("click", () => {
  let weightInput = document.getElementById("Winput");
  let heightInput = document.getElementById("Hinput");
  let message = document.getElementById("message");

  weightInput.value = "";
  heightInput.value = "";
  message.innerText = "---";
  height_status = false;
  weight_status = false;
});
