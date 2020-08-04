const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
let shuffledQuestions, currentQuestionIndex;
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNext();
})

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNext();
}

function setNext() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAns);
        answerElement.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }

}

function selectAns(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');

    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [{
        question: 'What is 2 + 2 ?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '11', correct: false },
            { text: 'George Washington', correct: false },
            { text: '0', correct: false }
        ]
    },
    {
        question: 'What is 3+3',
        answers: [
            { text: '6', correct: true },
            { text: '9', correct: false },
            { text: '1', correct: false },
            { text: '27', correct: false }
        ]
    },
    {
        question: 'The volume of a cylinder is found via the formula V = pi*r^2*h. With pi = 5, r = 10 and h = 3, what is V',
        answers: [
            { text: '1500', correct: false },
            { text: 'WTF do u mean', correct: true },
            { text: 'Honest to God, You should know this aint right.', correct: false },
            { text: 'stop playing this is wrong as well', correct: false },
            { text: 'Seriously, that answer is right up there.', correct: false }
        ]
    },
    {
        question: 'What is life ?',
        answers: [
            { text: '42', correct: true },
            { text: 'The very slow climb to the inevitable fall', correct: true },
            { text: 'The good shit, the bad shit and the shit shit', correct: true },
            { text: 'Pain and pleasure all at once', correct: true },
            { text: 'There is not wrong answer. All of these are correct', correct: true }
        ]
    },
    {
        question: 'What is the Einstein-Rosen bridge`s alternate, and also more commonly known, name ?',
        answers: [
            { text: 'black hole', correct: false },
            { text: 'pulsar', correct: false },
            { text: 'quasar', correct: false },
            { text: 'white hole', correct: false },
            { text: 'wormhole', correct: true },
            { text: 'event horizon', correct: false }
        ]
    },
    {
        question: 'In order to create styles for a webpage, a developer must use _______',
        answers: [
            { text: 'Javascript', correct: false },
            { text: 'HTML', correct: false },
            { text: 'React-Native', correct: false },
            { text: 'React-JS', correct: false },
            { text: 'CSS', correct: true },
            { text: 'PHP', correct: false },
        ]
    },
    {
        question: 'Physical parameter that shows up in the the solution in Einstein`s field of equations that correpsonds to the radius defining the event horizon of a black hole ? ',
        answers: [
            { text: 'Black hole', correct: false },
            { text: 'quasar', correct: false },
            { text: 'Schwarszchild radius', correct: true },
            { text: 'Schwarszchild black hole', correct: false },
            { text: 'General relativity', correct: false },
            { text: 'Some virgin shit', correct: false }
        ]
    },
    {
        question: 'What is the correct sequencing for an HTML file ?',
        answers: [
            { text: 'head, html, body', correct: false },
            { text: 'html, html', correct: false },
            { text: 'html, head, body, p', correct: false },
            { text: 'html, html, head, body, head, body', correct: false },
            { text: 'none', correct: false },
            { text: 'html, head, body, html again', correct: true }
        ]
    },
    {
        question: 'If the further the redshift, the further the distance and therefore the older the cosmological body ?',
        answers: [
            { text: 'Yes, the redshift of a cosmological body indicates an objects distance and age', correct: true },
            { text: 'No, a redshift implies the measurement of a cosmological body`s hierarchy within the universe', correct: false }
        ]
    },
    {
        question: 'Which classifies as a high-redshift universal anomaly ?',
        answers: [
            { text: 'A planet with a redshift of 4 ', correct: false },
            { text: 'A nebula with a redshift of 6', correct: false },
            { text: 'A quasar with a redshift of 3.96', correct: false },
            { text: 'A black hole with a redshift of 8', correct: true }
        ]
    },
    {
        question: 'What element is the supposed reason as to why the universe is expanding at an alarming rate ?',
        answers: [
            { text: 'Dark matter', correct: false },
            { text: 'Tachyons', correct: false },
            { text: 'Dark energy', correct: true },
            { text: 'Gamma rays', correct: false },
            { text: 'Solar energy', correct: false }
        ]
    },
    {
        question: 'What is the current age of our universe ?',
        answers: [
            { text: '19,800,000,000 ', correct: false },
            { text: '13,900,000,000', correct: true },
            { text: '100,000,000,000', correct: false },
            { text: '109,800,112', correct: false },
            { text: '1,000,000,000', correct: false },
            { text: '2020', correct: false }
        ]
    },
    {
        question: 'Turned myself into a ______ ?',
        answers: [
            { text: 'dick', correct: false },
            { text: 'gun', correct: false },
            { text: 'sword', correct: false },
            { text: 'dildo', correct: false },
            { text: 'pickle', correct: true },
            { text: 'come on, you know the answer', correct: false }
        ]
    },
    {
        question: 'What was the very words of J. Robert Oppenheimer after seeing what his creation was used for ?',
        answers: [
            { text: 'In the context of history, this has turned into the worst of forever', correct: false },
            { text: 'I have become the very thing I swore against', correct: false },
            { text: 'I am become death, the destroyer of worlds', correct: true },
            { text: 'The sins of this world is enough to churn an evil man`s morality', correct: false }
        ]
    },
    {
        question: 'What programming languages are primarily used at Google ?',
        answers: [
            { text: 'Javascript', correct: true },
            { text: 'This is stupid', correct: false },
            { text: 'Golang', correct: true },
            { text: 'Honestly the answer is very obvious', correct: false }
        ]
    },
    {
        question: 'What is the supposed speed required to escape a black hole ? ',
        answers: [
            { text: '3 * 10**8 m/s', correct: true },
            { text: '18 * 10**9 m/s', correct: false },
            { text: '0.00000000000000025 attoseconds', correct: false },
            { text: '1.9 * 10**9 m/s', correct: false },
            { text: '16*10**9 m/s', correct: false },
            { text: '190 * 10*13 m/s', correct: false }
        ]
    },
    {
        question: 'What is term to describe as to what the supposed speed is ?',
        answers: [
            { text: 'Tachyon', correct: false },
            { text: 'Schwarszchild radius', correct: true },
            { text: 'Interstellar travel speed', correct: false },
            { text: 'Light speed', correct: false }
        ]
    },
    {
        question: 'What is the tag used in HTML to create a header in an HTML file ? ',
        answers: [
            { text: '<html>', correct: false },
            { text: '<p>', correct: false },
            { text: '<head>', correct: false },
            { text: '<div>', correct: false },
            { text: '<style>', correct: false },
            { text: '<H#>', correct: true }
        ]
    },
    {
        question: 'What module must be imported in order to allow a Python program to plot ?',
        answers: [
            { text: 'matplotli.pyplot', correct: false },
            { text: 'numpy.pyplot', correct: false },
            { text: 'matplotlib.pyplot', correct: true },
            { text: 'torch.plot', correct: false },
            { text: 'none', correct: false },
            { text: 'operators.plot', correct: false }
        ]
    },
    {
        question: 'What is a probable reason as to why people are depressed ?',
        answers: [
            { text: 'People are on their phones too damn much', correct: false },
            { text: 'People are snowflakes', correct: false },
            { text: 'People are stupid', correct: false },
            { text: 'People are too over-emotional', correct: false },
            { text: 'People are complex', correct: true },
            { text: 'Fuck off, you know the correct answer', correct: false }
        ]
    },
    {
        question: 'What would be tho most likely outcome if there ever was a war today ?',
        answers: [
            { text: 'Fucked', correct: false },
            { text: 'Fucked', correct: false },
            { text: 'Fucked', correct: false },
            { text: 'Fucked', correct: false },
            { text: 'Fucked', correct: false },
            { text: 'Fucked', correct: false }
        ]
    },
    {
        question: 'What season is it ? ',
        answers: [
            { text: 'Season of the witch', correct: false },
            { text: 'Winter', correct: false },
            { text: 'Bikini', correct: false },
            { text: 'It`s the Philippines. It`s just one fucking season', correct: true },
            { text: 'Bitch it is very fucking obvious.', correct: false },
            { text: 'Fuck off. It`s a humid fucking place', correct: false }
        ]
    },
    {
        question: 'What could be the reason as to why something like a black hole exists ? ',
        answers: [
            { text: 'Because of a stellar massive star collapsing', correct: true },
            { text: 'It exists due to a star reaching the end of its cycle', correct: true },
            { text: 'It exists because a star literally explodes and it basically leaves a literal hole ', correct: true }
        ]
    },
    {
        question: '1600 Amphitheatre, _____________ _______________, CA',
        answers: [
            { text: 'Palo Alto (technically this can be true)', correct: false },
            { text: 'San Francisco', correct: false },
            { text: 'Stanford University', correct: false },
            { text: 'Mountain View', correct: true }
        ]
    },
    {
        question: 'What is the correct time complexity of the loop `for(int i = 1; i <= N; i++) `? ',
        answers: [
            { text: 'O(n^c)', correct: false },
            { text: 'O(n)', correct: true },
            { text: 'O(1)', correct: false },
            { text: 'O(LogN)', correct: false }
        ]
    },
    {
        question: 'Time complexity of `for (int i = 2; i <= n; i = pow(i, c))`',
        answers: [
            { text: 'O(logN)', correct: false },
            { text: 'O(1)', correct: false },
            { text: 'O(N)', correct: false },
            { text: 'Theta(LogN)', correct: false },
            { text: 'O(LogLogN)', correct: true },
            { text: 'O(m+n)', correct: false }
        ]
    },
    {
        question: 'What is the appropriate reaction when a person tries to piss you off ? ',
        answers: [
            { text: 'Punch', correct: false },
            { text: 'Sucker punch', correct: false },
            { text: 'Kick', correct: false },
            { text: 'Groin kick', correct: false },
            { text: 'Solve it peacefully', correct: false },
            { text: 'Reverse UNO card', correct: false },
            { text: 'Honestly there is no correct answer.', correct: true }
        ]
    },
    {
        question: 'What is the distance that light travels in a year ? ',
        answers: [
            { text: 'Warp speed', correct: false },
            { text: 'Light year', correct: true },
            { text: 'Light speed', correct: false }
        ]
    },
    {
        question: 'Mpc stands for ? ',
        answers: [
            { text: 'Mutant player character', correct: false },
            { text: 'Microparasitic creature', correct: false },
            { text: 'Maximum Parsec', correct: false },
            { text: 'Megaparsec', correct: true },
            { text: 'Microparsec', correct: false }
        ]
    },
    {
        question: 'What is Mpc ? ',
        answers: [
            { text: 'Used by astro-related individuals in measuring a distance between vast space', correct: true },
            { text: 'Used in measuring a star`s size and its distance between its planets', correct: false },
            { text: 'Used in measuring the surface radius of a heavenly body', correct: false }
        ]
    },
    {
        question: 'If an individual were to peer through a glass and look at the Earth from a distance of 65,000,000 light years away, what would they see ?',
        answers: [
            { text: 'They would see the world at a fire-like state', correct: false },
            { text: 'There would be no difference', correct: false },
            { text: 'They would see the world in a different shape', correct: false },
            { text: 'They wouldn`t see the Earth at all', correct: false },
            { text: 'They would see the Earth during the last dinosaur era', correct: true }
        ]
    },
    {
        question: 'According to the __________________________, Just after the Big Bang, the universe increased a quadrillion in less than an attosecond',
        answers: [
            { text: 'Inflation theory', correct: false },
            { text: 'Inflation of the universe', correct: false },
            { text: 'Quasar Cosmology', correct: false },
            { text: 'Inflationary Cosmology', correct: true }
        ]
    },
    {
        question: 'What is a highly magnetized rotating neutron star that emits beams of radiation out of its magnetic poles ?',
        answers: [
            { text: 'Quasar', correct: false },
            { text: 'White hole', correct: false },
            { text: 'Neutron star', correct: false },
            { text: 'Magnetic monopoles', correct: false },
            { text: 'Hypergiant star', correct: false },
            { text: 'Pulsar', correct: true },
            { text: 'Galaxy filament', correct: false }
        ]
    },
    {
        question: 'What would be the most likely end of the universe, judging from the current state of said universe ?',
        answers: [
            { text: 'Big Crunch', correct: 'false' },
            { text: 'Big Rip', correct: false },
            { text: 'Big Chill', correct: true },
            { text: 'Heat Death', correct: true },
            { text: 'Reverse Boom', correct: false }
        ]
    },
    {
        question: 'What would generate a supernova ? ',
        answers: [
            { text: 'When a massive star`s core runs out of fuel ', correct: true },
            { text: 'When a star reaches the end of its lifespan', correct: false },
            { text: 'When a runaway white dwarf triggers a massive nuclear fusion', correct: false },
            { text: 'A sudden gravitational collapse of a star`s core', correct: true },
            { text: 'When a star`s core collapses after a massive explosion', correct: false }
        ]
    },
    {
        question: 'What does Murphy`s Law dictate ? ',
        answers: [
            { text: 'For every reaction there is an equal and opposite reaction', correct: false },
            { text: 'Everything that can happen,will happen', correct: false },
            { text: 'Every object in motion, will stay in motion unless contacts an immovable object', correct: false },
            { text: 'When an object in motion meets an immovable object, there will be a catastrophic reaction', correct: false },
            { text: 'Everything that can go wrong, will go wrong', correct: true }
        ]
    },
    {
        question: 'What is the output of the code: (function(){var a= b = 3})(); console.log(``a defined ?`` + (typeof a !== `undefined`)); console.log(``a defined ?`` + (typeof a !== `undefined`));',
        answers: [
            { text: 'a defined ? = true; b defined ? = true', correct: false },
            { text: 'a defined ? =false, b defined ? = false ', correct: false },
            { text: 'a defined ? = false, b defined ? = true', correct: true },
            { text: 'SyntaxError: Function statements require a function name', correct: false }
        ]
    },
    {
        question: 'Output: var myObject = {foo: bar, func: function(){var self = this; console.log(outer func: this.foo = + this.foo); console.log(outer func: this.foo = + this.foo); (function(){console.log(outer func: this.foo = + this.foo);console.log(outer func: this.foo = + this.foo);}());}}; myObject.func());',
        answers: [
            { text: 'outer func: this.foo = bar outer func: self.foo = bar inner func: this.foo = undefined inner fun: self.foo = bar undefined', correct: true },
            { text: 'no output', correct: false },
            { text: 'outer func: this.foo = undefined outer func: self.foo = undefined inner func: this.foo = undefined inner fun: self.foo = bar', correct: false },
            { text: 'SyntaxError: error in token `:`', correct: false }
        ]
    },
    {
        question: 'What can be a possible side effect of pneumonia ? ',
        answers: [
            { text: 'bleeding of the rectum', correct: false },
            { text: 'paralysis of the waist down', correct: false },
            { text: 'coughing with blood', correct: false },
            { text: 'cough and sneezes', correct: true },
            { text: 'vomitting', correct: false },
            { text: 'red eyes', correct: false },
            { text: 'intense hunger pangs', correct: false }
        ]
    },
    {
        question: 'How can someone change the index of the following HTML code ? "<p id="geek">GeeksforGeeks</p> " ',
        answers: [
            { text: ' document.getElement(“geek”).innerHTML=”I am a Geek”;', correct: false },
            { text: 'document.getId(“geek”)=”I am a Geek”;', correct: false },
            { text: 'document.getElementById(“geek”).innerHTML=”I am a Geek”;', correct: true },
            { text: 'document.querySelector("geek").innerHTML = "I am a Geek"', correct: false },
            { text: 'document.getElementById(“geek”).innerHTML=I am a Geek;', correct: false }
        ]
    },
    {
        question: 'Cells located within the bone: ',
        answers: [
            { text: 'Osteoblasts, Osteocytes, Osteoclasts', correct: true },
            { text: 'Periosteum, Endosteum', correct: false },
            { text: 'Adipocytes, Trigylecrides', correct: false },
            { text: 'None of the given', correct: false }
        ]
    },
    {
        question: 'A programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model.',
        answers: [
            { text: 'Web programmer', correct: false },
            { text: 'Web desingner', correct: false },
            { text: 'Web architect', correct: false },
            { text: 'Software developer', correct: false },
            { text: 'Web engineer', correct: false },
            { text: 'Web developer', correct: true }
        ]
    },
    {
        question: 'An algorithm meant to find any prime number up to a certain limit',
        answers: [
            { text: 'Regression', correct: false },
            { text: 'Random forest', correct: false },
            { text: 'Sieve of Eratosthenes', correct: true },
            { text: 'Logistic Regression', correct: false },
            { text: 'SVM', correct: false }
        ]
    }
]