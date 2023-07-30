let navbar=document.getElementById("nav1");
let footer=document.getElementById("footer1");


//Vamos a insertar nuestro navbar

navbar.insertAdjacentHTML("afterbegin",`

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;600&display=swap" rel="stylesheet">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <img src="./img/colibri.png" alt="Colibrí" class="colibri" width="70px">  
    </br> 
                                                   
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
      <a class="nav-link" href="productos.html">PRODUCTOS</a>
      
    </li>
  

    <li class="nav-item">
      <a class="nav-link" href="Carrito.html"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
    </svg>
   
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
      </svg>
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
        <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
       <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
    </svg>
  </li>

    </ul>
  </div>
</div>
</nav>`);
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
            <li class="nav-item mb-2"><a href="./nosotros.html" class="nav-link p-0 text-body-secondary">Nosotros</a></li>
            <li class="nav-item mb-2"><a href="./contactanos.html" class="nav-link p-0 text-body-secondary">Contáctanos</a></li>
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
  </div>`)
