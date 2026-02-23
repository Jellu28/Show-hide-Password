let hideIcon = document.getElementById("hide-icon");
let password = document.getElementById("password");

hideIcon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    hideIcon.name = "eye-outline";
    hideIcon.style.color = "#4ec807ff";
  } else {
    password.type = "password";
    hideIcon.name = "eye-off-outline";
    hideIcon.style.color = "#000";
  }
});
