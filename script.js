document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("div1").querySelector("table > tbody");

  fetch("country_data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = item.country;
        cell2.textContent = item.state;
        cell3.textContent = item.city_count;
      });
    })
    .catch((error) => {
      console.error("Error fetching data: " + error);
    });
});

const outputBox = document.getElementById("outputBox");

const copyButtons = document.querySelectorAll(".copy-button");
copyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    const divClone = targetElement.cloneNode(true);

    outputBox.innerHTML = "";
    outputBox.appendChild(divClone);
  });
});

const clearButtons = document.querySelectorAll(".clear-button");
clearButtons.forEach((button) => {
  button.addEventListener("click", function () {
    outputBox.innerHTML = "";
  });
});

document.getElementById("addButton1").addEventListener("click", function () {
  const divClone = document.getElementById("div1").cloneNode(true);
  outputBox.appendChild(divClone);
});

document.getElementById("addButton2").addEventListener("click", function () {
  const subContainerClone = document.getElementById("div2").cloneNode(true);
  outputBox.appendChild(subContainerClone);
});

document.getElementById("addButton3").addEventListener("click", function () {
  const divClone = document.getElementById("div3").cloneNode(true);
  outputBox.appendChild(divClone);
});
