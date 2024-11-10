import peliculas from './peliculas.js';

updateContent();

function updateContent() {
    const array_28 = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
    const array_53 = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
    const array_12 = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));
    const baseImagen = 'https://image.tmdb.org/t/p/w500'; 
    const clase1 = document.getElementById('genero-28');
    const clase2 = document.getElementById('genero-53');
    const clase3 = document.getElementById('genero-12');

    if (clase1) {
        clase1.innerHTML = array_28.map(pelicula => `
        <div class="producto">
            <div class="imagen">
                <img src="${baseImagen + pelicula.poster_path}" alt="${pelicula.title}">
            </div>
            <h3>${pelicula.title}</h3>
        </div>
    `).join('');
    }
    
    if (clase2) {
        clase2.innerHTML = array_53.map(pelicula => `
        <div class="producto">
            <div class="imagen">
                <img src="${baseImagen + pelicula.poster_path}" alt="${pelicula.title}">
            <h3>${pelicula.title}</h3>
                </div>
            
        </div>
    `).join('');
    }

    if (clase3) {
        clase3.innerHTML = array_12.map(pelicula => `
        <div class="producto">
            <div class="imagen">
                <img src="${baseImagen + pelicula.poster_path}" alt="${pelicula.titulo}">
            </div>
            <h3>${pelicula.title}</h3>
        </div>
    `).join('');
    }
}
