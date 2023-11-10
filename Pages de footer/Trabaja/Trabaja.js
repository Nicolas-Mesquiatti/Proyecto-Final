var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classlist.add('fijar');
        } else {
            this.nextElementSibling.classlist.remove('fijar');
        }
        
    });
}
prompt("Complete el formulario")