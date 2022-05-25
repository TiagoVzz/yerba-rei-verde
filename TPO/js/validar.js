document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('register-form').addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
        alert('No has escrito nada en el nombre!');
        return;
    }

    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
        alert('No has escrito nada en el apellido!');
        return;
    }

    var email = document.getElementById('email').value;
    if(email.length == 0) {
        alert('No has escrito nada en el email!');
        return;
    }

    var number = document.getElementById('number').value;
    if(number.length == 0) {
        alert('No has escrito nada en el celular!');
        return;
    }

    alert('Muchas Gracias por enviar su consulta!');
    this.submit();
}