nombre=document.getElementById('nombre').value;
correo=document.getElementById('email').value;
telefono=document.getElementById('phone').value;
comentarios=document.getElementById('comentarios').value;
//variables regulares
expRegText = /^\s+$/;
ExpRegularEmail =  !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email));

expregTel = !(/^\d{3}-\d{3}-\d{4}$/.test(telefono)); expregTel = !(/^\d{3}-\d{3}-\d{4}$/.test(tele));
// validaciones 
if(nombre==null||nombre.length==0|| expRegText.test(nombre)){
    alertify.error("nombre invalido");
    document.getElementById('nombre').style.boxShadow= "0 0 5px red";
   
}
else if(email==null||ExpRegularEmail ){
    alertify.error("el campo correo es invalido");
    document.getElementById('correo').style.boxShadow= "0 0 5px red";
    
}
else if(telefono==null||expregTel ){
    alertify.error("el campo telefono es invalido");
    document.getElementById('phone').style.boxShadow= "0 0 5px red";
    
}
else{
    alertify.success("el registro fue exitoso ");
    document.getElementById('nombre').value='';
    document.getElementById('correo').value='';
    document.getElementById('telefon').value='';
    document.getElementById('comentarios').value='';
}

