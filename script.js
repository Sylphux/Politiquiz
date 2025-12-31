// format [element1 points, element2 points, neutral points]
ideologies = {
    state_anarchy: [0, 0, 0],
    nature_culture: [0, 0, 0]
}

// format [question, ideology_versus, revert answer ?]
questions = [
    ["L'état tel que nous le connaissont doit être aboli", ideologies.state_anarchy, true],
    ["Avoir un gouvernement est le meilleur système démocratique possible", ideologies.state_anarchy, false]
]

activeQuestion = 0

// Program

function changeQuestion(){
    document.getElementById("question").innerHTML = questions[activeQuestion][0];
    document.getElementById("q_counter").innerHTML = `Question numéro ${activeQuestion + 1} sur ${questions.length}`
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
    console.log("Answer taken into account")
    console.log(ideologies)
    activeQuestion++;
    if (activeQuestion === questions.length){
        console.log("Quiz terminé !");
        return;
    }
    changeQuestion()
}

changeQuestion();