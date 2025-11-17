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
if (allCategoryButtons.length > 0 && genericMenuScreen && menuScreenTitle && categoriasScreen) {
    
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


/* --- ================================== --- */
/* ---  Lógica del Botón de Volver (Menú) --- */
/* --- ================================== --- */

// 1. Seleccionar el botón de volver del MENÚ
const btnMenuVolver = document.getElementById('btn-menu-volver');

// 2. Asignar el evento
if (btnMenuVolver && genericMenuScreen && categoriasScreen) {
    
    btnMenuVolver.addEventListener('click', () => {
        
        // 1. Ocultar el menú genérico
        genericMenuScreen.style.display = 'none';
        
        // 2. Mostrar la pantalla de categorías
        categoriasScreen.style.display = 'flex';
    });
}


/* --- ================================== --- */
/* --- Lógica del Botón de Volver (Categorías) --- */
/* --- ================================== --- */

// 1. Seleccionar el nuevo botón de volver de CATEGORÍAS
const btnCategoriasVolver = document.getElementById('btn-categorias-volver');

// 2. Asignar el evento
// (inicioScreen y categoriasScreen ya están definidos arriba)
if (btnCategoriasVolver && categoriasScreen && inicioScreen) {
    
    btnCategoriasVolver.addEventListener('click', () => {
        
        // 1. Ocultar la pantalla de categorías
        categoriasScreen.style.display = 'none';
        
        // 2. Mostrar la pantalla de inicio
        inicioScreen.style.display = 'flex';
    });
}


/* --- ================================== --- */
/* --- Lógica del H1 de Portada (Salud Mental) --- */
/* --- ================================== --- */

// 1. Seleccionar los nuevos elementos
const btnSaludMentalPortada = document.getElementById('btn-salud-mental-portada');
const saludMentalScreen = document.getElementById('salud-mental-screen');
// (inicioScreen ya está definida arriba)

// 2. Asignar evento al H1 "SALUD MENTAL"
if (btnSaludMentalPortada && saludMentalScreen && inicioScreen) {
    btnSaludMentalPortada.addEventListener('click', () => {
        // 1. Ocultar la pantalla de inicio
        inicioScreen.style.display = 'none';
        
        // 2. Mostrar la pantalla de Salud Mental
        saludMentalScreen.style.display = 'flex';
    });
}

/* --- ================================== --- */
/* --- Lógica de Volver (Pantalla Salud Mental) --- */
/* --- ================================== --- */

// 1. Seleccionar el botón de volver
const btnSaludVolver = document.getElementById('btn-salud-volver');

// 2. Asignar evento al botón "Volver" de la pantalla de Salud Mental
// (inicioScreen y saludMentalScreen ya están definidos)
if (btnSaludVolver && saludMentalScreen && inicioScreen) {
    btnSaludVolver.addEventListener('click', () => {
        // 1. Ocultar la pantalla de Salud Mental
        saludMentalScreen.style.display = 'none';
        
        // 2. Mostrar la pantalla de inicio
        inicioScreen.style.display = 'flex';
    });
}


/* --- ================================== --- */
/* --- ¡ACTUALIZADO! Lógica del Menú "Concepto" --- */
/* --- ================================== --- */

// 1. Seleccionar el botón "Concepto" y TODAS las pantallas de concepto
const btnConcepto = document.querySelector('.menu-btn.concepto');
const ansiedadConceptoScreen = document.getElementById('ansiedad-concepto-screen');
const depresionConceptoScreen = document.getElementById('depresion-concepto-screen');
const estresConceptoScreen = document.getElementById('estres-concepto-screen'); // <-- Nueva pantalla

if (btnConcepto && ansiedadConceptoScreen && depresionConceptoScreen && estresConceptoScreen && genericMenuScreen && menuScreenTitle) {
    
    btnConcepto.addEventListener('click', () => {
        
        // 1. Comprobar el título actual del menú
        const currentTitle = menuScreenTitle.textContent;
        
        // 2. Si el título es "ANSIEDAD", mostrar la pantalla de ansiedad
        if (currentTitle === 'ANSIEDAD') {
            genericMenuScreen.style.display = 'none';
            ansiedadConceptoScreen.style.display = 'flex';
        }
        // 3. Si el título es "DEPRESIÓN", mostrar la pantalla de depresión
        else if (currentTitle === 'DEPRESIÓN') {
            genericMenuScreen.style.display = 'none';
            depresionConceptoScreen.style.display = 'flex';
        }
        // 4. ¡NUEVO! Si el título es "ESTRÉS", mostrar la pantalla de estrés
        else if (currentTitle === 'ESTRÉS') {
            genericMenuScreen.style.display = 'none';
            estresConceptoScreen.style.display = 'flex';
        }
    });
}


/* --- ================================== --- */
/* --- Lógica de Volver (Concepto Ansiedad) --- */
/* --- ================================== --- */

// 1. Seleccionar el botón de volver de la pantalla de ansiedad
const btnAnsiedadConceptoVolver = document.getElementById('btn-ansiedad-concepto-volver');

// 2. Asignar el evento
if (btnAnsiedadConceptoVolver && ansiedadConceptoScreen && genericMenuScreen) {
    
    btnAnsiedadConceptoVolver.addEventListener('click', () => {
        
        // 1. Ocultar la pantalla de concepto de ansiedad
        ansiedadConceptoScreen.style.display = 'none';
        
        // 2. Mostrar la pantalla del menú genérico
        genericMenuScreen.style.display = 'flex';
    });
}

/* --- ================================== --- */
/* --- Lógica de Volver (Concepto Depresión) --- */
/* --- ================================== --- */

// 1. Seleccionar el botón de volver de la pantalla de depresión
const btnDepresionConceptoVolver = document.getElementById('btn-depresion-concepto-volver');

// 2. Asignar el evento
if (btnDepresionConceptoVolver && depresionConceptoScreen && genericMenuScreen) {
    
    btnDepresionConceptoVolver.addEventListener('click', () => {
        
        // 1. Ocultar la pantalla de concepto de depresión
        depresionConceptoScreen.style.display = 'none';
        
        // 2. Mostrar la pantalla del menú genérico
        genericMenuScreen.style.display = 'flex';
    });
}

/* --- ================================== --- */
/* --- ¡NUEVO! Lógica de Volver (Concepto Estrés) --- */
/* --- ================================== --- */

// 1. Seleccionar el botón de volver de la pantalla de estrés
const btnEstresConceptoVolver = document.getElementById('btn-estres-concepto-volver');

// 2. Asignar el evento
if (btnEstresConceptoVolver && estresConceptoScreen && genericMenuScreen) {
    
    btnEstresConceptoVolver.addEventListener('click', () => {
        
        // 1. Ocultar la pantalla de concepto de estrés
        estresConceptoScreen.style.display = 'none';
        
        // 2. Mostrar la pantalla del menú genérico
        genericMenuScreen.style.display = 'flex';
    });
}