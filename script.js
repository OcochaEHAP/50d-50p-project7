let labels = document.querySelectorAll(".form-input label");

labels.forEach((label, i) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, i) =>
        `<span style="transition-delay: ${i * 50}ms">${letter}</span>`
    )
    .join("");
});
