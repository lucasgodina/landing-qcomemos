/*function validarRespuesta(estado, respuesta,pregunta){
    feedback ="";

    botonRespuestaSeleccionada = document.getElementById("respuesta" + respuesta);
    if(estado==1){
        botonRespuestaSeleccionada.ClassList.add("correcto");
        feedback = "Correcto";
    }else{
       botonRespuestaSeleccionada.ClassList.add("incorrecto");
       feedback = "Incorrecto";
    }

    document.getElementById("feedback").textContent = feedback;
    siguiente(pregunta)
}
function siguiente(pregunta){
    preguntaSiguente = pregunta +1;
    setTimeout(() => {
        document.getElementById("feedback").textContent = "";
        document.getElementById("pregunta" + pregunta).classList.add("oculto");

        let siguientePregunta = pregunta + 1;
        let siguientePreguntaDiv = document.getElementById("pregunta" + siguientePregunta);

        if(siguientePreguntaDiv) {
            siguientePreguntaDiv.classList.remove("oculto");
        } else {
            // Si no hay más preguntas, muestra un mensaje final
            document.getElementById("feedback").textContent = "¡Juego terminado!";
        }
    }, (5000); // Espera 1 segundo antes de pasar a la siguiente pregunta
}*/
function validarRespuesta(estado, respuesta, pregunta) {
    let feedback = "";
    let botonRespuestaSeleccionada = document.getElementById("respuesta" + respuesta);

    if (estado === 1) {
        botonRespuestaSeleccionada.classList.add("correcto");
        feedback = "Correcto";
    } else {
        botonRespuestaSeleccionada.classList.add("incorrecto");
        feedback = "Incorrecto";
    }

    preguntasiguiente = pregunta + 1;

    document.getElementById("feedback").textContent = feedback;

    setTimeout(() => {
        document.getElementById("feedback").textContent = "";
        document.getElementById("pregunta" + pregunta).classList.add("oculto");

        siguientePregunta = pregunta + 1;
        siguientePreguntaDiv = document.getElementById("pregunta" + siguientePregunta);

        if (siguientePreguntaDiv) {
            siguientePreguntaDiv.classList.remove("oculto");
        } else {
            document.getElementById("feedback").textContent = "¡Juego terminado!";
        }
    }, 1000);
}

/*function validarRespuesta(estado, respuesta,pregunta){
    feedback ="";

    botonRespuestaSeleccionada = document.getElementById("respuesta" + respuesta);
    if(estado==1){
        botonRespuestaSeleccionada.ClassList.add("correcto");
        feedback = "Correcto";
    }else{
       botonRespuestaSeleccionada.ClassList.add("incorrecto");
       feedback = "Incorrecto";
    }

    document.getElementById("feedback").textContent = feedback;
    siguiente(pregunta)
}
function siguiente(pregunta){
    preguntaSiguente = pregunta +1;
    setTimeout(() => {
        document.getElementById("feedback").textContent = "";
        document.getElementById("pregunta" + pregunta).classList.add("oculto");

        let siguientePregunta = pregunta + 1;
        let siguientePreguntaDiv = document.getElementById("pregunta" + siguientePregunta);

        if(siguientePreguntaDiv) {
            siguientePreguntaDiv.classList.remove("oculto");
        } else {
            // Si no hay más preguntas, muestra un mensaje final
            document.getElementById("feedback").textContent = "¡Juego terminado!";
        }
    }, (5000); // Espera 1 segundo antes de pasar a la siguiente pregunta
}*/
function validarRespuesta(estado, respuesta, pregunta) {
    let feedback = "";
    let botonRespuestaSeleccionada = document.getElementById("respuesta" + respuesta);

    if (estado === 1) {
        botonRespuestaSeleccionada.classList.add("correcto");
        feedback = "Correcto";
    } else {
        botonRespuestaSeleccionada.classList.add("incorrecto");
        feedback = "Incorrecto";
    }

    document.getElementById("feedback").textContent = feedback;

    setTimeout(() => {
        document.getElementById("feedback").textContent = "";
        document.getElementById("pregunta" + pregunta).classList.add("oculto");

        let siguientePregunta = pregunta + 1;
        let siguientePreguntaDiv = document.getElementById("pregunta" + siguientePregunta);

        if (siguientePreguntaDiv) {
            siguientePreguntaDiv.classList.remove("oculto");
        } else {
            document.getElementById("feedback").textContent = "¡Juego terminado!";
            // Redirigir a la página de la landing después de 3 segundos
            setTimeout(() => {
                window.location.href = "index.html"; // Asegúrate de que el nombre de tu archivo de landing sea correcto
            }, 3000); // Ajusta el tiempo si es necesario
        }
    }, 1000);
}
