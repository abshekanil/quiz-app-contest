
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

let startQuizBtn = document.getElementById('startQuizBtn');

let topicCloseBtn = document.getElementById('topic-closeBtn');

let mainContent = document.getElementById('mainContent');

let questionBox = document.getElementById('questionBox');
questionBox.style.display = "none";




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
    
    updateCount();
});

sportsSection.addEventListener("click", function(){
    sportsSection.style.backgroundColor = "#fcce3b";
    sportsCloseBtn.style.display = "block";
    
    updateCount();
});

animalsSection.addEventListener("click", function(){
    animalsSection.style.backgroundColor = "#fcce3b";
    animalsCloseBtn.style.display = "block";
    
    updateCount();
});

geographySection.addEventListener("click", function(){
    geographySection.style.backgroundColor = "#fcce3b";
    geographyCloseBtn.style.display = "block";
    
    updateCount();
});

rapSection.addEventListener("click", function(){
    rapSection.style.backgroundColor = "#fcce3b";
    rapCloseBtn.style.display = "block";
    
    updateCount();
});


    gkCloseBtn.addEventListener("dblclick", function(){
        gkSection.style.backgroundColor = "gray";
        gkCloseBtn.style.display = "none";
       
        updateMinusCount();
    });

    sportsCloseBtn.addEventListener("dblclick", function(){
        sportsSection.style.backgroundColor = "gray";
        sportsCloseBtn.style.display = "none";
       
        updateMinusCount();
    });

    animalsCloseBtn.addEventListener("dblclick", function(){
        animalsSection.style.backgroundColor = "gray";
        animalsCloseBtn.style.display = "none";
       
        updateMinusCount();
    });

    geographyCloseBtn.addEventListener("dblclick", function(){
        geographySection.style.backgroundColor = "gray";
        geographyCloseBtn.style.display = "none";
        
        updateMinusCount();
    });

    rapCloseBtn.addEventListener("dblclick", function(){
        rapSection.style.backgroundColor = "gray";
        rapCloseBtn.style.display = "none";
       
        updateMinusCount();
    });

  

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
            questionBox.style.display = "block";
            

        }
        else
        {
            alert("Select 5 Topics please !!");
        }


    });

    function updateCount(){
        countTopic++;
    }
    function updateMinusCount(){
        countTopic--;
    }





