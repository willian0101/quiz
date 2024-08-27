const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Guimarães Rosa"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é a capital do Brasil?",
        options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: "Júpiter"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Guimarães Rosa"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é a fórmula química da água?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Qual é o elemento químico com símbolo 'Au'?",
        options: ["Prata", "Ouro", "Cobre", "Alumínio"],
        answer: "Ouro"
    },
    {
        question: "Qual é a maior cidade do mundo em população?",
        options: ["Tóquio", "Nova York", "Xangai", "São Paulo"],
        answer: "Tóquio"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual é o maior oceano do planeta?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Oceano Ártico"],
        answer: "Oceano Pacífico"
    },
    {
        question: "Em que ano o homem pisou na Lua pela primeira vez?",
        options: ["1965", "1969", "1972", "1975"],
        answer: "1969"
    },
    {
        question: "Qual é o autor de 'Cem Anos de Solidão'?",
        options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Carlos Fuentes"],
        answer: "Gabriel García Márquez"
    },
    {
        question: "Qual é o menor país do mundo?",
        options: ["Mônaco", "San Marino", "Vaticano", "Liechtenstein"],
        answer: "Vaticano"
    },
    {
        question: "Qual é o continente onde está localizado o Egito?",
        options: ["África", "Ásia", "Europa", "América"],
        answer: "África"
    },
    {
        question: "Quem é o autor da teoria da relatividade?",
        options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Niels Bohr"],
        answer: "Albert Einstein"
    },
    {
        question: "Qual é o nome da estrela mais próxima da Terra, além do Sol?",
        options: ["Sirius", "Proxima Centauri", "Alpha Centauri", "Betelgeuse"],
        answer: "Proxima Centauri"
    },
    {
        question: "Qual é a capital da França?",
        options: ["Londres", "Berlim", "Madri", "Paris"],
        answer: "Paris"
    },
    {
        question: "Qual é o maior mamífero terrestre?",
        options: ["Elefante", "Rinoceronte", "Hipopótamo", "Girafa"],
        answer: "Elefante"
    },
    {
        question: "Qual é o maior deserto do mundo?",
        options: ["Sahara", "Gobi", "Kalahari", "Antártica"],
        answer: "Antártica"
    },
    {
        question: "Quem é o autor de 'O Pequeno Príncipe'?",
        options: ["Antoine de Saint-Exupéry", "J.K. Rowling", "J.R.R. Tolkien", "Lewis Carroll"],
        answer: "Antoine de Saint-Exupéry"
    },
    {
        question: "Qual é a fórmula química do sal de cozinha?",
        options: ["NaCl", "KCl", "CaCO3", "MgSO4"],
        answer: "NaCl"
    },
    {
        question: "Qual é o planeta mais próximo do Sol?",
        options: ["Mercúrio", "Vênus", "Terra", "Marte"],
        answer: "Mercúrio"
    },
    {
        question: "Quem escreveu '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
        answer: "George Orwell"
    },
    {
        question: "Qual é o maior animal marinho?",
        options: ["Baleia Azul", "Tubarão Branco", "Orca", "Baleia Jubarte"],
        answer: "Baleia Azul"
    },
    {
        question: "Qual é a língua oficial do Brasil?",
        options: ["Espanhol", "Português", "Inglês", "Francês"],
        answer: "Português"
    },
    {
        question: "Qual é o símbolo químico do ferro?",
        options: ["Fe", "F", "Ir", "Fr"],
        answer: "Fe"
    },
    {
        question: "Qual é a maior montanha do mundo?",
        options: ["K2", "Kangchenjunga", "Everest", "Makalu"],
        answer: "Everest"
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        answer: "George Washington"
    },
    {
        question: "Qual é a capital do Japão?",
        options: ["Tóquio", "Osaka", "Kyoto", "Hiroshima"],
        answer: "Tóquio"
    },
    {
        question: "Qual é o menor continente do mundo?",
        options: ["Oceania", "África", "América do Sul", "Europa"],
        answer: "Oceania"
    },
    {
        question: "Qual é o nome do processo pelo qual as plantas produzem seu próprio alimento?",
        options: ["Fotossíntese", "Respiração", "Fermentação", "Transpiração"],
        answer: "Fotossíntese"
    },
    {
        question: "Qual é o maior lago do mundo em volume de água?",
        options: ["Lago Baikal", "Lago Superior", "Lago Vitória", "Lago Titicaca"],
        answer: "Lago Baikal"
    },
    {
        question: "Quem é o autor da teoria da evolução das espécies?",
        options: ["Charles Darwin", "Jean-Baptiste Lamarck", "Gregor Mendel", "Louis Pasteur"],
        answer: "Charles Darwin"
    },
    {
        question: "Qual é o nome do maior vulcão do mundo?",
        options: ["Mauna Loa", "Kilauea", "Vesuvius", "Etna"],
        answer: "Mauna Loa"
    },
    {
        question: "Qual é o principal gás responsável pelo efeito estufa?",
        options: ["Dióxido de Carbono", "Metano", "Óxidos de Nitrogênio", "Ozônio"],
        answer: "Dióxido de Carbono"
    },
    {
        question: "Qual é a moeda oficial dos Estados Unidos?",
        options: ["Euro", "Dólar", "Libra", "Iene"],
        answer: "Dólar"
    },
    {
        question: "Qual é o nome do primeiro satélite artificial lançado pela União Soviética?",
        options: ["Vostok", "Sputnik", "Luna", "Soyuz"],
        answer: "Sputnik"
    }
];

const correctsound = document.getElementById('correct-sound')
const incorrectsound = document.getElementById('incorrect-sound')

let currentQuestionIndex = 0;
let score = 0;

function showModal() {
    const modal = document.getElementById('modal');
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });

    feedbackElement.textContent = ''; // Limpa o feedback anterior
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
                correctsound.play();
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
                incorrectsound.play();
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); // Exibe a próxima pergunta após 2 segundos
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};
