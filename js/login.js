function validarNombre(nombre) {
    return /^[a-zA-Z ]+$/.test(nombre);
}

function validarCorreo(correo) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo);
}

function validarContrasena(contrasena, confiContrasena) {
    return (
        /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[a-z]).{8,}$/.test(contrasena) &&
        contrasena === confiContrasena
    );
}

function validarNumero(numero) {
    return /^(?!.*(.)\1{4})\d{10}$/.test(numero);
}

// JavaScript para el formulario de registro
const signupForm = document.querySelector('#signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.querySelector('#signupName').value;
            const email = document.querySelector('#signupEmail').value;
            const password = document.querySelector('#signupPassword').value;
            const confirmPassword = document.querySelector('#signupConfirmPassword').value;
            const phoneNumber = document.querySelector('#signupPhoneNumber').value;


        // Validar el nombre antes de continuar
        if (!validarNombre(name)) {
            await Swal.fire({
                icon: 'error',
                title: 'Nombre no válido',
                text: 'Por favor, ingresa un nombre válido.',
            });
            return;
        }

        // Validar el correo electrónico antes de continuar
        if (!validarCorreo(email)) {
            await Swal.fire({
                icon: 'error',
                title: 'Correo electrónico no válido',
                text: 'Por favor, ingresa un correo electrónico válido.',
            });
            return;
        }

        // Validar el número antes de continuar
        if (!validarNumero(phoneNumber)) {
            await Swal.fire({
                icon: 'error',
                title: 'Número no válido',
                text: 'Por favor, ingresa un número de 10 dígitos sin más de 4 dígitos repetidos consecutivamente.',
            });
            return;
        }

        // Validar las contraseñas antes de continuar
        if (!validarContrasena(password, confirmPassword)) {
            await Swal.fire({
                icon: 'error',
                title: 'Contraseña no válida',
                text: 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una minúscula y un número. Además, las contraseñas deben coincidir.',
            });
            return;
        }

        

        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const isUserRegistered = Users.find(user => user.email === email);

        if (isUserRegistered) {
            await Swal.fire({
                icon: 'error',
                title: 'Usuario ya registrado',
                text: 'El usuario ya está registrado. Por favor, inicia sesión.'
            });
        } else {
            Users.push({ name: name, email: email, password: password, phoneNumber: phoneNumber });
            localStorage.setItem('users', JSON.stringify(Users));

            await Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: '¡El registro se ha completado con éxito!'
            });

document.querySelector('#signupName').value = '';
document.querySelector('#signupEmail').value = '';
document.querySelector('#signupPassword').value = '';
document.querySelector('#signupConfirmPassword').value = '';
document.querySelector('#signupPhoneNumber').value = '';
            
            window.location.href = '#loginForm';
        }
    });
}

// JavaScript para el formulario de login
const loginForm = document.querySelector('#loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.querySelector('#loginEmail').value;
        const password = document.querySelector('#loginPassword').value;
        const Users = JSON.parse(localStorage.getItem('users')) || [];
        const validUser = Users.find(user => user.email === email && user.password === password);


        if (!validUser) {
            await Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario y/o contraseña incorrectos!'
            });
        } else {
            await Swal.fire({
                icon: 'success',
                title: '¡Bienvenido!',
                text: `Bienvenido ${validUser.name}`,
                showConfirmButton: false,
                timer: 1500 // Cierra automáticamente después de 1.5 segundos
            }).then(() => {
                localStorage.setItem('login_success', JSON.stringify(validUser));
                window.location.href = 'index.html';
            });
        }
    });
}


/*
//FETCH POST
var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  fetch("http://localhost:8080/administrador/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


//FETCH PUT

var requestOptions = {
    method: 'PUT',
    redirect: 'follow'
  };
  
  fetch("http://localhost:8080/administrador/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


*/