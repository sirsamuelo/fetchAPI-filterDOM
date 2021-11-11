const API_ADDRESS = "https://randomuser.me/api";
const container__body = document.querySelector(".container__body");
const input = document.querySelector(".input");
const items = [];

setTimeout(getData, 3000);

input.addEventListener("input", (e) => filterResult(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  results.innerHTML = "";

  populateDOM(results);
}

function filterResult(inputData) {
  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(inputData.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

function populateDOM(someArr) {
  someArr.forEach((result) => {
    let user = document.createElement("div");
    user.classList.add("user__container");

    items.push(user);

    user.innerHTML = `
            <div class="user__image">
                <img src="${result.picture.medium}" />
            </div>
            <div class="user__info">
                <h4>${result.name.first} ${result.name.last}</h4>
                <p>${result.location.city}, ${result.location.country}</p>
            </div>
        `;
    container__body.append(user);
  });
}
