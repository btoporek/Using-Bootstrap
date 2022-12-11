const fetchFact = () => {
  fetch("https://the-trivia-api.com/api/questions?limit=1")
    .then((r) => r.json())
    .then((triviaDataArray) => renderTrivia(triviaDataArray[0]));
};

const renderTrivia = (triviaObj) => {
  randomFactDiv.innerText = "";

  const questionPTag = document.createElement("h2");

  const answerPTag = document.createElement("h3");

  questionPTag.innerText = triviaObj.question;
  answerPTag.innerHTML = triviaObj.correctAnswer;

  randomFactDiv.append(questionPTag, "", answerPTag);
};

const getRandomFactBtn = document.querySelector(".random-btn");
const randomFactDiv = document.querySelector(".random-fact-div");
getRandomFactBtn.addEventListener("click", fetchFact);
