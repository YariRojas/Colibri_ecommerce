let navbar = document.getElementById("nav1");
let footer = document.getElementById("footer1");

navbar.insertAdjacentHTML("afterbegin", `
<!--NAVBAR-->
  <div class="contenedor">
    <img src="./img/LOGO.png" alt="Imagen Centrada">
  </div>
  <nav class="nav">
    <button class="nav-toggle" aria-label="">
      <i class="fas fa-bars"></i>
    </button>
    <ul class="nav-menu">
      <li class="nav-menu-item">
        <a href="./index.html" class="nav-menu-link nav-link">INICIO</a>
      </li>
      <li class="nav-menu-item">
        <a href="./productos.html" class="nav-menu-link nav-link">CATÁLOGO</a>
      </li>
      <li class="nav-menu-item">
        <a href="./nosotros.html" class="nav-menu-link nav-link">NOSOTROS</a>
      </li>
      <li class="nav-menu-item">
        <a href="./contacto.html" class="nav-menu-link nav-link ">CONTÁCTANOS</a>
      </li>
    </ul>
    <div class="icon">
      <a href="#"><img src="./img/carrito-de-compras-unscreen.gif" alt="Icono 1"></a>
      <a href="./login.html"><img src="./img/vista-de-calle-unscreen.gif" alt="Icono 2"></a>
    </div>
  </nav>
  <script>
  const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
</script>
  `);

footer.insertAdjacentHTML("beforeend", `
     <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>COLIBRÍ.co</h1>
                <p>¡Lo mejor de México, para ti!</p>
                <div id="footer_social_media">
                    <img src="./img/instagram.png" href="https://www.instagram.com/" class="footer-link" id="instagram">
                    <img src="./img/facebook.png" href="https://www.facebook.com/" class="footer-link" id="facebook">
                    <img src="./img/gorjeo.png" href="https://www.twitter.com/" class="footer-link" id="twitter">
                </div>
            </div>
            <ul class="footer-list">
                <li>
                    <h3>DIRECTORIO</h3>
                </li>
                <li><a href="./index.html" class="footer-link">INICIO</a></li>
                <li><a href="./nosotros.html" class="footer-link">NOSOTROS</a></li>
                <li><a href="./productos.html" class="footer-link">CATÁLOGO</a></li>
            </ul>
            <ul class="footer-list">
                <li>
                    <h3>CONTÁCTANOS</h3>
                </li>
                <li><a href="./login.html" class="footer-link">REGÍSTRATE</a></li>
                <li><a href="./login.html" class="footer-link">MI CUENTA</a></li>
                <li><a href="formularioProductos.html" class="footer-link">ADMINISTRADOR</a></li>
            </ul>
            <div id="footer_subscribe">
                <h3>Suscribete a nuestro newsletter</h3>
                <p>¡Recibe las mejores ofertas!</p>
                <div id="input_group">
                    <input type="email" id="email">
                    <button>
                        <i class="fa-regular fa-envelope" href="./login.html"></i>
                    </button>
                </div>
            </div>
        </div>
        <div id="footer_copyright">
            &#169 COLIBRÍ. Todos los derechos reservados.
        </div>
    </footer>`);

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
