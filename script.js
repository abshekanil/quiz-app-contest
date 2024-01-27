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


let startSolvingBtn = document.getElementById('startSolving-btn');
let categorySelectionPage = document.getElementById('category-selection');
let gkSection = document.getElementById('gk');
let sportsSection = document.getElementById('sports');
let animalsSection = document.getElementById('animals');
let geographySection = document.getElementById('geography');
let rapSection = document.getElementById('rap');
let npcTag = document.getElementById('npcTag');

let gkCloseBtn = document.getElementById('gkSelectionBtn');
let sportsCloseBtn = document.getElementById('sportsSelectionBtn');
let animalsCloseBtn = document.getElementById('animalsSelectionBtn');
let geographyCloseBtn = document.getElementById('geographySelectionBtn');
let rapCloseBtn = document.getElementById('rapSelectionBtn');




startSolvingBtn.addEventListener("click", function(){
    categorySelectionPage.style.display = "block";
    categorySelectionPage.style.backgroundColor = "white";
    document.body.style.backgroundColor = "gray";
    gkSection.style.backgroundColor = "gray";
    sportsSection.style.backgroundColor = "gray";
    animalsSection.style.backgroundColor = "gray";
    geographySection.style.backgroundColor = "gray";
    rapSection.style.backgroundColor = "gray";
    npcTag.style.backgroundColor = "gray";

    gkCloseBtn.style.display = "none";
    sportsCloseBtn.style.display = "none";
    animalsCloseBtn.style.display = "none";
    geographyCloseBtn.style.display = "none";
    rapCloseBtn.style.display = "none";
    

});

let countTopic = 0;

gkSection.addEventListener("click", function(){
    gkSection.style.backgroundColor = "#fcce3b";
    gkCloseBtn.style.display = "block";
    countTopic++;
});

sportsSection.addEventListener("click", function(){
    sportsSection.style.backgroundColor = "#fcce3b";
    sportsCloseBtn.style.display = "block";
    countTopic++;
});

animalsSection.addEventListener("click", function(){
    animalsSection.style.backgroundColor = "#fcce3b";
    animalsCloseBtn.style.display = "block";
    countTopic++;
});

geographySection.addEventListener("click", function(){
    geographySection.style.backgroundColor = "#fcce3b";
    geographyCloseBtn.style.display = "block";
    countTopic++;
});

rapSection.addEventListener("click", function(){
    rapSection.style.backgroundColor = "#fcce3b";
    rapCloseBtn.style.display = "block";
    countTopic++;
});


    gkCloseBtn.addEventListener("dblclick", function(){
        gkSection.style.backgroundColor = "gray";
        gkCloseBtn.style.display = "none";
        countTopic--;
    });

    sportsCloseBtn.addEventListener("dblclick", function(){
        sportsSection.style.backgroundColor = "gray";
        sportsCloseBtn.style.display = "none";
        countTopic--;
    });

    animalsCloseBtn.addEventListener("dblclick", function(){
        animalsSection.style.backgroundColor = "gray";
        animalsCloseBtn.style.display = "none";
        countTopic--;
    });

    geographyCloseBtn.addEventListener("dblclick", function(){
        geographySection.style.backgroundColor = "gray";
        geographyCloseBtn.style.display = "none";
        countTopic--;
    });

    rapCloseBtn.addEventListener("dblclick", function(){
        rapSection.style.backgroundColor = "gray";
        rapCloseBtn.style.display = "none";
        countTopic--;
    });

    let startQuizBtn = document.getElementById('startQuizBtn');

    let topicCloseBtn = document.getElementById('topic-closeBtn');

    let mainContent = document.getElementById('mainContent');

    topicCloseBtn.addEventListener("click", function(){
        categorySelectionPage.style.display = "none";
        document.body.style.backgroundColor = "white";
    });

    startQuizBtn.addEventListener("click", function(){
        if(countTopic === 5)
        {
            categorySelectionPage.style.display = "none";
            mainContent.style.display = "none";
            document.body.style.backgroundColor = "white";
            startSolvingBtn.style.display = "none";

        }
        else
        {
            alert("Please select 5 topics");
        }
    });





