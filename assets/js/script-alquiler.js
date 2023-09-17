import { propiedades_alquiler } from "./data-alquiler.js";
const propiedadesAlquiler = document.querySelector("#propiedadesAlquiler");

const mostrarDataAlquiler = () => {
  propiedades_alquiler.forEach((propiedades) => {
    const {
      nombre,
      src,
      descripcion,
      ubicacion,
      habitaciones,
      costo,
      smoke,
      pets,
    } = propiedades;
    console.log(propiedades);
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
    <div class="card">
    <img
      src=${src}
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">
      ${descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${habitaciones} |
        <i class="fas fa-bath"></i> 1 Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i>${costo}</p>
      <p class=${smoke ? "text-success" : "text-danger"}>
        <i class="${smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}">${
      smoke ? " Permitido fumar" : " No se permite fumar"
    }</i>
      </p>
      <p class=${pets ? "text-success" : "text-danger"}>
        <i class="${pets ? "fas fa-paw" : "fa-solid fa-ban"}"></i> ${
      pets ? " Mascotas permitidas" : " No se permiten mascotas"
    }
      </p>
    </div>
  </div>`;
    //Insertar Card dentro del container
    propiedadesAlquiler.appendChild(card);
  });
};
mostrarDataAlquiler();
