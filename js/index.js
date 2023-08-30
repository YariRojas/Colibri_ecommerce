const Users = JSON.parse(localStorage.getItem('login_success')) || false;

if (!Users) {
    Swal.fire({
        icon: 'error',
        title: 'Acceso denegado',
        text: 'Debes iniciar sesión para acceder a esta página.',
        showConfirmButton: false,
        timer: 2000, // cerrar después de 2 segundos
        willClose: () => {
            window.location.href = 'login.html';
        }
    });
}

const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
    Swal.fire({
        icon: 'info',
        title: 'Cierre de sesión',
        text: '¡Hasta pronto!',
        showConfirmButton: false,
        timer: 1500, //cerrar después de 1.5 segundos
        willClose: () => {
            localStorage.removeItem('login_success');
            window.location.href = 'login.html';
        }
    });
});

/*CARRUSEL DE OFERTAS*/

const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1.5;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();


/*OFERTAS*/
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});