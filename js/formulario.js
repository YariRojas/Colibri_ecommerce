function validar(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let mensaje = document.getElementById("mensaje").value;


    let regexNombre = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    let regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexTel = /^[0-9]{10}$/;
    let regexMensaje = /^[0-9a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s]+$/;

    //Condiciones
    if(nombre === ""){
        alert("Nombre invalido");
        return false;
    }else if(!regexCorreo.test(email)){
        alert("Email invalido");
        return false;
    }else if(!regexTel.test(tel)){
        alert("Tel invalido");
        return false;
    }
    // else if (!regexMensaje.test(mensaje)){
    //     alert("Mensaje esta vacio");
    //     return false;
    // }

}

