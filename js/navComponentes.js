let navbar=document.getElementById("nav1");
let footer=document.getElementById("footer1");


//Vamos a insertar nuestro navbar

navbar.insertAdjacentHTML("afterbegin",`<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <img src="./img/LOGO.png" alt="Colibrí" width="330px" height="100px">                                                   
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">INICIO</a>
     
    </li>
      <li class="nav-item">
        <a class="nav-link" href="nosotros.html">NOSOTROS</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="contactanos.html">CONTÁCTANOS</a>
    </li>
  

    <li class="nav-item">
      <a class="nav-link" href="Carrito.html">CARRITO DE COMPRAS</a>
    </li>
    

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Realiza tu pedido, aquí:
         </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="nuevoslanzamiento.html">Nuevos Lanzamientos</a></li>
          <li><a class="dropdown-item" href="catalogo.html">Catalogo</a></li>
          <li class="nav-item">



          </li>
         </ul>
      </li>
    </ul>
  </div>
</div>
</nav>`);


footer.insertAdjacentHTML("beforeend",`<footer class="mt-5 py-3">
<div class="container text-center">
    <p>&copy; 2023 COLIBRÍ. Todos los derechos reservados.</p>
</div>
</footer>`)
