var questionsAndAnswers = [

	//Question 1
	{
		question: "Who is Ned Stark’s youngest child?",
		answers: [
		"-Sansa Stark",
		"-Rickon Stark",
		"-Bran Stark",
		"-Arya Stark"
		],
		correctAnswer: 1
	},

	//Question 2
	{
		question: "Who was responsible for King Joffrey’s murder?",
		answers: [
		"-Prince Oberyn Martell (The Red Viper)",
		"-Tyrion Lannister & Bronn the Sellsword",
		"-Olenna Tyrell and Petyr Baelish (Littlefinger)",
		"-Varys (The Spider)"
		],
		correctAnswer: 2
	},

	//Question 3
	{
		question: "What body of water separates Westeros from Essos?",
		answers: [
		"-The Arbor",
		"-The Seas of Dorne",
		"-The Shivering Sea",
		"-The Narrow Sea"
		],
		correctAnswer: 3
	},

	//Question 4
	{
		question: "During The Sack of Kings Landing, Mad King Aerys II gave Jamie Lannister strict orders to do what?",
		answers: [
		"-Surrender to Robert Baratheon and his army.",
		"-Find his grandson, Aegon and keep him safe at all costs.",
		"-Find Ned Stark and bring him to the throne room, alive.",
		"-Bring him Tywin Lannister’s head and burn the city to the ground."
		],
		correctAnswer: 3
	},

	//Question 5
	{
		question: "When Jon Snow arrives at The Wall in season one, what job is he originally given by Lord Commander Mormont?",
		answers: [
		"-Steward",
		"-Scout",
		"-Ranger",
		"-Builder"
		],
		correctAnswer: 0
	},

	//Question 6
	{
		question: "Where is The Red Priestess Melisandre from?",
		answers: [
		"-Valyria",
		"-Yi Ti",
		"-Asshai",
		"-Volantis"
		],
		correctAnswer: 2
	},

	//Question 7
	{
		question: "What is the name of the Night’s Watch brother who is beheaded by Ned Stark for Desertion, in the first episode of Game of Thrones?",
		answers: [
		"-Will",
		"-Waymar Royce",
		"-Gared",
		"Raff the Sweetling"
		],
		correctAnswer: 0
	},

	//Question 8 
	{
		question: "Who was Stannis Baratheon’s first choice as his Hand of the King?",
		answers: [
		"-Renly Baratheon",
		"-Alester Florent",
		"-Davos Seaworth",
		"-Ned Stark"
		],
		correctAnswer: 1	
	},

	//Question 9
	{
		question: "Who casts the final vote to make Jon Snow the Lord Commander of the Night’s Watch?",
		answers: [
		"-Maester Aemon",
		"-Samwell Tarly",
		"-Olly",
		"-None of the above"
		],
		correctAnswer: 0
	},

	//Question 10
	{
		question: 'What is the name of the Septa who walked Cersei naked through King’s Landing to atone for her sins, repeatedly chanting “shame?”',
		answers: [
		"-Septa Mordane",
		"-Septa Eglantine",
		"-Septa Unella",
		"-Septa Allysa"
		],
		correctAnswer: 2
	},

	//Bonus Question
	{
		question: "BONUS QUESTION: As of season 6, what is Daenerys Targaryen’s full title?",
		answers: [
		"-Daenerys Stormborn of the House Targaryen, First of Her Name, Queen of the Rhoynar and the First Men, Mhysa, Mother of Dragons and Breaker of Chains.",
		"-Daenerys Stormborn of the House Targaryen, First of Her Name, the Unburnt, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Breaker of Chains, and Mother of Dragons.",
		"-Daenerys Stormborn of the House Targaryen, Boaster of Titles, the Braggadocios, Queen of the Andals and the Eunuchs, Khaleesi of Those Shirtless Guys on Horses, Bane of the Slaveowners, and Mother of Dragons.",
		"-Daenerys Stormborn of the House Targaryen, First of Her Name, Queen of the Andals and the First Men, Khaleesi of the Great Grass Sea, Mhysa, and Mother of Dragons."
		],
		correctAnswer: 1
	}
	]; 

	var state = {
		currentQuestionIndex: 0,
		UsersCurrentScore: 0
	};

	var BEGIN_QUIZ_BUTTON = '#begin-button';
	var CURRENT_QUESTION_NUMBER = '#question-number';
	var FIRST_SCROLL = '#first-scroll'
	var SECOND_SCROLL = '#second-scroll';
	var THIRD_SCROLL = '#third-scroll'
	var QUESTION_BOX = '#question';
	var ANSWER = '.answer';
	var NEXT_BUTTON = "#next-button";

	function displayQuestion(index) {
		$(ANSWER).removeClass('highlighted');
		var currentQuestion = questionsAndAnswers[index].question;
		$(QUESTION_BOX).text(currentQuestion);
		var answers = questionsAndAnswers[index].answers;
		for (i = 0; i < answers.length; i++) {
			$('#answer-' + i).text(answers[i]);
		}
	}

// This is what starts everything. 
	$(document).ready(function() {

		// Setting event listeners
		$(BEGIN_QUIZ_BUTTON).on('click', function(event) {
			$(this).parent().addClass("hidden");
			$(SECOND_SCROLL).removeClass('hidden');
			displayQuestion(state.currentQuestionIndex);
		});

		$(NEXT_BUTTON).click(function(event) {
			state.currentQuestionIndex++;
			displayQuestion(state.currentQuestionIndex);
		});
		$(ANSWER).click(function(event) {
			$(ANSWER).removeClass('highlighted');
			$(this).addClass('highlighted');
			var selectedAnswerId= $(this).attr('id');
			var selectedAnswerIndex = selectedAnswerId.substr(selectedAnswerId.length - 1);

			if (Number(selectedAnswerIndex) === questionsAndAnswers[state.currentQuestionIndex].correctAnswer) {
				console.log("correct!");
			}
		});
	});

	// Main
	// 1. Show results after bonus
	// 2. Keep track of score. 

	// Bonus
	// 1. Feedback when clicking wrong answer. 
	// 2. highlight correct answer when user selects wrong answer

























