function register() {
  const username = document.getElementById("Nombres").value;
  const apellido = document.getElementById("Apellidos").value;
  const email = document.getElementById("Correo").value;
  const confirmemail = document.getElementById("ConfCorreo").value;
  const telefono = document.getElementById("Telefono").value;

  if (password !== confirmPassword) {
    showError("Las contraseñas no coinciden.");
    return;
  }

  if (!isPasswordValid(password)) {
    showError("La contraseña no cumple con los requisitos.");
    return;
  }

  if (!isEmailValid(email)) {
    showError("El correo electrónico no es válido.");
    return;
  }

  // Realizar el procesamiento adicional, como enviar los datos al servidor, almacenar en una base de datos, etc.

  showSuccess("Registro exitoso.");
}

function showError(message) {
  const errorElement = document.getElementById("error");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function showSuccess(message) {
  const successElement = document.getElementById("success");
  successElement.textContent = message;
  successElement.style.display = "block";
}

function isPasswordValid(password) {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

function isEmailValid(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}






 // Con este js y el formulario lo hice a traves de videos y de mas



 var inputs = document.getElementsByClassName('formulario_input');

 document.addEventListener('DOMContentLoaded', function () {
     var inputs = document.getElementsByClassName('formulario_input');

     Array.from(inputs).forEach(input => {
         input.addEventListener('keyup', function () {
             this.nextElementSibling.classList.toggle('fijar', this.value.trim().length >= 1);
         });
     });
 });
