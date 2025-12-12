/* 1. Lógica de la pantalla de inicio*/
/* Este bloque se encarga de las interacciones principales en la portada (pantalla de inicio). 
   Maneja la navegación hacia el menú de categorías y hacia la pantalla específica de introducción a la salud mental. */

// Selecciona el botón "COMENZAR" del DOM mediante su ID para poder asignarle eventos.
const btnComenzar = document.getElementById('btn-comenzar');
// Selecciona el contenedor de la pantalla de inicio para poder mostrarlo u ocultarlo.
const inicioScreen = document.getElementById('inicio-screen');
// Selecciona el contenedor de la pantalla de categorías para mostrarlo cuando se haga clic en comenzar.
const categoriasScreen = document.getElementById('categorias-screen');
// Selecciona el título interactivo "SALUD MENTAL" en la portada.
const btnSaludMentalPortada = document.getElementById('btn-salud-mental-portada');
// Selecciona la pantalla de contenido informativo sobre Salud Mental.
const saludMentalScreen = document.getElementById('salud-mental-screen');

// Evento para el botón COMENZAR
if (btnComenzar && inicioScreen && categoriasScreen) {
    btnComenzar.addEventListener('click', () => {
        // Oculta la pantalla de inicio estableciendo su estilo display a 'none'.
        inicioScreen.style.display = 'none';
        // Muestra la pantalla de categorías estableciendo su estilo display a 'flex'.
        categoriasScreen.style.display = 'flex';
    });
}

// Evento para el título "SALUD MENTAL" en la portada
if (btnSaludMentalPortada && saludMentalScreen && inicioScreen) {
    btnSaludMentalPortada.addEventListener('click', () => {
        // Oculta la pantalla de inicio actual.
        inicioScreen.style.display = 'none';
        // Muestra directamente la pantalla de información sobre Salud Mental.
        saludMentalScreen.style.display = 'flex';
    });
}

// Lógica para el botón "VOLVER" dentro de la pantalla de Salud Mental
const btnSaludVolver = document.getElementById('btn-salud-volver');
if (btnSaludVolver && saludMentalScreen && inicioScreen) {
    btnSaludVolver.addEventListener('click', () => {
        // Oculta la pantalla de Salud Mental.
        saludMentalScreen.style.display = 'none';
        // Vuelve a mostrar la pantalla de inicio (portada).
        inicioScreen.style.display = 'flex';
    });
}

/* 1.1 LOGICA CONTACTO SOF (PORTADA)*/
/* Este bloque controla la ventana modal (ventana emergente) de contacto en la portada.
   Permite abrir el modal, cerrarlo con un botón específico o haciendo clic fuera del contenido. */

// Selecciona el botón flotante que abre el contacto.
const btnOpenContacto = document.getElementById('btn-open-contacto');
// Selecciona el botón (la "X") para cerrar el modal.
const btnCloseContacto = document.getElementById('btn-close-contacto');
// Selecciona el contenedor principal del modal (el fondo oscuro).
const modalContacto = document.getElementById('modal-contacto');

// Verifica que los elementos existan antes de agregar eventos para evitar errores.
if (btnOpenContacto && modalContacto && btnCloseContacto) {
    
    // Evento para abrir el Modal
    btnOpenContacto.addEventListener('click', () => {
        // Cambia el display a 'flex' para hacer visible el modal y centrar su contenido.
        modalContacto.style.display = 'flex';
    });

    // Evento para cerrar el Modal usando la "X"
    btnCloseContacto.addEventListener('click', () => {
        // Cambia el display a 'none' para ocultar el modal.
        modalContacto.style.display = 'none';
    });

    // Evento para cerrar el Modal haciendo clic fuera de la caja blanca (en el fondo oscuro)
    modalContacto.addEventListener('click', (e) => {
        // Comprueba si el elemento clickeado es el fondo oscuro (modalContacto) y no su contenido interno.
        if (e.target === modalContacto) {
            // Si es el fondo, oculta el modal.
            modalContacto.style.display = 'none';
        }
    });
}


/* 2. Lógica del Menú de Categorías*/
/* Este bloque gestiona la selección de una categoría principal (Estrés, Ansiedad, Depresión).
   Configura el menú genérico con el título correcto y aplica el tema de color correspondiente (CSS). */

