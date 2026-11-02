document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("lead-form");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const submitBtn = form.querySelector("button");
      submitBtn.textContent = "Отправка...";
      submitBtn.disabled = true;

      setTimeout(() => {
        form.style.display = "none";
        successMessage.style.display = "block";
        form.reset();
      }, 500);
    });
  }
});