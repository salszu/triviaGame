window.onload=function(){
$("#triviaStart").on("click", startGame);

};



var score = 0;

//questions array
var questions = new Array();
		questions[0] = 'Throughout the Half Life series, who is the speechless main character you control?',
		questions[1] = 'In the game Doom, what planet and its moon(s) hold the facility that opened the portal to hell?',
		questions[2] = 'What genre of game did Wolfenstein set the precedent for on PC and console alike?',
		questions[3] = 'What is it called when a user changes original game files in order to create or change content?',
		questions[4] = 'What is GPU short for?';
//choices array
var possibleChoice = new Array();
		possibleChoice[0] = ['Solid Snake', 'Duke Nukem', 'Gordon Freeman','Deckard Cain'],
		possibleChoice[1] = ['Jupiter', 'Mars', 'Pluto','Earth'],
		possibleChoice[2] = ['RPG', 'MMORPG', 'RTS','FPS'],
		possibleChoice[3] = ['Mod', 'Ghost', 'Append','Graft'],
		possibleChoice[4] = ['Geographically Positioned Underwear', 'Graphic Processing Unit', 'Globally Processed Understanding','Gargantuan Porpoise Undertaking'];
//correct answer array	
var correctChoice = new Array();
		correctChoice[0] = ['Gordon Freeman'],
		correctChoice[1]=  ['Mars'],
		correctChoice[2] = ['FPS'],
		correctChoice[3] = ['Mod'],
		correctChoice[4] = ['Graphic Processing Unit'];
 

    //if (userChoice == correctChoice, score++)
	// target luckTimer ID and add a decrementing timer starting from 60
	var quiz = {
		startGame: function(){
			var timeLeft = 60, timer = setInterval(function(){
					$('#luckTimer').html(timeLeft--);
					if(timeLeft == 0) clearInterval(timer);
					alert("You have answered " + score + " questions correctly");

			},1000);

			var choiceGen = $('<input>');
			var questionGen = $('<p>').text(questions);

		}


	};
		
	


	// target quizHere ID and generate the 5 questions
	$('#questionOne')
	$('#questionTwo')
	$('#questionThree')
	$('#questionFour')
	$('#questionFive')

	//alert to score and end quiz after decrement timer from 60 goes to zero

	//if else statments regarding right and wrong answers

	//alert on completion of how many questions you got right

	

 
		if (){
			alert("");
			}
		else if(){
			;
			$("#").html();
			}
		else if(){
			;
			$("").html();
 			}
 		else{
			console.log("why isn't this working");
			};
	});	
	


//button to submit and end quiz 


//if else statments regarding right and wrong answers

//alert on completion of how many questions you got right
