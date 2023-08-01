function validar(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let mensaje = document.getElementById("mensaje").value;


    let regexNombre = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    let regexCorreo = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexTel = /^[0-9]{10}$/;
    //let regexMensaje = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    let regexMensaje = /^[0-9a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s]$/;


    let nombreBoolean= true;
    let emailBoolean = true;
    let telBoolean = true;
    let mensajeBoolean = true;

    //Condiciones
    if(nombre === "" || !regexNombre.test(nombre)){
        alert("Nombre invalido");
        nombreBoolean = false;
        return false;

    }else if(!regexCorreo.test(email)){
        alert("Email invalido");
        emailBoolean = false;
        return false;
    }else if(!regexTel.test(tel)){
        console.log(mensaje);
        alert("Tel invalido");
        telBoolean = false;
        return false;
    }
    else if (!regexMensaje.test(mensaje)){
        alert("Mensaje invalido");
        mensajeBoolean = false;
        return false;
    }
}
//   const btn = document.getElementById('button');

//   document.getElementById('form');

//  // if(nombreBoolean==true && emailBoolean==true && telBoolean==true && mensajeBoolean==true){
//    btn.addEventListener("submit", function(event) {
//      event.preventDefault();
  
//      btn.value = 'ENVIANDO...';
  
//      const serviceID = 'default_service';
//      const templateID = 'template_gpcxgkq';
  
//      emailjs.sendForm(serviceID, templateID, this)
//       .then(() => {
//         btn.value = 'ENVIAR MENSAJE';
//         alert('Formulario enviado');
//       }).catch((err) => {
//         btn.value = 'ENVIAR MENSAJE';
//         alert(JSON.stringify(err));
//       });
//     });
//   //}

// }


