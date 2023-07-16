// Questions that will be asked
const Questions = [{
	q: "What is a credit score ",
	a: [{ text: "A way people determine if you have money or not.", isCorrect: false, isSelected: false },
	{ text: "A credit score will determien if you get a job or not", isCorrect: false },
	{ text: "A credit score is a value that represents your history of punctual repayments on credit accounts, but also the total debt owed, the length of time you have had debt and the number of recent credit applications. ", isCorrect: true }
]

},
{
	q: "Why is it important to check your credit profile regularly?",
	a: [{ text: "You should check your credit score often to see if qualify to buy a house.", isCorrect: false },
	{ text: "You should check your credit score often to see if you can buy food.", isCorrect: false },
	{ text: "You should check your credit profile often to ensure there are no faulty entries or suspicious activities on your record.", isCorrect: true }
	]

},
{
	q: "Who uses my credit score and why?",
	a: [{ text: "Your parents so that they can see if you can pay them rent.", isCorrect: false, isSelected: false },
	{ text: "Your employer to see if you a reliable person to employ.", isCorrect: false },
	{ text: "Prospective lenders and credit providers use your credit score to determine your ability to repay them. ", isCorrect: true }
	]

},
{
	q: "What is a credit report?",
	a: [{ text: "A credit report is a more comprehensive summary of your credit history and credit score, detailing when and where you have applied for credit in the past 24 months, the current balance of your credit lines and the monthly instalment. ", isCorrect: true, isSelected: true },
	{ text: "A credit report is a way to see how much money you have.", isCorrect: false },
	{ text: "A credit report is a way to see if you have debt.", isCorrect: false}
	]

},
{
	q: "How can I maintain or improve my credit score?",
	a: [{ text: "You can maintain it by taking a phone out on contract.", isCorrect: false },
	{ text: "The best way to improve a poor credit score, or maintain a good one, is to pay off your debts on time, in other words, to pay what is due on or before the due date. ", isCorrect: true },
	{ text: "By buying yourself food everyday.", isCorrect: false }
	]

},
{
	q: "What are the benefits of having a good credit score?",
	a: [{ text: "A good credit score will allow you to get cash back.", isCorrect: false },
	{ text: "A good credit score will allow you to buy yourself food everyday.", isCorrect: false },
	{ text: "A good credit score increases your likelihood of being offered credit when you apply for it and also gives you access to lower interest rates.", isCorrect: true }
	]

}]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
