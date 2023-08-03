let navbar=document.getElementById("nav1");
let footer=document.getElementById("footer1");


//Vamos a insertar nuestro navbar


navbar.insertAdjacentHTML("afterbegin",`
<header class="">
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600&display=swap" rel="stylesheet">
<header class="container">

        <nav>
                <img src="./img/colibri.png">
              
                <ul class="linksnav">
                  <li><a href="./index.html">
                      INICIO
                    </a></li>
                  <li><a href="./productos.html">PRODUCTOS</a></li>
                  <li><a href="./nosotros.html">NOSOTROS</a></li>
                  <li><a href="./formulario.html">CONTÁCTANOS</a></li>              
                </ul>  
            
        </nav>
        <li class="icons"><a href="login.html"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/></svg></li>
      <li class="icons"><a href="search"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
          <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
          <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
        </svg></a></li>
      <li class="icons"><a href="Carrito.html"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg></a></li>
    </header>`);


footer.insertAdjacentHTML("beforeend",`
<div class="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 border-top"></div>
<div class="container">
     
    <footer class="py-5">
      <div class="row">
        <div class="col-5 col-md-6 mb-4">
          <h4>DIRECTORIO</h4>
          
          <ul class="nav col-xs-12 col-sm-12 col-md-8 col-lg-6">
            <li class="nav-item mb-3"><a href="./index.html" class="nav-link p-0 text-body-secondary">Inicio</a></li>
            <li class="nav-item mb-2"><a href="./productos.html" class="nav-link p-0 text-body-secondary">Productos</a></li>
            <li class="nav-item mb-2"><a href="./nosotros.html" class="nav-link p-0 text-body-secondary">Nosotros</a></li>
            <li class="nav-item mb-2"><a href="./formulario.html" class="nav-link p-0 text-body-secondary">Contáctanos</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Login</a></li>
            
        
          </ul>
        </div>
  
        
  
  
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-6">
          <form>
            <h5>Suscribete a nuestro newsletter</h5>
            <p>¡Recibe las mejores ofertas!</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Ingresa tu email</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Ingresa tu email">
              <button class="btn btn-primary" type="button">Suscribirme</button>
            </div>
          </form>
        </div>
      </div>
  
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <div class="container text-center">
            <p>&copy; 2023 COLIBRÍ. Todos los derechos reservados.</p>
        </div>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>`);


  navbar2.insertAdjacentHTML("afterbegin",`

<!-- Enlaza Bootstrap 5 CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
<!-- (opcional) -->
<link rel="stylesheet" href="">
</head>



<nav class=" navbar navbar-dark bg-dark border border-dark navbar navbar-expand-lg navbar-light bg-light fixed-top" >
<div class="container ">
  <a class="navbar-brand" href="#"><img src="./img/colibri.png" alt="" width="85" height="60" class="d-inline-block align-text-top">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-">
      <li class="nav-item">
        <a class="nav-link" href="./nosotros.html" style="color: white;">INICIO</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./productos.html" style="color: white;">PRODUCTOS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./nosotros.html" style="color: white;">NOSOTROS</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="./formularioPrueba.html"  style="color: white;">CONTACTANOS</a>
      </li>
<div class="containerico " style="position:right;">
     

      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="35"  fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" style="color: aliceblue;">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="35" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16" style="color: aliceblue;">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="55" height="35" fill="currentColor" class="bi bi-search-heart-fill" viewBox="0 0 16 16" style="color: aliceblue;">
        <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
      </svg>

    </div>     
    </ul>


  </div>
</div>


</nav>        

`);
/*

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
*/


footer.insertAdjacentHTML("beforeend",`


<div class="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 border-top"></div>
<div class="container">
     
    <footer class="py-5">
      <div class="row">
        <div class="col-5 col-md-6 mb-4">
          <h4>DIRECTORIO</h4>
          
          <ul class="nav flex-column">
            <li class="nav-item mb-3"><a href="./index.html" class="nav-link p-0 text-body-secondary">Inicio</a></li>
            <li class="nav-item mb-2"><a href="./productos.html" class="nav-link p-0 text-body-secondary">Productos</a></li>
            <li class="nav-item mb-2"><a href="./nosotros.html" class="nav-link p-0 text-body-secondary">Nosotros</a></li>
            <li class="nav-item mb-2"><a href="./formulario.html" class="nav-link p-0 text-body-secondary">Contáctanos</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Login</a></li>
            
        
          </ul>
        </div>
  
        
  
  
        <div class="col-md-5 offset-md-1 mb-5">
          <form>
            <h5>Suscribete a nuestro newsletter</h5>
            <p>¡Recibe las mejores ofertas!</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Ingresa tu email</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Ingresa tu email">
              <button class="btn btn-primary" type="button">Suscribirme</button>
            </div>
          </form>
        </div>
      </div>
  
      <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <div class="container text-center">
            <p>&copy; 2023 COLIBRÍ. Todos los derechos reservados.</p>
        </div>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>`);
