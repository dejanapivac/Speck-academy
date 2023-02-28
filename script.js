const form = document.getElementById("new-technology");
const inputText = document.getElementById("input-field");
const removeAll = document.querySelector("#btn-remove");
const technologyList = document.querySelector(".technology-list");

window.addEventListener("load", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const technology = inputText.value;

    if (!technology) {
      alert("Please enter new technology.");
      return;
    }

    const tech_el = document.createElement("div");
    tech_el.classList.add("item");
    tech_el.innerText = technology;

    technologyList.appendChild(tech_el);

    inputText.value = "";
  });
});

removeAll.addEventListener("click", function () {
  while (technologyList.firstChild) {
    technologyList.removeChild(technologyList.firstChild);
  }
});
