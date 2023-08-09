function validar(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let mensaje = document.getElementById("mensaje").value;

    //RegExp

    let regexNombre =  /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    let regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexTel =   /^[0-9]{10}$/;
    let regexMensaje = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/; 
   
    //Variables boolean
    let nombreBoolean= true;
    let emailBoolean = true;
    let telBoolean = true;
    let mensajeBoolean = true;

    //Validar
    if (!regexNombre.test(nombre)){
        Swal.fire({
            icon: 'error',
            title: 'Nombre inválido',
            text: 'Inténtalo de nuevo',
          });
        return false;
    }
    else if (!regexCorreo.test(email)){
        Swal.fire({
            icon: 'error',
            title: 'Email inválido',
            text: 'Inténtalo de nuevo',
          });
        return false;
    }
    else if (!regexTel.test(tel)){
        Swal.fire({
            icon: 'error',
            title: 'Teléfono inválido',
            text: 'Inténtalo de nuevo',
          });
        return false;
    }
    else if (!regexMensaje.test(mensaje)){
        Swal.fire({
            icon: 'error',
            title: 'Mensaje inválido',
            text: 'Inténtalo de nuevo',
          });
        return false;}
    }



















/* function validar(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
let tel = document.getElementById("tel").value;
    let mensaje = document.getElementById("mensaje").value;

    //RegExp

    let regexNombre =  /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    let regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexTel =   /^[0-9]{10}$/;
    let regexMensaje = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/; 
   
    //Variables boolean
    let nombreBoolean= true;
    let emailBoolean = true;
    let telBoolean = true;
    let mensajeBoolean = true;

    //Validar
    if (!regexNombre.test(nombre)){
        alert("nombre esta vacio");
        return false;
    }
    else if (!regexCorreo.test(email)){
        alert("Email esta vacio");
        return false;
    }
    else if (!regexTel.test(tel)){
        alert("Tel no es valido");
        return false;
    }
    else if (!regexMensaje.test(mensaje)){
        alert("Mensaje invalido");
        return false;}
    }
 */