// Selecciona todos los botones de categoría (los rectángulos grandes) usando su clase común.
const allCategoryButtons = document.querySelectorAll('.categoria-btn');
// Selecciona la pantalla de menú genérico que se reutiliza para las tres categorías.
const genericMenuScreen = document.getElementById('generic-menu-screen');
// Selecciona el elemento H1 dentro del menú genérico para cambiarle el texto dinámicamente.
const menuScreenTitle = document.getElementById('menu-screen-title');

// Si existen botones y las pantallas necesarias, asigna la lógica.
if (allCategoryButtons.length > 0 && genericMenuScreen && menuScreenTitle && categoriasScreen) {
    // Itera sobre cada botón de categoría encontrado.
    allCategoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Obtiene el texto dentro del span del botón clickeado (ej: "Estrés", "Ansiedad").
            const categoryName = button.querySelector('span').textContent;
            
            // 2. Actualiza el título del menú genérico convirtiendo el texto a mayúsculas.
            menuScreenTitle.textContent = categoryName.toUpperCase();

            // 3. CAMBIO DE CLASE PARA EL COLOR (TEMAS CSS)
            // Primero, elimina cualquier clase de tema que pudiera haber quedado activa anteriormente.
            genericMenuScreen.classList.remove('tema-ansiedad', 'tema-depresion', 'tema-estres');

            // Verifica qué categoría se seleccionó para agregar la clase CSS correcta.
            if (categoryName.toLowerCase() === 'ansiedad') {
                // Si es Ansiedad, agrega la clase para el tema naranja.
                genericMenuScreen.classList.add('tema-ansiedad');
            } else if (categoryName.toLowerCase() === 'depresión' || categoryName.toLowerCase() === 'depresion') {
                // Si es Depresión, agrega la clase para el tema morado.
                genericMenuScreen.classList.add('tema-depresion');
            } else {
                // Si no es ninguno de los anteriores (es Estrés), agrega la clase por defecto (tema azul).
                genericMenuScreen.classList.add('tema-estres'); 
            }
            
            // 4. Cambiar pantallas
            // Oculta la pantalla de selección de categorías.
            categoriasScreen.style.display = 'none';
            // Muestra la pantalla del menú genérico configurada.
            genericMenuScreen.style.display = 'flex';
        });
    });
}

// Lógica para el botón "VOLVER" dentro del Menú Genérico
const btnMenuVolver = document.getElementById('btn-menu-volver');
if (btnMenuVolver && genericMenuScreen && categoriasScreen) {
    btnMenuVolver.addEventListener('click', () => {
        // Oculta el menú genérico.
        genericMenuScreen.style.display = 'none';
        // Vuelve a mostrar la selección de categorías.
        categoriasScreen.style.display = 'flex';
    });
}

// Lógica para el botón "VOLVER" dentro de la pantalla de Categorías
const btnCategoriasVolver = document.getElementById('btn-categorias-volver');
if (btnCategoriasVolver && categoriasScreen && inicioScreen) {
    btnCategoriasVolver.addEventListener('click', () => {
        // Oculta la pantalla de categorías.
        categoriasScreen.style.display = 'none';
        // Regresa a la portada principal.
        inicioScreen.style.display = 'flex';
    });
}


/* 3. Enrutador del Menú Genérico (Navegación)*/
/* Este es el "cerebro" de la navegación interna. Dependiendo de qué título tenga el menú 
   (ESTRÉS, ANSIEDAD o DEPRESIÓN), los botones (Concepto, Grados, etc.) abrirán pantallas diferentes. */

// SECCIÓN: BOTÓN CONCEPTO
// Selecciona el botón "Concepto" del menú.
const btnConcepto = document.querySelector('.menu-btn.concepto');
// Selecciona las pantallas de contenido de concepto específicas para cada tema.
const ansiedadConceptoScreen = document.getElementById('ansiedad-concepto-screen');
const depresionConceptoScreen = document.getElementById('depresion-concepto-screen');
const estresConceptoScreen = document.getElementById('estres-concepto-screen');

if (btnConcepto) {
    btnConcepto.addEventListener('click', () => {
        // Lee el título actual del menú para saber en qué contexto estamos.
        const currentTitle = menuScreenTitle.textContent;
        // Oculta el menú genérico.
        genericMenuScreen.style.display = 'none';

        // Muestra la pantalla correspondiente según el título leído.
        if (currentTitle === 'ANSIEDAD') ansiedadConceptoScreen.style.display = 'flex';
        else if (currentTitle === 'DEPRESIÓN') depresionConceptoScreen.style.display = 'flex';
        else if (currentTitle === 'ESTRÉS') estresConceptoScreen.style.display = 'flex';
    });
}

