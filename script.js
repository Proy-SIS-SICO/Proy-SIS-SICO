/* --- ================================== --- */
/* ---  1. Lógica de la pantalla de inicio --- */
/* --- ================================== --- */

const btnComenzar = document.getElementById('btn-comenzar');
const inicioScreen = document.getElementById('inicio-screen');
const categoriasScreen = document.getElementById('categorias-screen');
const btnSaludMentalPortada = document.getElementById('btn-salud-mental-portada');
const saludMentalScreen = document.getElementById('salud-mental-screen');

// Botón COMENZAR
if (btnComenzar && inicioScreen && categoriasScreen) {
    btnComenzar.addEventListener('click', () => {
        inicioScreen.style.display = 'none';
        categoriasScreen.style.display = 'flex';
    });
}

// Botón Título "SALUD MENTAL" (Portada)
if (btnSaludMentalPortada && saludMentalScreen && inicioScreen) {
    btnSaludMentalPortada.addEventListener('click', () => {
        inicioScreen.style.display = 'none';
        saludMentalScreen.style.display = 'flex';
    });
}

// Volver de "Salud Mental" a Portada
const btnSaludVolver = document.getElementById('btn-salud-volver');
if (btnSaludVolver && saludMentalScreen && inicioScreen) {
    btnSaludVolver.addEventListener('click', () => {
        saludMentalScreen.style.display = 'none';
        inicioScreen.style.display = 'flex';
    });
}

/* --- ============================================== --- */
/* ---  1.1 LOGICA CONTACTO SOF (PORTADA)             --- */
/* --- ============================================== --- */

const btnOpenContacto = document.getElementById('btn-open-contacto');
const btnCloseContacto = document.getElementById('btn-close-contacto');
const modalContacto = document.getElementById('modal-contacto');

if (btnOpenContacto && modalContacto && btnCloseContacto) {
    // Abrir Modal
    btnOpenContacto.addEventListener('click', () => {
        modalContacto.style.display = 'flex';
    });

    // Cerrar Modal con la X
    btnCloseContacto.addEventListener('click', () => {
        modalContacto.style.display = 'none';
    });

    // Cerrar Modal haciendo clic fuera de la caja blanca (en el fondo oscuro)
    modalContacto.addEventListener('click', (e) => {
        if (e.target === modalContacto) {
            modalContacto.style.display = 'none';
        }
    });
}


/* --- ================================== --- */
/* ---  2. Lógica del Menú de Categorías  --- */
/* --- ================================== --- */

const allCategoryButtons = document.querySelectorAll('.categoria-btn');
const genericMenuScreen = document.getElementById('generic-menu-screen');
const menuScreenTitle = document.getElementById('menu-screen-title');

// Click en una categoría (Estrés, Ansiedad, Depresión)
if (allCategoryButtons.length > 0 && genericMenuScreen && menuScreenTitle && categoriasScreen) {
    allCategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Obtener nombre (ej: "Estrés")
            const categoryName = button.querySelector('span').textContent;
            
            // 2. Actualizar título del menú genérico
            menuScreenTitle.textContent = categoryName.toUpperCase();

            // 3. CAMBIO DE CLASE PARA EL COLOR
            // Primero limpiamos las clases de temas anteriores
            genericMenuScreen.classList.remove('tema-ansiedad', 'tema-depresion', 'tema-estres');

            // Agregamos la clase según la categoría seleccionada
            if (categoryName.toLowerCase() === 'ansiedad') {
                genericMenuScreen.classList.add('tema-ansiedad');
            } else if (categoryName.toLowerCase() === 'depresión' || categoryName.toLowerCase() === 'depresion') {
                genericMenuScreen.classList.add('tema-depresion');
            } else {
                genericMenuScreen.classList.add('tema-estres'); // Por defecto (Estrés usa azules)
            }
            
            // 4. Cambiar pantallas
            categoriasScreen.style.display = 'none';
            genericMenuScreen.style.display = 'flex';
        });
    });
}

// Volver del Menú Genérico a Categorías
const btnMenuVolver = document.getElementById('btn-menu-volver');
if (btnMenuVolver && genericMenuScreen && categoriasScreen) {
    btnMenuVolver.addEventListener('click', () => {
        genericMenuScreen.style.display = 'none';
        categoriasScreen.style.display = 'flex';
    });
}

