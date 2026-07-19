// Arreglo con las propiedades que están en venta
const propiedadesVenta = [
  {
    nombre: 'Departamento moderno en Providencia',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
    descripcion: 'Departamento luminoso con espacios amplios y excelente conectividad.',
    ubicacion: 'Providencia, Santiago',
    habitaciones: 3,
    costo: 185000000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa familiar en La Reina',
    src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
    descripcion: 'Casa con jardín, terraza y un entorno tranquilo para toda la familia.',
    ubicacion: 'La Reina, Santiago',
    habitaciones: 4,
    costo: 295000000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Loft con vista a la ciudad',
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
    descripcion: 'Loft de diseño contemporáneo con una vista privilegiada de Santiago.',
    ubicacion: 'Santiago Centro',
    habitaciones: 1,
    costo: 98000000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Casa amplia en Peñalolén',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    descripcion: 'Propiedad espaciosa con jardín y cómodas áreas comunes.',
    ubicacion: 'Peñalolén, Santiago',
    habitaciones: 5,
    costo: 320000000,
    smoke: true,
    pets: false
  }
];

// Arreglo con las propiedades que están en arriendo
const propiedadesArriendo = [
  {
    nombre: 'Departamento acogedor en Ñuñoa',
    src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80',
    descripcion: 'Departamento cómodo, cercano al metro y a diferentes servicios.',
    ubicacion: 'Ñuñoa, Santiago',
    habitaciones: 2,
    costo: 720000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Estudio en Santiago Centro',
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    descripcion: 'Estudio funcional y equipado, ideal para una persona o pareja.',
    ubicacion: 'Santiago Centro',
    habitaciones: 1,
    costo: 450000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Departamento con vista al parque',
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',
    descripcion: 'Propiedad con terraza y una agradable vista a áreas verdes.',
    ubicacion: 'Vitacura, Santiago',
    habitaciones: 3,
    costo: 1250000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Casa en condominio',
    src: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=900&q=80',
    descripcion: 'Casa segura y tranquila dentro de un condominio familiar.',
    ubicacion: 'Maipú, Santiago',
    habitaciones: 3,
    costo: 850000,
    smoke: true,
    pets: false
  }
];

// Esto muestra los precios con formato chileno
const formatoPrecio = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0
});

// Esta función crea las tarjetas dentro del contenedor indicado
function renderizarPropiedades(propiedades, selector, limite = propiedades.length) {
  const contenedor = document.querySelector(selector);

  // Si el contenedor no está en la página, detenemos la función
  if (!contenedor) {
    return;
  }

  let tarjetas = '';

  // Recorremos las propiedades hasta llegar al límite
  for (const propiedad of propiedades.slice(0, limite)) {
    let mensajeSmoke = '';
    let mensajePets = '';

    // Revisamos si se permite fumar
    if (propiedad.smoke) {
      mensajeSmoke = '<p class="permitido">🚬 Permitido fumar</p>';
    } else {
      mensajeSmoke = '<p class="prohibido">🚭 No se permite fumar</p>';
    }

    // Revisamos si se permiten mascotas
    if (propiedad.pets) {
      mensajePets = '<p class="permitido">🐾 Mascotas permitidas</p>';
    } else {
      mensajePets = '<p class="prohibido">🚫 No se permiten mascotas</p>';
    }

    // Creamos el HTML de cada tarjeta
    tarjetas += `
      <article class="tarjeta-propiedad">
        <img src="${propiedad.src}" alt="${propiedad.nombre}">
        <div class="contenido-tarjeta">
          <h3>${propiedad.nombre}</h3>
          <p>${propiedad.descripcion}</p>
          <p class="ubicacion">📍 ${propiedad.ubicacion}</p>
          <p>🛏️ ${propiedad.habitaciones} habitaciones</p>
          <p class="precio">${formatoPrecio.format(propiedad.costo)}</p>
          <div class="condiciones">
            ${mensajeSmoke}
            ${mensajePets}
          </div>
        </div>
      </article>
    `;
  }

  // Agregamos todas las tarjetas a la página
  contenedor.innerHTML = tarjetas;
}
