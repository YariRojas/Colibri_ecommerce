function validar() {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");
    let mensaje = document.getElementById("mensaje");

    let regexNombre = 
    /(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+/;
    let regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexTel = /^(?!0000000000$|0000001111$)[0-9]{10}$/;
    let regexMensaje = /^(?!([0-9])\1+$)(?!([A-Za-z])\2{3,})(?!\s)[\s\S]{10,250}$/;



    let nombreValid = regexNombre.test(nombre.value);
    let emailValid = regexCorreo.test(email.value);
    let telValid = regexTel.test(tel.value);
    let mensajeValid = regexMensaje.test(mensaje.value);

    let errorMessages = [];

    if (nombre.value.trim() === "") {
        errorMessages.push(" ◦ El campo Nombre no puede estar vacío.");
        nombre.style.borderColor = "red";
    } else if (!nombreValid) {
        errorMessages.push(" ◦ El nombre debe contener un <strong> mínimo </strong> de 3 a 40 caracteres , <strong>iniciar</strong> con una mayúscula y solo debe contener letras y espacios.");
        nombre.style.borderColor = "red";
    } else {
        nombre.style.borderColor = "green";
    }

    if (email.value.trim() === "") {
        errorMessages.push(" ◦ El campo Correo Electrónico no puede estar vacío.");
        email.style.borderColor = "red";
    } else if (!emailValid) {
        errorMessages.push(" ◦ El correo electrónico solo debe contener letras, números, puntos y guiones.");
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "green";
    }

    if (tel.value.trim() === "") {
        errorMessages.push(" ◦ El campo Teléfono no puede estar vacío.");
        tel.style.borderColor = "red";
    } else if (!telValid) {
        errorMessages.push(" ◦ El teléfono solo debe contener números y su máximo son 10 dígitos.");
        tel.style.borderColor = "red";
    } else {
        tel.style.borderColor = "green";
    }

    if (mensaje.value.trim() === "") {
        errorMessages.push(" ◦ El campo Comentarios no puede estar vacío.");
        mensaje.style.borderColor = "red";
    } else if (!mensajeValid) {
        errorMessages.push(" ◦ El mensaje debe ser de <strong>10 a 250</strong> caracteres y solo debe contener números y letras. ◦ <strong>No puede </strong>comenzar con un espacio, ni tener más de 3 <strong>letras repetidas.</strong> ◦ <strong>Puede contener</strong> caracteres especiales.");
        mensaje.style.borderColor = "red";
    } else {
        mensaje.style.borderColor = "green";
    }

    if (errorMessages.length > 0) {
        Swal.fire({
            icon: 'error',
            title: 'Corrige los siguientes datos:',
            html: errorMessages.join("<br>"),
        });
        return false;
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Tus datos serán enviados correctamente a Colibrí',
        });
        return true;
    }
}