// Volver de Categorías a Inicio
const btnCategoriasVolver = document.getElementById('btn-categorias-volver');
if (btnCategoriasVolver && categoriasScreen && inicioScreen) {
    btnCategoriasVolver.addEventListener('click', () => {
        categoriasScreen.style.display = 'none';
        inicioScreen.style.display = 'flex';
    });
}


/* --- ============================================== --- */
/* ---  3. Enrutador del Menú Genérico (Navegación)   --- */
/* --- ============================================== --- */

// --- BOTÓN CONCEPTO ---
const btnConcepto = document.querySelector('.menu-btn.concepto');
const ansiedadConceptoScreen = document.getElementById('ansiedad-concepto-screen');
const depresionConceptoScreen = document.getElementById('depresion-concepto-screen');
const estresConceptoScreen = document.getElementById('estres-concepto-screen');

if (btnConcepto) {
    btnConcepto.addEventListener('click', () => {
        const currentTitle = menuScreenTitle.textContent;
        genericMenuScreen.style.display = 'none';

        if (currentTitle === 'ANSIEDAD') ansiedadConceptoScreen.style.display = 'flex';
        else if (currentTitle === 'DEPRESIÓN') depresionConceptoScreen.style.display = 'flex';
        else if (currentTitle === 'ESTRÉS') estresConceptoScreen.style.display = 'flex';
    });
}

// --- BOTÓN GRADOS ---
const btnGrados = document.querySelector('.menu-btn.grados');
const ansiedadGradosScreen = document.getElementById('ansiedad-grados-screen'); 
const estresGradosScreen = document.getElementById('estres-grados-screen'); 
const depresionGradosScreen = document.getElementById('depresion-grados-screen'); 

if (btnGrados) {
    btnGrados.addEventListener('click', () => {
        const currentTitle = menuScreenTitle.textContent;
        genericMenuScreen.style.display = 'none';

        if (currentTitle === 'ANSIEDAD') ansiedadGradosScreen.style.display = 'flex';
        else if (currentTitle === 'ESTRÉS') estresGradosScreen.style.display = 'flex';
        else if (currentTitle === 'DEPRESIÓN') depresionGradosScreen.style.display = 'flex';
    });
}

// --- BOTÓN SÍNTOMAS ---
const btnSintomas = document.querySelector('.menu-btn.sintomas');
const estresSintomasScreen = document.getElementById('estres-sintomas-screen');
const ansiedadSintomasScreen = document.getElementById('ansiedad-sintomas-screen'); 
const depresionSintomasScreen = document.getElementById('depresion-sintomas-screen');

if (btnSintomas) {
    btnSintomas.addEventListener('click', () => {
        const currentTitle = menuScreenTitle.textContent;
        genericMenuScreen.style.display = 'none';

        if (currentTitle === 'ESTRÉS') estresSintomasScreen.style.display = 'flex';
        else if (currentTitle === 'ANSIEDAD') ansiedadSintomasScreen.style.display = 'flex';
        else if (currentTitle === 'DEPRESIÓN') depresionSintomasScreen.style.display = 'flex';
    });
}

// --- BOTÓN MITOS ---
const btnMitos = document.querySelector('.menu-btn.mitos');
const estresMitosScreen = document.getElementById('estres-mitos-screen');
const depresionMitosScreen = document.getElementById('depresion-mitos-screen'); 
const ansiedadMitosScreen = document.getElementById('ansiedad-mitos-screen');

if (btnMitos) {
    btnMitos.addEventListener('click', () => {
        const currentTitle = menuScreenTitle.textContent;
        genericMenuScreen.style.display = 'none';

        if (currentTitle === 'ESTRÉS') estresMitosScreen.style.display = 'flex';
        else if (currentTitle === 'DEPRESIÓN') depresionMitosScreen.style.display = 'flex';
        else if (currentTitle === 'ANSIEDAD') ansiedadMitosScreen.style.display = 'flex';
    });
}

