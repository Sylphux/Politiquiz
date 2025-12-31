// The test compares two ideologies. 
// You can add custom opposed ideologies pairs here to create your own test
// format :          ideology1_ideology2: [element1 starting points, element2 starting points, neutral starting points]
ideologies = {
    state_anarchy: [0, 0, 0],
    nature_culture: [0, 0, 0]
}

// Add your custom questions here
// format [question, ideology_versus, revert answer ?]
questions = [
    ["L'état tel que nous le connaissons doit être aboli.", ideologies.state_anarchy, true],
    ["Il est nécessaire d'avoir un gouvernement pour faire fonctionner une démocratie.", ideologies.state_anarchy, false]
]

// This is where the program begins

let activeQuestion = 0
let resultsArray = []

function changeQuestion(){
    document.getElementById("question").innerHTML = questions[activeQuestion][0];
    document.getElementById("q_counter").innerHTML = `Question numéro ${activeQuestion + 1} sur ${questions.length}`
}

function hideQuiz(){document.getElementById("question-box").style.display = "none"}

function showResultsBox(){document.getElementById("results-box").style.display = "block"}

function createResults(){
    let subjects = Object.keys(ideologies)
    let points = Object.values(ideologies)
    let i = 0
    for (; i < subjects.length; i++){
        let yes = points[i][0]
        let no = points[i][1]
        let neutral = points[i][2]
        let total = yes + no + neutral
        let coef = 100 / total;
        yes *= coef;
        no *= coef;
        neutral *= coef;
        let vs = subjects[i].split("_")
        resultsArray.push([[vs[0], yes], [vs[1], no], ["neutral", neutral]]);
    }
    console.log("Result array :")
    console.log(resultsArray)
}

function randTwo(min, max) {
  let rand1 = Math.floor(Math.random() * (max - min) ) + min;
  let rand2 = Math.floor(Math.random() * (max - min) ) + min;
  return [rand1, rand2]
}

function twoColorSquares(){
    squares = ["🟥","🟧","🟨","🟩","🟦","🟪","🟫"];
    len = squares.length - 1;
    twoSquares = [squares[randTwo(0, len)[0]], squares[randTwo(0, len)[1]]];
    while (twoSquares[0] === twoSquares[1]){
        twoSquares = [squares[randTwo(0, len)[0]], squares[randTwo(0, len)[1]]];
    }
    return twoSquares
}

function printAsciiResults(){
    let i = 0;
    for (;i < resultsArray.length; i++){
        squares = twoColorSquares();
        sq1 = squares[0];
        sq2 = squares[1];
        ideo1 = resultsArray[i][0][0]
        ideo1Value = resultsArray[i][0][1]
        ideo2 = resultsArray[i][1][0]
        ideo2Value = resultsArray[i][1][1]
        neutralValue = resultsArray[i][2][1]
        total = neutralValue + ideo1Value + ideo2Value
        if (isNaN(total) || total === 0){neutralValue = 100;}
        let i1 = document.createElement("p");
        i1.innerHTML = sq1 + " " + ideo1.toUpperCase() + ` ${ideo1Value}%`;
        document.getElementById("ideo1-box").appendChild(i1)
        let i2 = document.createElement("p");
        i2.innerHTML = `${ideo2Value}% ` + ideo2.toUpperCase() + " " + sq2;
        document.getElementById("ideo2-box").appendChild(i2)
        let p = document.createElement("p");
        p.innerHTML = (sq1.repeat(ideo1Value / 4) + "🔳".repeat(neutralValue / 4) + sq2.repeat(ideo2Value / 4));
        document.getElementById("charges-box").appendChild(p);
    }
}

function resultsMain(){
    console.log("Quiz terminé !");
    hideQuiz()
    createResults()
    printAsciiResults()
    showResultsBox()
}

// function called by the buttons
function questionAnswered(answer){
    if (questions[activeQuestion][2]){ // if the answer should be reversed for this question (specified in question)
        if (answer === "yes"){answer = "no"}else if (answer ==="no"){answer = "yes"}
        if (answer === "half-yes"){answer = "half-no"}else if (answer ==="half-no"){answer = "half-yes"}
    }
    switch (answer){
        case "yes":
            questions[activeQuestion][1][0] += 2;
            break;
        case "half-yes":
            questions[activeQuestion][1][0] += 1;
            questions[activeQuestion][1][2] += 1;
            break;
        case "no":
            questions[activeQuestion][1][1] += 2;
            break;
        case "half-no":
            questions[activeQuestion][1][1] += 1;
            questions[activeQuestion][1][2] += 1;
            break;
        case "neutral":
            questions[activeQuestion][1][2] += 2;
    }
    console.log("Answer taken into account.")
    console.log(ideologies)
    activeQuestion++;
    if (activeQuestion === questions.length){
        resultsMain()
        return;
    }
    changeQuestion()
}

// Initializes the first question
changeQuestion();