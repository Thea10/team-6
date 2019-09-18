let icon = document.getElementById('password-icon');

function myFunction() {
  var password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
icon.addEventListener('click', event => {
  icon.classList.toggle("fa-eye-slash");
  myFunction();
})
