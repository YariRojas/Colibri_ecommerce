let navbar=document.getElementById("nav1");
let footer=document.getElementById("footer1");





navbar.insertAdjacentHTML("afterbegin",`
<nav class="navbar ">
        <a href="javascript:void(0);" class="navbar-toggler-icon" onclick="myFunction()">

        </a>
        <div class="img-container">
            <img src="./img/LOGO.png" alt="Logo" class="logoC">
        </div>
        <div class="enlaces-container" style="text-align: center;" id="enlacesNav">

        </div>
        <div class="login-container" style=" text-align: center;" id="botonesNav">

        </div>
        <div class="navlinksContainer" id="containerDivlinks" style="display: none;">
            <a href="./productos.html">PRODUCTOS</a>
            <a href="./nosotros.html">NOSOTROS</a>
            <a href="./contacto.html">CONTÁCTANOS</a>
        </div>
        <div class="topnav" id="topnav" style="border: none;">
            <div id="myLinks">
                <a href="./index.html">INICIO</a>
                <a href="./productos.html">PRODUCTOS</a>
                <a href="./nosotros.html">NOSOTROS</a>
                <a href="./contacto.html">CONTÁCTANOS</a>
            </div>
        </div>
    </nav>`);




  footer.insertAdjacentHTML("beforeend",`
<div class="d-flex flex-column flex-sm-row justify-content-between py-2 my-2 border-top"></div>
<div class="container">
     
    <footer class="py-5">
      <div class="row">
        <div class="col-5 col-md-6 mb-4">
          <h4>DIRECTORIO</h4>
          
          <ul class="nav col-xs-12 col-sm-12 col-md-8 col-lg-6">
            <li class="nav-item mb-3"><a href="./index.html" class="nav-link p-0 text-body-secondary">Inicio </a></li>
            <li class="nav-item mb-2"><a href="./productos.html" class="nav-link p-0 text-body-secondary"> Productos </a></li>
            <li class="nav-item mb-2"><a href="./nosotros.html" class="nav-link p-0 text-body-secondary"> Nosotros </a></li>
            <li class="nav-item mb-2"><a href="./contacto.html" class="nav-link p-0 text-body-secondary"> Contáctanos </a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Login</a></li>

            <li class="nav-item mb-2"><a href="./formularioProductos.html" class="nav-link p-0 text-body-secondary">Formulario Productos</a></li>
            
            
        
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
        

    </div>
        <ul class="list-unstyled d-flex">
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>`);

  let enlacesNav = document.getElementById("enlacesNav");
  let botonesNav = document.getElementById("botonesNav");
  
  
  let enlaces = `<a href="./index.html" style="padding-left: 20px;">INICIO</a>
                  <a href="./productos.html" style="padding-left: 20px;">PRODUCTOS</a>
                  <a href="./nosotros.html" style="padding-left: 20px;">NOSOTROS</a>
                  <a href="./contacto.html" style="padding-left: 20px;">CONTÁCTANOS</a>`
  
  let botones = `
              <ul class="lista">
                  <li>
                      <a href="./login.html"><img src="./img/amigo.gif" alt="login" id="login"</a>
                  </li>
                  <li>
                      <a href="./CarritoCompras.html"><img src="./img/carrito-de-compras.gif" alt="carrito" id="carrito"></a>
                  </li>
              </ul>`
  
 
  window.addEventListener("load", function (event) {
      event.preventDefault;
      enlacesNav.insertAdjacentHTML("beforeend", enlaces);
      botonesNav.insertAdjacentHTML("beforeend", botones);
  });
  
  function myFunction() {
      //var topnav = document.querySelector(".topnav");
      let topnav = document.getElementById("topnav");
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
        topnav.style.height = "0";
      } else {
        x.style.display = "block";
        topnav.style.height = "100%";
      }
  }
  