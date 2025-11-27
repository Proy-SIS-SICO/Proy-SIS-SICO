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
/* --- Lógica del Menú "Concepto" --- */
/* --- ================================== --- */

// 1. Seleccionar el botón "Concepto" y TODAS las pantallas de concepto
const btnConcepto = document.querySelector('.menu-btn.concepto');
const ansiedadConceptoScreen = document.getElementById('ansiedad-concepto-screen');
const depresionConceptoScreen = document.getElementById('depresion-concepto-screen');
const estresConceptoScreen = document.getElementById('estres-concepto-screen');

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
        // 4. Si el título es "ESTRÉS", mostrar la pantalla de estrés
        else if (currentTitle === 'ESTRÉS') {
            genericMenuScreen.style.display = 'none';
            estresConceptoScreen.style.display = 'flex';
        }
    });
}

/* --- ================================== --- */
/* --- Lógica del Menú "Mitos" --- */
/* --- ================================== --- */

// 1. Seleccionar el botón "Mitos" y su pantalla
const btnMitos = document.querySelector('.menu-btn.mitos');
const estresMitosScreen = document.getElementById('estres-mitos-screen');
// NUEVO: Seleccionar pantalla de mitos depresión
const depresionMitosScreen = document.getElementById('depresion-mitos-screen'); 

if (btnMitos && estresMitosScreen && depresionMitosScreen && genericMenuScreen && menuScreenTitle) {
    
    btnMitos.addEventListener('click', () => {
        
        // 1. Comprobar el título actual del menú
        const currentTitle = menuScreenTitle.textContent;
        
        // 2. Si el título es "ESTRÉS", mostrar la pantalla de mitos de estrés
        if (currentTitle === 'ESTRÉS') {
            genericMenuScreen.style.display = 'none';
            estresMitosScreen.style.display = 'flex';
        }
        // 3. NUEVO: Si el título es "DEPRESIÓN", mostrar pantalla de mitos depresión
        else if (currentTitle === 'DEPRESIÓN') {
            genericMenuScreen.style.display = 'none';
            depresionMitosScreen.style.display = 'flex';
        }
    });
}

/* --- ================================== --- */
/* --- Lógica del Menú "Síntomas" --- */
/* --- ================================== --- */

// 1. Seleccionar el botón "Síntomas" y sus pantallas
const btnSintomas = document.querySelector('.menu-btn.sintomas');
const estresSintomasScreen = document.getElementById('estres-sintomas-screen');
const ansiedadSintomasScreen = document.getElementById('ansiedad-sintomas-screen'); // <-- ¡Nuevo!

if (btnSintomas && estresSintomasScreen && ansiedadSintomasScreen && genericMenuScreen && menuScreenTitle) {
    
    btnSintomas.addEventListener('click', () => {
        
        // 1. Comprobar el título actual del menú
        const currentTitle = menuScreenTitle.textContent;
        
        // 2. Si el título es "ESTRÉS", mostrar la pantalla de síntomas de estrés
        if (currentTitle === 'ESTRÉS') {
            genericMenuScreen.style.display = 'none';
            estresSintomasScreen.style.display = 'flex';
        }
        // 3. Si el título es "ANSIEDAD", mostrar la pantalla de síntomas de ansiedad
        else if (currentTitle === 'ANSIEDAD') {
            genericMenuScreen.style.display = 'none';
            ansiedadSintomasScreen.style.display = 'flex';
        }
        // ... (Aquí podrías añadir 'else if' para síntomas de depresión)
    });
}


/* --- ================================== --- */
/* --- Lógica de Volver (Concepto Ansiedad) --- */
/* --- ================================== --- */

