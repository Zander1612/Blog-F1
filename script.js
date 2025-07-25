document.addEventListener("DOMContentLoaded", () => {
  const preguntas = [
    {
      texto: "¿Quién es el piloto con más campeonatos mundiales en la historia de la F1?",
      opciones: ["Ayrton Senna", "Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel"],
      correcta: 1
    },
    {
      texto: "¿Qué escudería tiene más campeonatos de constructores?",
      opciones: ["Red Bull", "McLaren", "Mercedes", "Ferrari"],
      correcta: 3
    },
    {
      texto: "¿En qué país se celebra el Gran Premio de Mónaco?",
      opciones: ["Francia", "Italia", "Mónaco", "España"],
      correcta: 2
    },
    {
      texto: "¿Cuál es el nombre del trofeo que se entrega al campeón mundial de pilotos?",
      opciones: ["Copa de la Velocidad", "Trofeo del Campeón", "Campeonato Mundial de Pilotos", "No tiene un nombre especial"],
      correcta: 2
    }
  ];
if (window.location.pathname.includes("trivia.html")) {
  const nombre = prompt("¿Cuál es tu nombre?");
  const mensaje = document.getElementById("mensaje-bienvenida");
  mensaje.textContent = `¡Hola ${nombre}! Prepárate para comenzar.`;
}

  const btn = document.getElementById("btnTrivia");
  const semaforo = document.getElementById("semaforo");
  const contenedorTrivia = document.querySelector(".contenedor-trivia");
  const intro = document.getElementById("intro");
  const preguntaContenedor = document.getElementById("pregunta-actual");
  const btnSiguiente = document.getElementById("btnSiguiente");
  const finalTrivia = document.getElementById("final-trivia");
  const btnReiniciar = document.getElementById("btnReiniciar");
  const btnVolver = document.getElementById("btnVolver");

  let preguntaActual = 0;

  btn.addEventListener("click", () => {
    intro.style.display = "none";
    btn.style.display = "none";
    semaforo.classList.add("activo");

    setTimeout(() => {
      semaforo.classList.remove("activo");
      contenedorTrivia.style.display = "block";
      mostrarPregunta();
    }, 4000);
  });

  function mostrarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaContenedor.innerHTML = `
      <h3>${pregunta.texto}</h3>
      <ul class="opciones">
        ${pregunta.opciones.map((op, index) => `<li data-index="${index}">${op}</li>`).join("")}
      </ul>
    `;
    btnSiguiente.style.display = "none";

    const opciones = preguntaContenedor.querySelectorAll("li");
    opciones.forEach(opcion => {
      opcion.addEventListener("click", () => {
        const seleccionada = parseInt(opcion.getAttribute("data-index"));
        opciones.forEach(o => o.style.pointerEvents = "none");
        if (seleccionada === pregunta.correcta) {
          opcion.classList.add("correcto");
        } else {
          opcion.classList.add("incorrecto");
          opciones[pregunta.correcta].classList.add("correcto");
        }
        btnSiguiente.style.display = "inline-block";
      });
    });
  }

  btnSiguiente.addEventListener("click", () => {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
      mostrarPregunta();
    } else {
      preguntaContenedor.innerHTML = "<h3>¡Trivia completada!</h3>";
      btnSiguiente.style.display = "none";
      finalTrivia.style.display = "block";
    }
  });

  btnReiniciar.addEventListener("click", () => {
    location.reload();
  });

  btnVolver.addEventListener("click", () => {
    window.location.href = "index.html"; // <- cámbialo si tu blog está en otro enlace
  });
});