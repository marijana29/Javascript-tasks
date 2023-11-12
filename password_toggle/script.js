
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.querySelector("#passwordInput");
  const toggleButton = document.querySelector("#toggleButton");

   passwordInput.addEventListener("input", function () {
    toggleButton.disabled = passwordInput.value === "";
  });

  toggleButton.addEventListener("click", function () {
    
     event.preventDefault();
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "Hide Password";
    } else {
      passwordInput.type = "password";
      toggleButton.textContent = "Show Password";
    }
  });
});

  