const btnAnsiedadConceptoVolver = document.getElementById('btn-ansiedad-concepto-volver');
if (btnAnsiedadConceptoVolver && ansiedadConceptoScreen && genericMenuScreen) {
    
    btnAnsiedadConceptoVolver.addEventListener('click', () => {
        ansiedadConceptoScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

/* --- ================================== --- */
/* --- Lógica de Volver (Concepto Depresión) --- */
/* --- ================================== --- */

const btnDepresionConceptoVolver = document.getElementById('btn-depresion-concepto-volver');
if (btnDepresionConceptoVolver && depresionConceptoScreen && genericMenuScreen) {
    
    btnDepresionConceptoVolver.addEventListener('click', () => {
        depresionConceptoScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

/* --- ================================== --- */
/* --- Lógica de Volver (Concepto Estrés) --- */
/* --- ================================== --- */

const btnEstresConceptoVolver = document.getElementById('btn-estres-concepto-volver');
if (btnEstresConceptoVolver && estresConceptoScreen && genericMenuScreen) {
    
    btnEstresConceptoVolver.addEventListener('click', () => {
        estresConceptoScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

/* --- ================================== --- */
/* --- Lógica de Volver (Mitos Estrés) --- */
/* --- ================================== --- */

const btnEstresMitosVolver = document.getElementById('btn-estres-mitos-volver');
if (btnEstresMitosVolver && estresMitosScreen && genericMenuScreen) {
    
    btnEstresMitosVolver.addEventListener('click', () => {
        estresMitosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

/* --- ================================== --- */
/* --- Lógica de Volver (Síntomas Estrés) --- */
/* --- ================================== --- */

const btnEstresSintomasVolver = document.getElementById('btn-estres-sintomas-volver');
if (btnEstresSintomasVolver && estresSintomasScreen && genericMenuScreen) {
    
    btnEstresSintomasVolver.addEventListener('click', () => {
        estresSintomasScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}


/* --- ================================== --- */
/* --- Lógica del Menú "Grados" --- */
/* --- ================================== --- */

// 1. Seleccionar el botón "Grados" y su pantalla
const btnGrados = document.querySelector('.menu-btn.grados');
const ansiedadGradosScreen = document.getElementById('ansiedad-grados-screen'); 
const estresGradosScreen = document.getElementById('estres-grados-screen'); // <-- NUEVO

if (btnGrados && ansiedadGradosScreen && estresGradosScreen && genericMenuScreen && menuScreenTitle) {
    
    btnGrados.addEventListener('click', () => {
        
        // 1. Comprobar el título actual del menú
        const currentTitle = menuScreenTitle.textContent;
        
        // 2. Si el título es "ANSIEDAD", mostrar la pantalla de grados de ansiedad
        if (currentTitle === 'ANSIEDAD') {
            genericMenuScreen.style.display = 'none';
            ansiedadGradosScreen.style.display = 'flex';
        }
        // 3. NUEVO: Si el título es "ESTRÉS", mostrar pantalla de grados de estrés
        else if (currentTitle === 'ESTRÉS') {
            genericMenuScreen.style.display = 'none';
            estresGradosScreen.style.display = 'flex';
        }
        // ... (Aquí podrías añadir 'else if' para grados de depresión)
    });
}

/* --- ================================== --- */
/* --- Lógica de Volver (Grados Ansiedad) --- */
/* --- ================================== --- */

const btnAnsiedadGradosVolver = document.getElementById('btn-ansiedad-grados-volver');
if (btnAnsiedadGradosVolver && ansiedadGradosScreen && genericMenuScreen) {
    
    btnAnsiedadGradosVolver.addEventListener('click', () => {
        ansiedadGradosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

/* --- ================================== --- */
/* --- NUEVO: Lógica de Volver (Grados Estrés) --- */
/* --- ================================== --- */

const btnEstresGradosVolver = document.getElementById('btn-estres-grados-volver');
if (btnEstresGradosVolver && estresGradosScreen && genericMenuScreen) {
    
    btnEstresGradosVolver.addEventListener('click', () => {
        estresGradosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}


/* --- ================================== --- */
/* --- ¡NUEVO! Lógica de Volver (Síntomas Ansiedad) --- */
/* --- ================================== --- */

const btnAnsiedadSintomasVolver = document.getElementById('btn-ansiedad-sintomas-volver');
if (btnAnsiedadSintomasVolver && ansiedadSintomasScreen && genericMenuScreen) {
    
    btnAnsiedadSintomasVolver.addEventListener('click', () => {
        ansiedadSintomasScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

/* --- ================================== --- */
/* --- NUEVO: Lógica de Volver (Mitos Depresión) --- */
/* --- ================================== --- */

const btnDepresionMitosVolver = document.getElementById('btn-depresion-mitos-volver');
if (btnDepresionMitosVolver && depresionMitosScreen && genericMenuScreen) {
    
    btnDepresionMitosVolver.addEventListener('click', () => {
        depresionMitosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}