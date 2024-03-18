let currentQuestionIndex = 0;
const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        answer: "París",
        imagePath: "images/paris.jpg"
    },
    {
        question: "¿Cuál es la capital de Italia?",
        answer: "Roma",
        imagePath: "images/rome.jpg"
    },

    {
        question: "¿Cuál es la capital de Colombia?",
        answer: "Bogotá",
        imagePath: "images/bogota.jpg"
    },

    {
        question: "¿Cuál es la capital de Estados Unidos?",
        answer: "Washington D.C.",
        imagePath: "images/Washington.jpg"
    },

    {
        question: "¿Cuál es la capital de España?",
        answer: "Madrid",
        imagePath: "images/Madrid.jpg"
    },

    {
        question: "¿Cuál es la capital de Japón?",
        answer: "Tokyo",
        imagePath: "images/Tokyo.jpg"
    },

    {
        question: "¿Cuál es la capital de Ecuador?",
        answer: "Quito",
        imagePath: "images/Quito.jpg"
    },

    {
        question: "¿Cuál es la capital de Canadá?",
        answer: "Ottawa",
        imagePath: "images/Ottawa.jpg"
    },

    {
        question: "¿Cuál es la capital de Filipinas?",
        answer: "Manila",
        imagePath: "images/Manila.jpg"
    },

    {
        question: "¿Cuál es la capital de Argentina?",
        answer: "Buenos Aires",
        imagePath: "images/Buenos_Aires.jpg"
    },

    {
        question: "¿Cuál es la capital de Egipto?",
        answer: "El Cairo",
        imagePath: "images/El_Cairo.jpg"
    },

    {
        question: "¿Cuál es la capital de Alemania?",
        answer: "Berlín",
        imagePath: "images/Berlin.jpg"
    },

    {
        question: "¿Cuál es la capital de Brasil?",
        answer: "Brasilia",
        imagePath: "images/Brasilia.jpg"
    },

    {
        question: "¿Cuál es la capital de China?",
        answer: "Pekín",
        imagePath: "images/Pekin.jpg"
    },

    // Agrega más preguntas aquí si es necesario
];

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0; // Si llegamos al final, volvemos al principio
    }
    const currentQuestion = questions[currentQuestionIndex];
    document.querySelector('.front p').textContent = currentQuestion.question;
    document.querySelector('.back-content img').src = currentQuestion.imagePath;
    document.querySelector('.back-content p').textContent = `Respuesta: ${currentQuestion.answer}`;
    hideAnswer(); // Ocultamos la respuesta al pasar a la siguiente pregunta
    document.querySelector('.back-content button').style.display = "none"; // Ocultamos el botón "Siguiente pregunta" al mostrar la respuesta
}

function revealAnswer() {
    document.querySelector('.card').classList.add('show-answer');
    document.querySelector('.back-content button').style.display = "block"; // Mostramos el botón "Siguiente pregunta" al revelar la respuesta
}

function hideAnswer() {
    document.querySelector('.card').classList.remove('show-answer');
}


function revealAnswer() {
    document.querySelector('.card').classList.add('show-answer');
    document.querySelector('.back-content button').style.display = "block"; // Mostramos el botón "Siguiente pregunta" al revelar la respuesta
    
    // Reproducir el sonido al revelar la respuesta
    const revealSound = document.getElementById("revealSound");
    revealSound.play();
}
