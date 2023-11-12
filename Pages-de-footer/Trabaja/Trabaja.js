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


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${'Enviaste tu formulario correctamente, Estate atento al correo para la convocatoria, Suerte! '}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Suertee', 'success')
  })
}