// SECCIÓN: BOTÓN GRADOS
// Selecciona el botón "Grados" del menú.
const btnGrados = document.querySelector('.menu-btn.grados');
// Selecciona las pantallas de contenido de grados específicas.
const ansiedadGradosScreen = document.getElementById('ansiedad-grados-screen'); 
const estresGradosScreen = document.getElementById('estres-grados-screen'); 
const depresionGradosScreen = document.getElementById('depresion-grados-screen'); 

if (btnGrados) {
    btnGrados.addEventListener('click', () => {
        // Lee el contexto actual.
        const currentTitle = menuScreenTitle.textContent;
        // Oculta el menú.
        genericMenuScreen.style.display = 'none';

        // Redirige a la pantalla correcta según el tema.
        if (currentTitle === 'ANSIEDAD') ansiedadGradosScreen.style.display = 'flex';
        else if (currentTitle === 'ESTRÉS') estresGradosScreen.style.display = 'flex';
        else if (currentTitle === 'DEPRESIÓN') depresionGradosScreen.style.display = 'flex';
    });
}

// SECCIÓN: BOTÓN SÍNTOMAS
// Selecciona el botón "Síntomas" del menú.
const btnSintomas = document.querySelector('.menu-btn.sintomas');
// Selecciona las pantallas de contenido de síntomas.
const estresSintomasScreen = document.getElementById('estres-sintomas-screen');
const ansiedadSintomasScreen = document.getElementById('ansiedad-sintomas-screen'); 
const depresionSintomasScreen = document.getElementById('depresion-sintomas-screen');

if (btnSintomas) {
    btnSintomas.addEventListener('click', () => {
        const currentTitle = menuScreenTitle.textContent;
        genericMenuScreen.style.display = 'none';

        // Lógica de redirección basada en el título.
        if (currentTitle === 'ESTRÉS') estresSintomasScreen.style.display = 'flex';
        else if (currentTitle === 'ANSIEDAD') ansiedadSintomasScreen.style.display = 'flex';
        else if (currentTitle === 'DEPRESIÓN') depresionSintomasScreen.style.display = 'flex';
    });
}

// SECCIÓN: BOTÓN MITOS
// Selecciona el botón "Mitos y creencias".
const btnMitos = document.querySelector('.menu-btn.mitos');
// Selecciona las pantallas de mitos.
const estresMitosScreen = document.getElementById('estres-mitos-screen');
const depresionMitosScreen = document.getElementById('depresion-mitos-screen'); 
const ansiedadMitosScreen = document.getElementById('ansiedad-mitos-screen');

if (btnMitos) {
    btnMitos.addEventListener('click', () => {
        const currentTitle = menuScreenTitle.textContent;
        genericMenuScreen.style.display = 'none';

        // Redirección condicional.
        if (currentTitle === 'ESTRÉS') estresMitosScreen.style.display = 'flex';
        else if (currentTitle === 'DEPRESIÓN') depresionMitosScreen.style.display = 'flex';
        else if (currentTitle === 'ANSIEDAD') ansiedadMitosScreen.style.display = 'flex';
    });
}

// SECCIÓN: BOTÓN RECURSOS
// Selecciona el botón "Recursos" (videos, pdfs, actividades).
const btnRecursos = document.querySelector('.menu-btn.recursos');
// Selecciona las pantallas de recursos.
const estresRecursosScreen = document.getElementById('estres-recursos-screen');
const depresionRecursosScreen = document.getElementById('depresion-recursos-screen');
const ansiedadRecursosScreen = document.getElementById('ansiedad-recursos-screen'); 

if (btnRecursos) {
    btnRecursos.addEventListener('click', () => {
        const currentTitle = menuScreenTitle.textContent;
        genericMenuScreen.style.display = 'none';

        // Redirección condicional.
        if (currentTitle === 'ESTRÉS') estresRecursosScreen.style.display = 'flex';
        else if (currentTitle === 'DEPRESIÓN') depresionRecursosScreen.style.display = 'flex';
        else if (currentTitle === 'ANSIEDAD') ansiedadRecursosScreen.style.display = 'flex';
    });
}

// SECCIÓN: BOTÓN INSTRUMENTO (Selección de Test)
/* Esta sección maneja la apertura de los tests (cuestionarios). Incluye una función especial 
   para reiniciar el scroll (desplazamiento) al inicio, asegurando que el usuario vea el test desde arriba. */
