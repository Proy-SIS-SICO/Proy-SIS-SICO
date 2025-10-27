/* --- ================================== --- */
/* ---  Lógica de la pantalla de inicio   --- */
/* --- ================================== --- */

// 1. Seleccionar los elementos de la pantalla de inicio
const btnComenzar = document.getElementById('btn-comenzar');
const inicioScreen = document.getElementById('inicio-screen');
const categoriasScreen = document.getElementById('categorias-screen');

// 2. Asignar el evento al botón "COMENZAR"
// (Se añade un 'if' por seguridad, para asegurar que el botón existe)
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

/* --- ================================== --- */
/* ---      Lógica para el Menú Popup     --- */
/* --- ================================== --- */

// 1. Seleccionar los elementos del popup
const categoriaBtns = document.querySelectorAll('.categoria-btn');
const popupMenu = document.getElementById('popup-menu');
const popupBackBtn = document.querySelector('.popup-back-btn');

// 2. Función para mostrar el popup
function showPopup(event) {
    event.stopPropagation(); // Detiene el clic para que no se propague al 'window'
    const button = event.currentTarget;

    // Si el menú está visible Y se hizo clic en el mismo botón, lo cierra
    if (popupMenu.style.display === 'block' && popupMenu.dataset.activeButton === button.className) {
        popupMenu.style.display = 'none';
        popupMenu.dataset.activeButton = '';
        return;
    }

    // Guarda qué botón lo activó y muestra el menú
    popupMenu.dataset.activeButton = button.className;
    popupMenu.style.display = 'block';
}

// 3. Asignar la función a todos los botones de categoría
categoriaBtns.forEach(btn => {
    btn.addEventListener('click', showPopup);
});

// 4. Lógica para el botón "Atrás" (X) dentro del popup
if (popupBackBtn) {
    popupBackBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Detiene el clic
        popupMenu.style.display = 'none';
        popupMenu.dataset.activeButton = '';
    });
}

// 5. Lógica para cerrar el popup si se hace clic en una opción de la lista
if (popupMenu) {
    popupMenu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            popupMenu.style.display = 'none';
            popupMenu.dataset.activeButton = '';
            // (Aquí puedes añadir la lógica para ir a esa sección)
            console.log('Opción seleccionada:', item.textContent.trim());
        });
    });
}

// 6. Lógica para cerrar el popup si se hace clic FUERA de él
window.addEventListener('click', (e) => {
    // Si el menú existe, si no se hizo clic dentro de él, Y si no se hizo clic en un botón de categoría...
    if (popupMenu && !popupMenu.contains(e.target) && !e.target.closest('.categoria-btn')) {
        // ... ciérralo.
        popupMenu.style.display = 'none';
        popupMenu.dataset.activeButton = '';
    }
});