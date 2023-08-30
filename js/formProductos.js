let txtNombreProducto = document.getElementById("txtNombreProducto");
let txtDescriptionProducto = document.getElementById("txtDescriptionProducto");
let txtPrecioProducto = document.getElementById("txtPrecioProducto"); 
let btnAgregar = document.getElementById("btnAgregar");
let btnImg = document.getElementById("btnImg");
let product_img = document.getElementById("product_img");
let index = [];
let productos = [];
let alertNombre = document.getElementById("alertNombre");
let alertDescrip = document.getElementById("alertDescrip");
let alertPrecio = document.getElementById("alertPrecio");
let alertImg = document.getElementById("alertImg");
let alertValidaNombre = document.getElementById("alertValidaNombre");
let alertValidaDescription = document.getElementById("alertValidaDescription");
let alertValidaPrecioProducto = document.getElementById("alertValidaPrecioProducto");
let alertValidaImg = document.getElementById("alertValidaImg");

function validarNombre(nombre) {
    if (nombre.length >= 4 && nombre.length < 30) {
        return true;
    } else {
        return false;
    }
}
function validarPrecio(precio) {
    if (precio > 0 && precio != "") {
        return true;
    } else {
        return false;
    }
}
function validarDescription(description) {
    if (description.length >= 5 && description.length < 100) {
        return true;
    } else {
        return false;
    }
}

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    if (!validarNombre(txtNombreProducto.value.trim())) {
        if (!index.includes("nombre")) {
            alertValidaNombre.insertAdjacentHTML(
                "afterbegin", `El nombre es incorrecto`);
            alertValidaNombre.style.color = "red";
            txtNombreProducto.style.border = "solid thin red";
            index.push("nombre");
        }
    }
    if (!validarPrecio(txtPrecioProducto.value.trim())) {
        if (!index.includes("precio")) {
            alertValidaPrecioProducto.insertAdjacentHTML(
                "afterbegin", `El precio es incorrecto`);
            alertValidaPrecioProducto.style.color = "red";
            txtPrecioProducto.style.border = "solid thin red";
            index.push("precio");
        }
    }
    if (!validarDescription(txtDescriptionProducto.value.trim())) {
        if (!index.includes("description")) {
            alertValidaDescription.insertAdjacentHTML(
                "afterbegin", `La descripción es incorrecta`);
            alertValidaDescription.style.color = "red";
            txtDescriptionProducto.style.border = "solid thin red";
            index.push("description");
        }
    }
    if (!product_img.src) {
        if (!index.includes("imagen")) {
            alertValidaImg.insertAdjacentHTML(
                "afterbegin", `Selecciona una imagen`);
            alertValidaImg.style.color = "red";
            index.push("imagen");
        }
    }
    if (!product_img.src.match(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
        if (!index.includes("imagen")) {
            alertValidaImg.insertAdjacentHTML(
                "afterbegin", `El formato de la imagen no es correcto`);
            alertValidaImg.style.color = "red";
            index.push("imagen");
        }
    }
    if (!index.includes("nombre") && !index.includes("description") && !index.includes("price") && !index.includes("imagen")) {
        btnAgregar.disabled = true;
        btnAgregar.textContent = "Agregando nuevo producto...";
        btnAgregar.style.fontWeight = "bold";
        guardarProducto(txtNombreProducto.value, txtPrecioProducto.value, txtDescriptionProducto.value, product_img.src);
        Toast.fire({
            icon: 'success',
            title: '¡EL NUEVO PRODUCTO HA SIDO REGISTRADO!'
        });
        limpiarTodo();
    }
});

function guardarProducto(name, price, description, src) {
    let producto = `{
        "name": "${name}",
        "price": "${price}",
        "description": "${description}",
        "img": "${src}"}`;
    productos.push(JSON.parse(producto));
    this.localStorage.setItem("producto", JSON.stringify(productos));
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true
});

window.addEventListener("load", function (event) {
    event.preventDefault();
    console.log(productos);
    if (this.localStorage.getItem("producto") != null) {
        JSON.parse(this.localStorage.getItem("producto")).forEach((p) => {
            productos.push(p);
        });
    }
});

