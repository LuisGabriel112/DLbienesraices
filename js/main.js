console.log('Hello, world!');
// Definir un template

const templateCasa = (titulo, ubicacion, habitaciones, baños, tamaño, garages, imagen ) => {
    return `<div class="casa">
        <h2>${titulo}</h2>
        <p>Ubicación: ${ubicacion}</p>
        <p>Habitaciones: ${habitaciones}</p>
        <p>Baños: ${baños}</p>
        <p>Tamaño: ${tamaño}</p>
        <p>Garages: ${garages}</p>
        <img src="${imagen}" alt="Imagen de la casa">
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