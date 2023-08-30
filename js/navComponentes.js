let navbar = document.getElementById("nav1");
let footer = document.getElementById("footer1");

navbar.insertAdjacentHTML("afterbegin", `
  <div class="contenedor">
    <img src="./img/LOGO.png" alt="Imagen Centrada">
  </div>
  <nav class="nav">
    <button class="nav-toggle" aria-label="">MENÚ
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
  </nav>`);

footer.insertAdjacentHTML("beforeend", `
     <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <h1>colibrí.com</h1>
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
                <li><a href="./index.html" class="footer-link" style="text-decoration: none;" >INICIO</a></li>
                <li><a href="./nosotros.html" class="footer-link" style="text-decoration: none;">NOSOTROS</a></li>
                <li><a href="./productos.html" class="footer-link" style="text-decoration: none;">CATÁLOGO</a></li>
            </ul>
            <ul class="footer-list">
                <li>
                    <h3>CONTÁCTANOS</h3>
                </li>
                <li><a href="./login.html" class="footer-link" style="text-decoration: none;">REGÍSTRATE</a></li>
                <li><a href="./login.html" class="footer-link" style="text-decoration: none;">MI CUENTA</a></li>
                <li><a href="formularioProductos.html" class="footer-link" style="text-decoration: none;">ADMINISTRADOR</a></li>
            </ul>
            <div id="footer_subscribe">
                <h3>¡Suscríbete a nuestro boletín!</h3>
                <p>¡Recibe las mejores ofertas!</p>
                <div id="input_group" class="texto">
                    <input  type="email" id="email" class="email">
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