btnImg.addEventListener("click", function (event) {
    event.preventDefault();
    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'dinq39jcf',
        uploadPreset: 'hfzor1v2',
        multiple: false
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
            product_img.src = result.info.secure_url;
        }
    });
    myWidget.open();
}, false);


//validar campos
txtNombreProducto.addEventListener("input", function () {
    if (!validarNombre(txtNombreProducto.value.trim())) {
        alertValidaNombre.innerHTML = `El nombre es incorrecto`;
        alertValidaNombre.style.color = "red";
        txtNombreProducto.style.border = "solid thin red";
        index.push("nombre");
    } else {
        alertValidaNombre.innerHTML = "";
        txtNombreProducto.style.border = "";
        removeAllInstances(index, "nombre");
    }
});

txtPrecioProducto.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarPrecio(txtPrecioProducto.value.trim())) {
        if (!index.includes("precio")) {
            alertValidaPrecioProducto.insertAdjacentHTML(
                "afterbegin", `El precio es incorrecto`);
            alertValidaPrecioProducto.style.color = "red";
            txtPrecioProducto.style.border = "solid thin red";
            index.push("precio");
        }
    }
    else {
        alertValidaPrecioProducto.innerHTML = "";
        alertPrecio.style.display = "none";
        txtPrecioProducto.style.border = "";
        removeAllInstances(index, "precio");
    }
});

txtPrecioProducto.addEventListener("change", function (event) {
    event.preventDefault();
    if (!validarPrecio(txtPrecioProducto.value.trim())) {
        if (!index.includes("precio")) {
            alertValidaPrecioProducto.insertAdjacentHTML(
                "afterbegin", `El precio es incorrecto`);
            alertValidaPrecioProducto.style.color = "red";
            txtPrecioProducto.style.border = "solid thin red";
            index.push("precio");
        }
    }
    else {
        alertValidaPrecioProducto.innerHTML = "";
        alertPrecio.style.display = "none";
        txtPrecioProducto.style.border = "";
        removeAllInstances(index, "precio");
    }
});

txtDescriptionProducto.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!validarDescription(txtDescriptionProducto.value.trim())) {
        if (!index.includes("description")) {
            alertValidaDescription.insertAdjacentHTML(
                "afterbegin", `La descripción es incorrecta`);
            alertValidaDescription.style.color = "red";
            txtDescriptionProducto.style.border = "solid thin red";
            index.push("description");
        }
    }
    else {
        alertValidaDescription.innerHTML = "";
        alertDescrip.style.display = "none";
        txtDescriptionProducto.style.border = "";
        removeAllInstances(index, "description");
    }
});

product_img.addEventListener("load", function (event) {
    event.preventDefault();
    if (!product_img.src) {
        if (!index.includes("imagen")) {
            alertValidaImg.insertAdjacentHTML(
                "afterbegin", `Seleccione una imagen`);
            alertValidaImg.style.color = "red";
            index.push("imagen");
        }
    }
    else {
        alertValidaImg.innerHTML = "";
        alertImg.style.display = "none";
        product_img.style.border = "";
        removeAllInstances(index, "imagen");
    }
    if (!product_img.src.match(/[^\s]+(.*?).(jpg|jpeg|png|JPG|JPEG|PNG)$/)) {
        if (!index.includes("imagen")) {
            alertValidaImg.insertAdjacentHTML(
                "afterbegin", ` El formato de la imagen no es correcto`);
            alertValidaImg.style.color = "red";
            index.push("imagen");
        }
    }
    else {
        alertValidaImg.innerHTML = "";
        alertImg.style.display = "none";
        product_img.style.border = "";
        removeAllInstances(index, "imagen");
    }
});

//limpiar
function removeAllInstances(arr, item) {
    for (var i = arr.length; i--;) {
        if (arr[i] === item) arr.splice(i, 1);
    }
}
function limpiarTodo() {
    index = [];
    txtNombreProducto.value = "";
    txtDescriptionProducto.value = "";
    txtPrecioProducto.value = "";
    removeAllInstances(index, "nombre");
    removeAllInstances(index, "description");
    removeAllInstances(index, "price");
    removeAllInstances(index, "imagen");
    product_img.src = "";
    btnAgregar.disabled = false;
    btnAgregar.textContent = "Agregar";
    btnAgregar.style.fontWeight = "";
}

