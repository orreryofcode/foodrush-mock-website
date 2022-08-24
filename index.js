const planOptionBtn = document.querySelectorAll(".btn-plan-option");

planOptionBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const currentTarget = e.currentTarget;

    const prev = document.querySelector(".selected");
    prev?.classList.remove("selected");

    currentTarget.classList.add("selected");
  });
});

const peopleBtn = document.querySelectorAll(".btn-x-for-y");

peopleBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const currentTarget = e.currentTarget;

    const prev = document.querySelector(".people-selected");
    prev?.classList.remove("people-selected");

    currentTarget.classList.add("people-selected");
  });
});

const recipeBtn = document.querySelectorAll(".btn-meals");

recipeBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const currentTarget = e.currentTarget;

    const prev = document.querySelector(".recipes-selected");
    prev?.classList.remove("recipes-selected");

    currentTarget.classList.add("recipes-selected");
  });
});
