
  // Función para agregar el nuevo producto
  function agregarProducto() {
    // Obtener los valores de los campos del formulario
    let nombreProducto = document.getElementById("productoNuevo").value;
    let descripcionProducto = document.getElementById("descripcion").value;
    let precioProducto = document.getElementById("precioProducto").value;
    let imagenProducto = document.getElementById("inputImagen").value;

    // Validar que los campos no estén vacíos
    if (!nombreProducto || !descripcionProducto || !precioProducto || !imagenProducto) {
      let alertError = document.getElementById("alertError");
      const alertErrorTexto = document.getElementById("alertErrorTexto");
      alertErrorTexto.textContent = "Por favor, completa todos los campos.";
      alertError.style.display = "block";
      return;
    }

    // Aquí puedes realizar el código necesario para enviar los datos del formulario a tu servidor
    // Por ejemplo, puedes usar AJAX para enviar una solicitud POST con los datos del nuevo producto.

    // Una vez que el producto se ha agregado correctamente, puedes redirigir al usuario a otra página o hacer cualquier acción necesaria.

    // Limpiar el formulario
    document.getElementById("productoNuevo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precioProducto").value = "";
    document.getElementById("inputImagen").value = "";
  }

  // Asignar el evento al botón "Agregar"
  document.getElementById("botonCrear").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir que se envíe el formulario automáticamente
    agregarProducto();
  });

