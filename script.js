const HASH = "153a32e08b455588ed6c1bb5f100921f";

async function checkPassword() {
  const input = document.getElementById("password").value;
  const hashed = CryptoJS.MD5(input).toString();

  if (hashed === HASH) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
    loadData();
  } else {
    document.getElementById("error").textContent = "suck it";
  }
}

async function loadData() {
  const response = await fetch("data.json");
  const data = await response.json();
  const container = document.getElementById("data");

  data.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${item.image ? `<img src="${item.image}" alt="img" />` : ""}
      ${item.link ? `<a href="${item.link}" target="_blank">open</a>` : ""}
    `;
    container.appendChild(div);
  });
}