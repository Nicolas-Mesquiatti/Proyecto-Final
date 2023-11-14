document.getElementById('liveAlertBtn').addEventListener('click', function () {

  var nombres = document.getElementById('Nombres').value;
  var apellidos = document.getElementById('Apellidos').value;
  var correo = document.getElementById('Correo').value;
  var confCorreo = document.getElementById('ConfCorreo').value;
  var telefono = document.getElementById('Telefono').value;

  
  if (nombres.length < 3 || correo !== confCorreo || !telefono) {
      mostrarError('Por favor, completa todos los campos correctamente.');
      
      document.getElementById('liveAlertBtn').disabled = true;
      return;
  } else {
      
      document.getElementById('liveAlertBtn').disabled = false;
  }

  
  mostrarExito('Formulario enviado correctamente.');
});

function mostrarError(mensaje) {
  document.getElementById('error').innerHTML = mensaje;
  document.getElementById('error').style.color = 'red';
}

function mostrarExito(mensaje) {
  document.getElementById('liveAlertPlaceholder').innerHTML = mensaje;
  document.getElementById('liveAlertPlaceholder').style.color = 'green';
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
