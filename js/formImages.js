// Referenciamos el input de tipo "file" y el div para mostrar mensajes.
const fileInput = document.getElementById('fileInput');
const messageDiv = document.getElementById('message');

// Función para subir el archivo y almacenarlo en localStorage.
function uploadFile() {
    const file = fileInput.files[0]; // Obtenemos el primer archivo seleccionado.

    if (!file) {
        messageDiv.innerHTML = 'Por favor, selecciona un archivo.';
        return;
    }

    // Creamos un FileReader para leer el contenido del archivo.
    const reader = new FileReader();

    // Cuando se complete la lectura del archivo, almacenamos su contenido en localStorage.
    reader.onload = function (event) {
        const fileContent = event.target.result;
        localStorage.setItem('uploadedFile', fileContent);
        messageDiv.innerHTML = 'Archivo subido y almacenado en localStorage.';
    };

    // Leemos el archivo como texto.
    reader.readAsText(file);
}