// --- BOTÓN RECURSOS ---
const btnRecursos = document.querySelector('.menu-btn.recursos');
const estresRecursosScreen = document.getElementById('estres-recursos-screen');
const depresionRecursosScreen = document.getElementById('depresion-recursos-screen');
const ansiedadRecursosScreen = document.getElementById('ansiedad-recursos-screen'); 

if (btnRecursos) {
    btnRecursos.addEventListener('click', () => {
        const currentTitle = menuScreenTitle.textContent;
        genericMenuScreen.style.display = 'none';

        if (currentTitle === 'ESTRÉS') estresRecursosScreen.style.display = 'flex';
        else if (currentTitle === 'DEPRESIÓN') depresionRecursosScreen.style.display = 'flex';
        else if (currentTitle === 'ANSIEDAD') ansiedadRecursosScreen.style.display = 'flex';
    });
}

// --- BOTÓN INSTRUMENTO (Selección de Test) ---
const btnInstrumento = document.querySelector('.menu-btn.instrumento');
const estresInstrumentoScreen = document.getElementById('estres-instrumento-screen');
const ansiedadInstrumentoScreen = document.getElementById('ansiedad-instrumento-screen');
const depresionInstrumentoScreen = document.getElementById('depresion-instrumento-screen');

if (btnInstrumento) {
    btnInstrumento.addEventListener('click', () => {
        const currentTitle = menuScreenTitle.textContent;
        genericMenuScreen.style.display = 'none';

        // --- FUNCIÓN SOLUCIÓN: REINICIAR SCROLL AL ABRIR ---
        const resetScroll = (screenElement) => {
            // 1. Reinicia el scroll de la ventana
            window.scrollTo(0, 0);
            
            // 2. Reinicia el scroll del contenedor principal de la pantalla
            screenElement.scrollTop = 0;
            
            // 3. Reinicia el scroll de la caja interna (donde están las preguntas)
            const internalContent = screenElement.querySelector('.content-padding');
            if (internalContent) {
                internalContent.scrollTop = 0;
            }
        };

        // TEST ESTRÉS
        if (currentTitle === 'ESTRÉS') {
            estresInstrumentoScreen.style.display = 'flex';
            resetScroll(estresInstrumentoScreen); 
        } 
        // TEST ANSIEDAD
        else if (currentTitle === 'ANSIEDAD') {
            ansiedadInstrumentoScreen.style.display = 'flex';
            resetScroll(ansiedadInstrumentoScreen);
        }
        // TEST DEPRESIÓN
        else if (currentTitle === 'DEPRESIÓN') {
            depresionInstrumentoScreen.style.display = 'flex';
            resetScroll(depresionInstrumentoScreen);
        }
    });
}


/* --- ============================================== --- */
/* ---  4. Lógica de "VOLVER" en pantallas de contenido --- */
/* --- ============================================== --- */

// Función auxiliar para asignar botón volver
function assignBackBtn(btnId, screenElem) {
    const btn = document.getElementById(btnId);
    if (btn && screenElem) {
        btn.addEventListener('click', () => {
            screenElem.style.display = 'none';
            genericMenuScreen.style.display = 'flex';
        });
    }
}

// Asignaciones Concepto
assignBackBtn('btn-ansiedad-concepto-volver', ansiedadConceptoScreen);
assignBackBtn('btn-depresion-concepto-volver', depresionConceptoScreen);
assignBackBtn('btn-estres-concepto-volver', estresConceptoScreen);

// Asignaciones Grados
assignBackBtn('btn-ansiedad-grados-volver', ansiedadGradosScreen);
assignBackBtn('btn-estres-grados-volver', estresGradosScreen);
assignBackBtn('btn-depresion-grados-volver', depresionGradosScreen);

// Asignaciones Síntomas
assignBackBtn('btn-estres-sintomas-volver', estresSintomasScreen);
assignBackBtn('btn-ansiedad-sintomas-volver', ansiedadSintomasScreen);
assignBackBtn('btn-depresion-sintomas-volver', depresionSintomasScreen);

// Asignaciones Mitos
assignBackBtn('btn-estres-mitos-volver', estresMitosScreen);
assignBackBtn('btn-depresion-mitos-volver', depresionMitosScreen);
assignBackBtn('btn-ansiedad-mitos-volver', ansiedadMitosScreen);

