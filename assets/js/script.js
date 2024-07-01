import { propiedades_alquiler } from './data_alquiler.js';
import { propiedades_venta } from './data_venta.js';

const venta_home = document.getElementById("venta_home")
const alquiler_home = document.getElementById("alquiler_home")
const venta = document.getElementById("venta")
const alquiler = document.getElementById("alquiler")



if (venta_home){
  renderData(propiedades_venta, venta_home, 3);
}

if (alquiler_home){
  renderData(propiedades_alquiler, alquiler_home, 3);
}

if (venta){
    renderData(propiedades_venta, venta);
}

if (alquiler){
    renderData(propiedades_alquiler, alquiler);
} 



function renderData(propiedades, container, limit = 0){
  let cartas = ""
  if (limit){
      for(let i = 0; i < limit; i++){
          cartas += crearCarta(propiedades[i])
      } 
      container.innerHTML = cartas
  } else {
      for(let element of propiedades){
          cartas += crearCarta(element)
      }
  }
  container.innerHTML = cartas;
}

function crearCarta(propiedad){
  return `
      <div class="col-md-4 mb-4">
        <div class="card">
            <img
              src="${propiedad.src}"
              class="card-img-top"
              alt="${propiedad.nombre}"
            />
            <div class="card-body">
              <h5 class="card-title">
                ${propiedad.nombre}
              </h5>
              <p class="card-text">
                ${propiedad.descripcion}
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
              </p>
              <p>
                <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedad.baños} Baños
              </p>
              <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
              ${propiedad.fumar
                  ? `<p class='text-success'><i class='fas fa-smoking'></i> Se permiten fumadores</p>`
                  : `<p class='text-danger'><i class='fas fa-smoking-ban'></i> No fumadores</p>`
              }
              ${propiedad.mascota
                  ? `<p class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas</p>`
                  : `<p class='text-danger'><i class='fas fa-ban'></i> No se permiten mascotas</p>`
              }
            </div>
          </div>
      </div>
  `
}
