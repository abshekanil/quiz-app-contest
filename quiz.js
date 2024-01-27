let quizData = [
    {
        "category": "General Knowledge",
        "questions": [
            {
                "question": "Who wrote 'To Kill a Mockingbird'?",
                "options": ["Harper Lee", "George Orwell", "Jane Austen", "F. Scott Fitzgerald"],
                "answer": "Harper Lee"
            },
            // more General Knowledge questions...
            {
                "question": "What is the capital city of Canada?",
                "options": ["Toronto", "Montreal", "Ottawa", "Vancouver"],
                "answer": "Ottawa"
            },
            {
                "question": "In which year did the Titanic sink?",
                "options": ["1912", "1920", "1935", "1941"],
                "answer": "1912"
            },
            {
                "question": "Who is known as the 'Father of Computers'?",
                "options": ["Alan Turing", "Charles Babbage", "Ada Lovelace", "Steve Jobs"],
                "answer": "Charles Babbage"
            }
        ]
    },
    {
        "category": "Sports",
        "questions": [
            {
                "question": "Which country won the FIFA World Cup in 2018?",
                "options": ["France", "Croatia", "Brazil", "Germany"],
                "answer": "France"
            },
            // more Sports questions...
            {
                "question": "In which year did Usain Bolt set the world record for the 100 meters?",
                "options": ["2008", "2012", "2016", "2020"],
                "answer": "2009"
            },
            {
                "question": "Which tennis player holds the record for the most Grand Slam titles?",
                "options": ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Serena Williams"],
                "answer": "Margaret Court"
            },
            {
                "question": "What is the official ball used in basketball games?",
                "options": ["Football", "Baseball", "Basketball", "Tennis Ball"],
                "answer": "Basketball"
            }
        ]
    },
    {
        "category": "Animals",
        "questions": [
            {
                "question": "What is the lifespan of an average house cat?",
                "options": ["5-10 years", "15-20 years", "25-30 years", "35-40 years"],
                "answer": "15-20 years"
            },
            // more Animals questions...
            {
                "question": "Which bird is known for its ability to mimic human speech?",
                "options": ["Penguin", "Parrot", "Ostrich", "Eagle"],
                "answer": "Parrot"
            },
            {
                "question": "What is the largest species of bear?",
                "options": ["Polar Bear", "Grizzly Bear", "Black Bear", "Kodiak Bear"],
                "answer": "Polar Bear"
            },
            {
                "question": "Which animal is known as the 'ship of the desert'?",
                "options": ["Elephant", "Camel", "Horse", "Lion"],
                "answer": "Camel"
            }
        ]
    },
    {
        "category": "Country",
        "questions": [
            {
                "question": "Which country is known as the 'Land of a Thousand Lakes'?",
                "options": ["Finland", "Canada", "Sweden", "Norway"],
                "answer": "Finland"
            },
            // more Country questions...
            {
                "question": "What is the capital city of Australia?",
                "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                "answer": "Canberra"
            },
            {
                "question": "Which country is the smallest in terms of land area?",
                "options": ["Monaco", "Nauru", "San Marino", "Tuvalu"],
                "answer": "Nauru"
            },
            {
                "question": "Which river is the longest in the world?",
                "options": ["Amazon", "Nile", "Yangtze", "Mississippi"],
                "answer": "Nile"
            }
        ]
    },
    {
        "category": "Rap Music",
        "questions": [
            {
                "question": "Who released the album 'The Marshall Mathers LP'?",
                "options": ["Jay-Z", "Kanye West", "Eminem", "Drake"],
                "answer": "Eminem"
            },
            // more Rap Music questions...
            {
                "question": "Which rapper is known for his alter ego Slim Shady?",
                "options": ["Snoop Dogg", "50 Cent", "Eminem", "Kendrick Lamar"],
                "answer": "Eminem"
            },
            {
                "question": "What is the birth name of the rapper Jay-Z?",
                "options": ["Shawn Carter", "Dwayne Carter", "Aubrey Graham", "Kanye West"],
                "answer": "Shawn Carter"
            },
            {
                "question": "Which rap group released the album 'Straight Outta Compton'?",
                "options": ["N.W.A", "Wu-Tang Clan", "OutKast", "Public Enemy"],
                "answer": "N.W.A"
            }
        ]
    },
    // more categories...
];


let optionTextA = document.getElementById('firstOption');
let optionTextB = document.getElementById('secondOption');
let optionTextC = document.getElementById('thirdOption');
let optionTextD = document.getElementById('fourthOption');

let questionText = document.getElementById('questionText');

let previousBtn = document.getElementById('previousBtn');

let nextBtn = document.getElementById('nextBtn');

let skipBtn = document.getElementById('skipBtn');


let currentQuiz = 0;
let score = 0;

function loadQuiz(){

    const currentQuizData = quizData[currentQuiz];
    const currentQuestionData = currentQuizData.questions[0];


    questionText.textContent = currentQuestionData.question;

    optionTextA.textContent = currentQuestionData.options[0];
    optionTextB.textContent = currentQuestionData.options[1];
    optionTextC.textContent = currentQuestionData.options[2];
    optionTextD.textContent = currentQuestionData.options[3];
}

loadQuiz();