// Asignaciones Recursos
assignBackBtn('btn-estres-recursos-volver', estresRecursosScreen);
assignBackBtn('btn-depresion-recursos-volver', depresionRecursosScreen);
assignBackBtn('btn-ansiedad-recursos-volver', ansiedadRecursosScreen);

// Asignaciones Instrumentos (Volver al menú genérico)
assignBackBtn('btn-estres-instrumento-volver', estresInstrumentoScreen);
assignBackBtn('btn-ansiedad-instrumento-volver', ansiedadInstrumentoScreen);
assignBackBtn('btn-depresion-instrumento-volver', depresionInstrumentoScreen);


/* --- ============================================== --- */
/* ---  5. INSTRUMENTO DE ESTRÉS (PSS-14)             --- */
/* --- ============================================== --- */

const btnCalcularEstres = document.getElementById('btn-calcular-estres');
const btnReiniciarEstres = document.getElementById('btn-reiniciar-estres');
const resultContainerEstres = document.getElementById('result-container'); // Ojo: en HTML es result-container a secas
const scoreDisplayEstres = document.getElementById('score-display');
const levelDisplayEstres = document.getElementById('level-display');

if (btnCalcularEstres) {
    btnCalcularEstres.addEventListener('click', () => {
        let totalScore = 0;
        let allAnswered = true;
        
        const normalItems = [1, 2, 3, 8, 11, 12, 14];
        const reverseItems = [4, 5, 6, 7, 9, 10, 13];

        // Suma Normal
        normalItems.forEach(num => {
            const radios = document.getElementsByName('p' + num);
            let val = -1;
            for (const radio of radios) {
                if (radio.checked) val = parseInt(radio.value);
            }
            if (val === -1) allAnswered = false;
            else totalScore += val;
        });

        // Suma Inversa (0=4, 4=0)
        reverseItems.forEach(num => {
            const radios = document.getElementsByName('p' + num);
            let val = -1;
            for (const radio of radios) {
                if (radio.checked) val = parseInt(radio.value);
            }
            if (val === -1) allAnswered = false;
            else totalScore += (4 - val);
        });

        if (!allAnswered) {
            alert("Por favor, responde todas las preguntas para obtener un resultado preciso.");
            return;
        }

        let nivel = "";
        let color = "#6b4632";

        if (totalScore <= 13) {
            nivel = "NIVEL BAJO";
            color = "#4CAF50"; 
        } else if (totalScore <= 26) {
            nivel = "NIVEL MEDIO";
            color = "#FFC107"; 
        } else if (totalScore <= 40) {
            nivel = "NIVEL ALTO";
            color = "#FF9800"; 
        } else {
            nivel = "NIVEL MUY ALTO";
            color = "#F44336"; 
        }

        scoreDisplayEstres.textContent = "Puntuación total: " + totalScore + " puntos";
        levelDisplayEstres.textContent = nivel;
        levelDisplayEstres.style.color = color;
        resultContainerEstres.style.display = 'block';
        resultContainerEstres.scrollIntoView({ behavior: 'smooth' });
    });
}

if (btnReiniciarEstres) {
    btnReiniciarEstres.addEventListener('click', () => {
        document.getElementById('form-estres').reset();
        resultContainerEstres.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        estresInstrumentoScreen.scrollTop = 0;
    });
}


/* --- ============================================== --- */
/* ---  6. INSTRUMENTO DE ANSIEDAD (BECK BAI)         --- */
/* --- ============================================== --- */

const btnCalcularAnsiedad = document.getElementById('btn-calcular-ansiedad');
const btnReiniciarAnsiedad = document.getElementById('btn-reiniciar-ansiedad');
const resultContainerAnsiedad = document.getElementById('result-container-ansiedad');
const scoreDisplayAnsiedad = document.getElementById('score-display-ansiedad');
const levelDisplayAnsiedad = document.getElementById('level-display-ansiedad');

