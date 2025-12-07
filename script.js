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

// 2. Asignar evento al botón "Volver"
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

// 1. Seleccionar el botón "Mitos" y sus pantallas
const btnMitos = document.querySelector('.menu-btn.mitos');
const estresMitosScreen = document.getElementById('estres-mitos-screen');
const depresionMitosScreen = document.getElementById('depresion-mitos-screen'); 
const ansiedadMitosScreen = document.getElementById('ansiedad-mitos-screen');

if (btnMitos && estresMitosScreen && depresionMitosScreen && ansiedadMitosScreen && genericMenuScreen && menuScreenTitle) {
    
    btnMitos.addEventListener('click', () => {
        
        // 1. Comprobar el título actual del menú
        const currentTitle = menuScreenTitle.textContent;
        
        // 2. Si el título es "ESTRÉS", mostrar la pantalla de mitos de estrés
        if (currentTitle === 'ESTRÉS') {
            genericMenuScreen.style.display = 'none';
            estresMitosScreen.style.display = 'flex';
        }
        // 3. Si el título es "DEPRESIÓN", mostrar pantalla de mitos depresión
        else if (currentTitle === 'DEPRESIÓN') {
            genericMenuScreen.style.display = 'none';
            depresionMitosScreen.style.display = 'flex';
        }
        // 4. Si el título es "ANSIEDAD", mostrar pantalla de mitos ansiedad
        else if (currentTitle === 'ANSIEDAD') {
            genericMenuScreen.style.display = 'none';
            ansiedadMitosScreen.style.display = 'flex';
        }
    });
}

/* --- ================================== --- */
/* --- Lógica del Menú "Síntomas" --- */
/* --- ================================== --- */

// 1. Seleccionar el botón "Síntomas" y sus pantallas
const btnSintomas = document.querySelector('.menu-btn.sintomas');
const estresSintomasScreen = document.getElementById('estres-sintomas-screen');
const ansiedadSintomasScreen = document.getElementById('ansiedad-sintomas-screen'); 
const depresionSintomasScreen = document.getElementById('depresion-sintomas-screen');

if (btnSintomas && estresSintomasScreen && ansiedadSintomasScreen && depresionSintomasScreen && genericMenuScreen && menuScreenTitle) {
    
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
        // 4. Si el título es "DEPRESIÓN", mostrar la pantalla de síntomas de depresión
        else if (currentTitle === 'DEPRESIÓN') {
            genericMenuScreen.style.display = 'none';
            depresionSintomasScreen.style.display = 'flex';
        }
    });
}


/* --- ================================== --- */
/* --- Lógica de Volver (Pantallas Específicas) --- */
/* --- ================================== --- */

