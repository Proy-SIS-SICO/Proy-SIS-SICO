/* --- ================================== --- */
/* ---  Lógica de la pantalla de inicio   --- */
/* --- ================================== --- */

// 1. Seleccionar los elementos de la pantalla de inicio
const btnComenzar = document.getElementById('btn-comenzar');
const inicioScreen = document.getElementById('inicio-screen');
const categoriasScreen = document.getElementById('categorias-screen');

// 2. Asignar el evento al botón "COMENZAR"
if (btnComenzar && inicioScreen && categoriasScreen) {
    btnComenzar.addEventListener('click', () => {
        // Oculta la pantalla de inicio
        inicioScreen.style.display = 'none';
        
        // Muestra la pantalla de categorías
        categoriasScreen.style.display = 'flex';
    });
}


/* --- ================================== --- */
/* ---  Lógica del Menú de Categorías   --- */
/* --- ================================== --- */

// 1. Seleccionar TODOS los botones de categoría
const allCategoryButtons = document.querySelectorAll('.categoria-btn');

// 2. Seleccionar la pantalla de menú genérica y su título
const genericMenuScreen = document.getElementById('generic-menu-screen');
const menuScreenTitle = document.getElementById('menu-screen-title');

// 3. Añadir un evento a CADA botón de categoría
if (allCategoryButtons.length > 0 && genericMenuScreen && menuScreenTitle) {
    
    allCategoryButtons.forEach(button => {
        
        button.addEventListener('click', () => {
            
            // 1. Obtener el texto del botón (ej: "Estrés")
            const categoryName = button.querySelector('span').textContent;
            
            // 2. Poner ese texto en el título del menú (y en mayúsculas)
            menuScreenTitle.textContent = categoryName.toUpperCase();
            
            // 3. Ocultar la pantalla de categorías
            categoriasScreen.style.display = 'none';
            
            // 4. Mostrar la pantalla de menú genérica
            genericMenuScreen.style.display = 'flex';
        });
    });
}