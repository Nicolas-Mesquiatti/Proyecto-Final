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

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const nombre = document.getElementById('Nombres');
    e.preventDefault()
    form.addEventListener("submit", e=>{
        if(nombre.nodeValuevalue.length <6){
            alert("Nombre corto")
        }
    })