// --- Concepto ---
const btnAnsiedadConceptoVolver = document.getElementById('btn-ansiedad-concepto-volver');
if (btnAnsiedadConceptoVolver && ansiedadConceptoScreen && genericMenuScreen) {
    btnAnsiedadConceptoVolver.addEventListener('click', () => {
        ansiedadConceptoScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

const btnDepresionConceptoVolver = document.getElementById('btn-depresion-concepto-volver');
if (btnDepresionConceptoVolver && depresionConceptoScreen && genericMenuScreen) {
    btnDepresionConceptoVolver.addEventListener('click', () => {
        depresionConceptoScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

const btnEstresConceptoVolver = document.getElementById('btn-estres-concepto-volver');
if (btnEstresConceptoVolver && estresConceptoScreen && genericMenuScreen) {
    btnEstresConceptoVolver.addEventListener('click', () => {
        estresConceptoScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

// --- Mitos ---
const btnEstresMitosVolver = document.getElementById('btn-estres-mitos-volver');
if (btnEstresMitosVolver && estresMitosScreen && genericMenuScreen) {
    btnEstresMitosVolver.addEventListener('click', () => {
        estresMitosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}
const btnDepresionMitosVolver = document.getElementById('btn-depresion-mitos-volver');
if (btnDepresionMitosVolver && depresionMitosScreen && genericMenuScreen) {
    btnDepresionMitosVolver.addEventListener('click', () => {
        depresionMitosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}
const btnAnsiedadMitosVolver = document.getElementById('btn-ansiedad-mitos-volver');
if (btnAnsiedadMitosVolver && ansiedadMitosScreen && genericMenuScreen) {
    btnAnsiedadMitosVolver.addEventListener('click', () => {
        ansiedadMitosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

// --- Síntomas ---
const btnEstresSintomasVolver = document.getElementById('btn-estres-sintomas-volver');
if (btnEstresSintomasVolver && estresSintomasScreen && genericMenuScreen) {
    btnEstresSintomasVolver.addEventListener('click', () => {
        estresSintomasScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}
const btnAnsiedadSintomasVolver = document.getElementById('btn-ansiedad-sintomas-volver');
if (btnAnsiedadSintomasVolver && ansiedadSintomasScreen && genericMenuScreen) {
    btnAnsiedadSintomasVolver.addEventListener('click', () => {
        ansiedadSintomasScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}
const btnDepresionSintomasVolver = document.getElementById('btn-depresion-sintomas-volver');
if (btnDepresionSintomasVolver && depresionSintomasScreen && genericMenuScreen) {
    btnDepresionSintomasVolver.addEventListener('click', () => {
        depresionSintomasScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}


/* --- ================================== --- */
/* --- Lógica del Menú "Grados" --- */
/* --- ================================== --- */

// 1. Seleccionar el botón "Grados" y su pantalla
const btnGrados = document.querySelector('.menu-btn.grados');
const ansiedadGradosScreen = document.getElementById('ansiedad-grados-screen'); 
const estresGradosScreen = document.getElementById('estres-grados-screen'); 
const depresionGradosScreen = document.getElementById('depresion-grados-screen'); // NUEVO

if (btnGrados && ansiedadGradosScreen && estresGradosScreen && depresionGradosScreen && genericMenuScreen && menuScreenTitle) {
    
    btnGrados.addEventListener('click', () => {
        
        // 1. Comprobar el título actual del menú
        const currentTitle = menuScreenTitle.textContent;
        
        // 2. Si el título es "ANSIEDAD", mostrar la pantalla de grados de ansiedad
        if (currentTitle === 'ANSIEDAD') {
            genericMenuScreen.style.display = 'none';
            ansiedadGradosScreen.style.display = 'flex';
        }
        // 3. Si el título es "ESTRÉS", mostrar pantalla de grados de estrés
        else if (currentTitle === 'ESTRÉS') {
            genericMenuScreen.style.display = 'none';
            estresGradosScreen.style.display = 'flex';
        }
        // 4. NUEVO: Si el título es "DEPRESIÓN"
        else if (currentTitle === 'DEPRESIÓN') {
            genericMenuScreen.style.display = 'none';
            depresionGradosScreen.style.display = 'flex';
        }
    });
}

// --- Volver Grados ---
const btnAnsiedadGradosVolver = document.getElementById('btn-ansiedad-grados-volver');
if (btnAnsiedadGradosVolver && ansiedadGradosScreen && genericMenuScreen) {
    btnAnsiedadGradosVolver.addEventListener('click', () => {
        ansiedadGradosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}
const btnEstresGradosVolver = document.getElementById('btn-estres-grados-volver');
if (btnEstresGradosVolver && estresGradosScreen && genericMenuScreen) {
    btnEstresGradosVolver.addEventListener('click', () => {
        estresGradosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}
// --- NUEVO: Volver Grados Depresión ---
const btnDepresionGradosVolver = document.getElementById('btn-depresion-grados-volver');
if (btnDepresionGradosVolver && depresionGradosScreen && genericMenuScreen) {
    btnDepresionGradosVolver.addEventListener('click', () => {
        depresionGradosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}


/* --- ================================== --- */
/* --- Lógica del Menú "Recursos" --- */
/* --- ================================== --- */

// 1. Seleccionar el botón "Recursos" y las pantallas
const btnRecursos = document.querySelector('.menu-btn.recursos');
const estresRecursosScreen = document.getElementById('estres-recursos-screen');
const depresionRecursosScreen = document.getElementById('depresion-recursos-screen');
const ansiedadRecursosScreen = document.getElementById('ansiedad-recursos-screen'); // NUEVO

if (btnRecursos && estresRecursosScreen && depresionRecursosScreen && ansiedadRecursosScreen && genericMenuScreen && menuScreenTitle) {
    
    btnRecursos.addEventListener('click', () => {
        
        // 1. Comprobar el título actual del menú
        const currentTitle = menuScreenTitle.textContent;
        
        // 2. Si el título es "ESTRÉS", mostrar recursos de estrés
        if (currentTitle === 'ESTRÉS') {
            genericMenuScreen.style.display = 'none';
            estresRecursosScreen.style.display = 'flex';
        }
        // 3. Si el título es "DEPRESIÓN", mostrar recursos de depresión
        else if (currentTitle === 'DEPRESIÓN') {
            genericMenuScreen.style.display = 'none';
            depresionRecursosScreen.style.display = 'flex';
        }
        // 4. NUEVO: Si el título es "ANSIEDAD", mostrar recursos de ansiedad
        else if (currentTitle === 'ANSIEDAD') {
            genericMenuScreen.style.display = 'none';
            ansiedadRecursosScreen.style.display = 'flex';
        }
    });
}

/* --- Lógica de Volver (Recursos Estrés) --- */
const btnEstresRecursosVolver = document.getElementById('btn-estres-recursos-volver');
if (btnEstresRecursosVolver && estresRecursosScreen && genericMenuScreen) {
    btnEstresRecursosVolver.addEventListener('click', () => {
        estresRecursosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

/* --- Lógica de Volver (Recursos Depresión) --- */
const btnDepresionRecursosVolver = document.getElementById('btn-depresion-recursos-volver');
if (btnDepresionRecursosVolver && depresionRecursosScreen && genericMenuScreen) {
    btnDepresionRecursosVolver.addEventListener('click', () => {
        depresionRecursosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}

/* --- NUEVO: Lógica de Volver (Recursos Ansiedad) --- */
const btnAnsiedadRecursosVolver = document.getElementById('btn-ansiedad-recursos-volver');
if (btnAnsiedadRecursosVolver && ansiedadRecursosScreen && genericMenuScreen) {
    btnAnsiedadRecursosVolver.addEventListener('click', () => {
        ansiedadRecursosScreen.style.display = 'none';
        genericMenuScreen.style.display = 'flex';
    });
}