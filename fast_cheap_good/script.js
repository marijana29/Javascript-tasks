document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".toggle-checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox && checkbox.checked) {
          otherCheckbox.checked = false;
        }
      });
    });
  });
});
