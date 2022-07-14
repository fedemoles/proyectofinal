// ? ----- ----- Event Listener para animar menú hamburguesa. ----- -----
document
  .querySelector(".first-button")
  .addEventListener("click", function animateBars() {
    document.querySelector(".animated-icon1").classList.toggle("open");
  });

const fila = document.querySelector('.contenedor-carousel');
const propiedades = document.querySelectorAll('.propiedad');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector('.indicadores .activo');
  if (indicadorActivo.nextSibling) {
    indicadorActivo.nextSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector('.indicadores .activo');
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add('activo');
    indicadorActivo.classList.remove('activo');
  }
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(propiedades.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement('button');

  if (i === 0) {
    indicador.classList.add('activo');
  }

  document.querySelector('.indicadores').appendChild(indicador);
  indicador.addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector('.indicadores .activo').classList.remove('activo');
    e.target.classList.add('activo');
  });
}

// ? ----- ----- Hover ----- -----
propiedades.forEach((propiedad) => {
  propiedad.addEventListener('mouseenter', (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      propiedades.forEach(propiedad => propiedad.classList.remove('hover'));
      elemento.classList.add('hover');
    }, 300);
  });
});

fila.addEventListener('mouseleave', () => {
  propiedades.forEach(propiedad => propiedad.classList.remove('hover'));
});

/** @format */

// declarando las variables del scroll top
const scrollButton = document.querySelector(".scroll-top");

if (scrollButton) {
  window.addEventListener("scroll", () => {
    if (scrollY > window.innerHeight * 0.0) {
      scrollButton.style.display = "flex";
    } else {
      scrollButton.style.display = "none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollBy(0, -2500);
  });
}