/* --- ================================== --- */
/* ---  Lógica de la pantalla de inicio   --- */
/* --- ================================== --- */

// 1. Seleccionar los elementos de la pantalla de inicio
const btnComenzar = document.getElementById('btn-comenzar');
const inicioScreen = document.getElementById('inicio-screen');
const categoriasScreen = document.getElementById('categorias-screen');

// 2. Asignar el evento al botón "COMENZAR"
if (btnComenzar) {
    btnComenzar.addEventListener('click', () => {
        // Oculta la pantalla de inicio
        inicioScreen.style.display = 'none';
        
        // Calcula la altura que tenía la pantalla de inicio
        const inicioHeight = inicioScreen.offsetHeight;
        
        // Asigna esa altura como altura mínima a la pantalla de categorías
        categoriasScreen.style.minHeight = inicioHeight + 'px';
        
        // Muestra la pantalla de categorías
        categoriasScreen.style.display = 'block';
    });
}

/* --- Se quitó toda la lógica del Menú Popup --- */