if (btnCalcularAnsiedad) {
    btnCalcularAnsiedad.addEventListener('click', () => {
        let totalScore = 0;
        let allAnswered = true;
        
        // Suma simple de 21 items
        for (let i = 1; i <= 21; i++) {
            const radios = document.getElementsByName('bai' + i);
            let val = -1;
            for (const radio of radios) {
                if (radio.checked) val = parseInt(radio.value);
            }
            if (val === -1) {
                allAnswered = false;
                break;
            } else {
                totalScore += val;
            }
        }

        if (!allAnswered) {
            alert("Por favor, responde todas las preguntas para obtener un resultado preciso.");
            return;
        }

        let nivel = "";
        let color = "#6b4632";

        if (totalScore <= 7) {
            nivel = "NO PRESENTA ANSIEDAD";
            color = "#4CAF50"; 
        } else if (totalScore <= 18) {
            nivel = "ANSIEDAD LEVE";
            color = "#FFEB3B"; 
            levelDisplayAnsiedad.style.textShadow = "1px 1px 1px #555"; 
        } else if (totalScore <= 29) {
            nivel = "ANSIEDAD MODERADA";
            color = "#FF9800"; 
        } else {
            nivel = "ANSIEDAD GRAVE";
            color = "#F44336"; 
        }

        scoreDisplayAnsiedad.textContent = "Puntuación total: " + totalScore + " puntos";
        levelDisplayAnsiedad.textContent = nivel;
        levelDisplayAnsiedad.style.color = color;
        resultContainerAnsiedad.style.display = 'block';
        resultContainerAnsiedad.scrollIntoView({ behavior: 'smooth' });
    });
}

if (btnReiniciarAnsiedad) {
    btnReiniciarAnsiedad.addEventListener('click', () => {
        document.getElementById('form-ansiedad').reset();
        resultContainerAnsiedad.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        ansiedadInstrumentoScreen.scrollTop = 0;
    });
}


/* --- ============================================== --- */
/* ---  7. INSTRUMENTO DE DEPRESIÓN (BDI-II)          --- */
/* --- ============================================== --- */

const btnCalcularDepresion = document.getElementById('btn-calcular-depresion');
const btnReiniciarDepresion = document.getElementById('btn-reiniciar-depresion');
const resultContainerDepresion = document.getElementById('result-container-depresion');
const scoreDisplayDepresion = document.getElementById('score-display-depresion');
const levelDisplayDepresion = document.getElementById('level-display-depresion');

if (btnCalcularDepresion) {
    btnCalcularDepresion.addEventListener('click', () => {
        let totalScore = 0;
        let allAnswered = true;
        
        // El BDI-II tiene 21 items, suma simple
        for (let i = 1; i <= 21; i++) {
            const radios = document.getElementsByName('bdi' + i);
            let val = -1;
            for (const radio of radios) {
                if (radio.checked) val = parseInt(radio.value);
            }
            if (val === -1) {
                allAnswered = false;
                break;
            } else {
                totalScore += val;
            }
        }

        if (!allAnswered) {
            alert("Por favor, selecciona una opción en cada grupo para obtener un resultado.");
            return;
        }

        let nivel = "";
        let color = "#6b4632";

        if (totalScore <= 10) {
            nivel = "DEPRESIÓN MÍNIMA"; 
            color = "#4CAF50"; 
        } else if (totalScore <= 17) {
            nivel = "DEPRESIÓN LEVE O MEDIA"; 
            color = "#FFEB3B"; 
            levelDisplayDepresion.style.textShadow = "1px 1px 1px #555";
        } else if (totalScore <= 29) {
            nivel = "DEPRESIÓN MODERADA"; 
            color = "#FF9800"; 
        } else {
            nivel = "DEPRESIÓN SEVERA"; 
            color = "#F44336"; 
        }

        scoreDisplayDepresion.textContent = "Puntuación total: " + totalScore + " puntos";
        levelDisplayDepresion.textContent = nivel;
        levelDisplayDepresion.style.color = color;
        
        resultContainerDepresion.style.display = 'block';
        resultContainerDepresion.scrollIntoView({ behavior: 'smooth' });
    });
}

if (btnReiniciarDepresion) {
    btnReiniciarDepresion.addEventListener('click', () => {
        document.getElementById('form-depresion').reset();
        resultContainerDepresion.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Reiniciamos también el scroll del contenedor específico
        depresionInstrumentoScreen.scrollTop = 0;
        // Y el interno (por si acaso)
        const internal = depresionInstrumentoScreen.querySelector('.content-padding');
        if (internal) internal.scrollTop = 0;
    });
}