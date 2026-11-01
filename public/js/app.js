const form = document.getElementById("domain-form");
const input = document.getElementById("subdomain");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = input.value.trim().toLowerCase();

  if (!/^[a-z0-9](?:[a-z0-9-]{0,28}[a-z0-9])?$/.test(name)) {
    result.textContent = "Use 1–30 letters, numbers or internal hyphens.";
    return;
  }

  result.textContent =
    `${name}.orangewave.example — Valid format! This is only a demo; nothing is registered or reserved.`;
});
