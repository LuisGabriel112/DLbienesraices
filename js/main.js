console.log('Hello, world!');
// Definir un template

const templateCasa = (titulo, ubicacion, habitaciones, baños, tamaño, garages, imagen ) => {
    return `<div data-aos="fade-up" data-aos-duration="1000" class="casa">
    <div class="casaT">
        <h2>${titulo}</h2>
        <p class="ubiP"><img class="ubi_img" src="img/assets/location-pin-svgrepo-com.svg" alt="">Ubicación: ${ubicacion}</p>
        <div class="caracteristicas">
        <p class="div1"><img class="bed_img" src="img/assets/bed-svgrepo-com (1).svg" alt="">Habitaciones: ${habitaciones}</p>
        <p class="div2"> <img class="bath_img" src="img/assets/bath-tube-svgrepo-com.svg" alt="">Baños: ${baños}</p>
        <p class="div3"> <img class="rule_img" src="img/assets/ruler-svgrepo-com.svg" alt="">Tamaño: ${tamaño}</p>
        <p class="div4"> <img class="garage_img" src="img/assets/garage-property-svgrepo-com.svg" alt="">Garages: ${garages}</p>
        <a href="propiedades.html" class="div5 button-86" role="button">Ver más</a>
        </div>
    </div>
    <div class="casaI">
        <img class="casa_img" src="${imagen}" alt="Imagen de la casa">
    </div>
    </div>`;
}

// Cargar el archivo JSON y generar las cartas
fetch('js/propiedades.json')
    .then(response => response.json())
    .then(data => {
        const seccionPropiedades = document.getElementById('seccionPropiedades');
        data.forEach(propiedad => {
            seccionPropiedades.innerHTML += templateCasa(
                propiedad.titulo,
                propiedad.ubicacion,
                propiedad.habitaciones,
                propiedad.baños,
                propiedad.tamaño,
                propiedad.garages,
                propiedad.imagen
            );
        });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));