const btnInstrumento = document.querySelector('.menu-btn.instrumento');
const estresInstrumentoScreen = document.getElementById('estres-instrumento-screen');
const ansiedadInstrumentoScreen = document.getElementById('ansiedad-instrumento-screen');
const depresionInstrumentoScreen = document.getElementById('depresion-instrumento-screen');

if (btnInstrumento) {
    btnInstrumento.addEventListener('click', () => {
        const currentTitle = menuScreenTitle.textContent;
        genericMenuScreen.style.display = 'none';

        // FUNCIÓN SOLUCIÓN: REINICIAR SCROLL AL ABRIR
        // Esta función asegura que cualquier pantalla que se abra empiece visualmente desde arriba.
        const resetScroll = (screenElement) => {
            // 1. Reinicia el scroll de la ventana principal del navegador.
            window.scrollTo(0, 0);
            
            // 2. Reinicia el scroll del contenedor principal de la pantalla específica.
            screenElement.scrollTop = 0;
            
            // 3. Reinicia el scroll de la caja interna (donde están las preguntas), si existe.
            const internalContent = screenElement.querySelector('.content-padding');
            if (internalContent) {
                internalContent.scrollTop = 0;
            }
        };

        // TEST ESTRÉS
        if (currentTitle === 'ESTRÉS') {
            estresInstrumentoScreen.style.display = 'flex';
            // Llama a la función para resetear la posición del scroll.
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


/* 4. Lógica de "VOLVER" en pantallas de contenido*/
/* Este bloque automatiza la asignación de eventos a los múltiples botones "VOLVER" 
   que existen en cada pantalla de contenido, para evitar repetir código. */

// Función auxiliar que recibe el ID del botón y el elemento de pantalla a ocultar.
function assignBackBtn(btnId, screenElem) {
    const btn = document.getElementById(btnId);
    // Verifica si existen el botón y la pantalla.
    if (btn && screenElem) {
        btn.addEventListener('click', () => {
            // Oculta la pantalla de contenido actual.
            screenElem.style.display = 'none';
            // Vuelve a mostrar el menú genérico para seguir navegando.
            genericMenuScreen.style.display = 'flex';
        });
    }
}

// Asignaciones para pantallas de Concepto (llama a la función auxiliar para cada caso).
assignBackBtn('btn-ansiedad-concepto-volver', ansiedadConceptoScreen);
assignBackBtn('btn-depresion-concepto-volver', depresionConceptoScreen);
assignBackBtn('btn-estres-concepto-volver', estresConceptoScreen);

// Asignaciones para pantallas de Grados.
assignBackBtn('btn-ansiedad-grados-volver', ansiedadGradosScreen);
assignBackBtn('btn-estres-grados-volver', estresGradosScreen);
assignBackBtn('btn-depresion-grados-volver', depresionGradosScreen);

// Asignaciones para pantallas de Síntomas.
assignBackBtn('btn-estres-sintomas-volver', estresSintomasScreen);
assignBackBtn('btn-ansiedad-sintomas-volver', ansiedadSintomasScreen);
assignBackBtn('btn-depresion-sintomas-volver', depresionSintomasScreen);

// Asignaciones para pantallas de Mitos.
assignBackBtn('btn-estres-mitos-volver', estresMitosScreen);
assignBackBtn('btn-depresion-mitos-volver', depresionMitosScreen);
assignBackBtn('btn-ansiedad-mitos-volver', ansiedadMitosScreen);

// Asignaciones para pantallas de Recursos.
assignBackBtn('btn-estres-recursos-volver', estresRecursosScreen);
assignBackBtn('btn-depresion-recursos-volver', depresionRecursosScreen);
assignBackBtn('btn-ansiedad-recursos-volver', ansiedadRecursosScreen);

// Asignaciones para pantallas de Instrumentos (Tests).
assignBackBtn('btn-estres-instrumento-volver', estresInstrumentoScreen);
assignBackBtn('btn-ansiedad-instrumento-volver', ansiedadInstrumentoScreen);
assignBackBtn('btn-depresion-instrumento-volver', depresionInstrumentoScreen);


/* 5. INSTRUMENTO DE ESTRÉS (PSS-14)*/
/* Este bloque maneja la lógica matemática del Test de Estrés Percibido (PSS-14).
   Calcula el puntaje, maneja ítems inversos y muestra el resultado. */

// Selecciona los elementos del formulario de estrés.
const btnCalcularEstres = document.getElementById('btn-calcular-estres');
const btnReiniciarEstres = document.getElementById('btn-reiniciar-estres');
const resultContainerEstres = document.getElementById('result-container');
const scoreDisplayEstres = document.getElementById('score-display');
const levelDisplayEstres = document.getElementById('level-display');

if (btnCalcularEstres) {
    btnCalcularEstres.addEventListener('click', () => {
        let totalScore = 0; // Variable para acumular el puntaje total.
        let allAnswered = true; // Bandera para verificar si se respondieron todas las preguntas.
        
        // Define qué preguntas se suman normalmente (0=0, 4=4).
        const normalItems = [1, 2, 3, 8, 11, 12, 14];
        // Define qué preguntas se suman de forma inversa (0=4, 4=0) porque son preguntas "positivas".
        const reverseItems = [4, 5, 6, 7, 9, 10, 13];

        // Procesamiento de ítems Normales
        normalItems.forEach(num => {
            // Busca los inputs de tipo radio asociados a la pregunta actual.
            const radios = document.getElementsByName('p' + num);
            let val = -1;
            // Itera para encontrar cuál está marcado.
            for (const radio of radios) {
                if (radio.checked) val = parseInt(radio.value); // Convierte el valor de texto a número entero.
            }
            // Si no se seleccionó nada, val sigue siendo -1.
            if (val === -1) allAnswered = false;
            else totalScore += val; // Suma el valor directo.
        });

        // Procesamiento de ítems Inversos
        reverseItems.forEach(num => {
            const radios = document.getElementsByName('p' + num);
            let val = -1;
            for (const radio of radios) {
                if (radio.checked) val = parseInt(radio.value);
            }
            if (val === -1) allAnswered = false;
            else totalScore += (4 - val); // Invierte el puntaje (si marcó 4, suma 0; si marcó 0, suma 4).
        });

        // Si falta alguna respuesta, muestra alerta y detiene la función.
        if (!allAnswered) {
            alert("Por favor, responde todas las preguntas para obtener un resultado preciso.");
            return;
        }

        // Determina el nivel de estrés y el color del texto según el puntaje total.
        let nivel = "";
        let color = "#6b4632"; // Color por defecto (marrón).

        if (totalScore <= 13) {
            nivel = "NIVEL BAJO";
            color = "#4CAF50"; // Verde
        } else if (totalScore <= 26) {
            nivel = "NIVEL MEDIO";
            color = "#FFC107"; // Amarillo
        } else if (totalScore <= 40) {
            nivel = "NIVEL ALTO";
            color = "#FF9800"; // Naranja
        } else {
            nivel = "NIVEL MUY ALTO";
            color = "#F44336"; // Rojo
        }

        // Actualiza el texto en el contenedor de resultados.
        scoreDisplayEstres.textContent = "Puntuación total: " + totalScore + " puntos";
        levelDisplayEstres.textContent = nivel;
        levelDisplayEstres.style.color = color;
        // Hace visible el contenedor de resultados.
        resultContainerEstres.style.display = 'block';
        // Desplaza la vista suavemente hacia el resultado.
        resultContainerEstres.scrollIntoView({ behavior: 'smooth' });
    });
}

// Lógica para el botón "REINICIAR" del test de estrés.
if (btnReiniciarEstres) {
    btnReiniciarEstres.addEventListener('click', () => {
        // Resetea todos los campos del formulario.
        document.getElementById('form-estres').reset();
        // Oculta el contenedor de resultados.
        resultContainerEstres.style.display = 'none';
        // Vuelve al inicio de la página y del contenedor.
        window.scrollTo({ top: 0, behavior: 'smooth' });
        estresInstrumentoScreen.scrollTop = 0;
    });
}


/* 6. INSTRUMENTO DE ANSIEDAD (BECK BAI)*/
/* Este bloque maneja la lógica del Inventario de Ansiedad de Beck.
   Es una suma simple de 21 ítems (0-3). */

// Selecciona los elementos del DOM para el test de ansiedad.
const btnCalcularAnsiedad = document.getElementById('btn-calcular-ansiedad');
const btnReiniciarAnsiedad = document.getElementById('btn-reiniciar-ansiedad');
const resultContainerAnsiedad = document.getElementById('result-container-ansiedad');
const scoreDisplayAnsiedad = document.getElementById('score-display-ansiedad');
const levelDisplayAnsiedad = document.getElementById('level-display-ansiedad');

if (btnCalcularAnsiedad) {
    btnCalcularAnsiedad.addEventListener('click', () => {
        let totalScore = 0;
        let allAnswered = true;
        
        // Bucle for para recorrer las 21 preguntas (llamadas bai1, bai2, etc.).
        for (let i = 1; i <= 21; i++) {
            const radios = document.getElementsByName('bai' + i);
            let val = -1;
            for (const radio of radios) {
                if (radio.checked) val = parseInt(radio.value);
            }
            // Si encuentra una pregunta sin responder, marca la bandera y rompe el bucle.
            if (val === -1) {
                allAnswered = false;
                break;
            } else {
                totalScore += val; // Suma directa del valor.
            }
        }

        // Validación de respuestas completas.
        if (!allAnswered) {
            alert("Por favor, responde todas las preguntas para obtener un resultado preciso.");
            return;
        }

        // Clasificación del resultado según baremos estándar.
        let nivel = "";
        let color = "#6b4632";

        if (totalScore <= 7) {
            nivel = "NO PRESENTA ANSIEDAD";
            color = "#4CAF50"; // Verde
        } else if (totalScore <= 18) {
            nivel = "ANSIEDAD LEVE";
            color = "#FFEB3B"; // Amarillo claro
            levelDisplayAnsiedad.style.textShadow = "1px 1px 1px #555"; // Sombra para legibilidad en amarillo.
        } else if (totalScore <= 29) {
            nivel = "ANSIEDAD MODERADA";
            color = "#FF9800"; // Naranja
        } else {
            nivel = "ANSIEDAD GRAVE";
            color = "#F44336"; // Rojo
        }

        // Muestra los resultados en pantalla.
        scoreDisplayAnsiedad.textContent = "Puntuación total: " + totalScore + " puntos";
        levelDisplayAnsiedad.textContent = nivel;
        levelDisplayAnsiedad.style.color = color;
        resultContainerAnsiedad.style.display = 'block';
        resultContainerAnsiedad.scrollIntoView({ behavior: 'smooth' });
    });
}

// Lógica para reiniciar el test de ansiedad.
if (btnReiniciarAnsiedad) {
    btnReiniciarAnsiedad.addEventListener('click', () => {
        document.getElementById('form-ansiedad').reset();
        resultContainerAnsiedad.style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        ansiedadInstrumentoScreen.scrollTop = 0;
    });
}


/* 7. INSTRUMENTO DE DEPRESIÓN (BDI-II)*/
/* Este bloque maneja la lógica del Inventario de Depresión de Beck.
   Suma simple de 21 ítems (0-3). */

// Selecciona los elementos del DOM para el test de depresión.
const btnCalcularDepresion = document.getElementById('btn-calcular-depresion');
const btnReiniciarDepresion = document.getElementById('btn-reiniciar-depresion');
const resultContainerDepresion = document.getElementById('result-container-depresion');
const scoreDisplayDepresion = document.getElementById('score-display-depresion');
const levelDisplayDepresion = document.getElementById('level-display-depresion');

if (btnCalcularDepresion) {
    btnCalcularDepresion.addEventListener('click', () => {
        let totalScore = 0;
        let allAnswered = true;
        
        // Bucle for para recorrer las 21 preguntas (llamadas bdi1, bdi2, etc.).
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

        // Validación.
        if (!allAnswered) {
            alert("Por favor, selecciona una opción en cada grupo para obtener un resultado.");
            return;
        }

        // Clasificación del resultado.
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

        // Muestra resultados.
        scoreDisplayDepresion.textContent = "Puntuación total: " + totalScore + " puntos";
        levelDisplayDepresion.textContent = nivel;
        levelDisplayDepresion.style.color = color;
        
        resultContainerDepresion.style.display = 'block';
        resultContainerDepresion.scrollIntoView({ behavior: 'smooth' });
    });
}

// Lógica para reiniciar el test de depresión.
if (btnReiniciarDepresion) {
    btnReiniciarDepresion.addEventListener('click', () => {
        // Limpia el formulario.
        document.getElementById('form-depresion').reset();
        // Oculta el resultado.
        resultContainerDepresion.style.display = 'none';
        // Resetea el scroll de la ventana.
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Resetea el scroll del contenedor específico del test.
        depresionInstrumentoScreen.scrollTop = 0;
        // Resetea el scroll del contenedor interno por seguridad.
        const internal = depresionInstrumentoScreen.querySelector('.content-padding');
        if (internal) internal.scrollTop = 0;
    });
}