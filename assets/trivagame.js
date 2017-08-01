	


function game(){
	var gameMusic = document.createElement("audio")
		gameMusic.setAttribute("src", "Assets/music.mp3");
	
	var coinSound = document.createElement("audio")
		coinSound.setAttribute("src", "Assets/coin.mp3");
	
	var lossSound = document.createElement("audio")
		lossSound.setAttribute("src", "Assets/loss.mp3");
	
	var complete = document.createElement("audio")
		complete.setAttribute("src", "Assets/complete.mp3");
	
	var pipeSound = document.createElement("audio")
		pipeSound.setAttribute("src", "Assets/pipe.mp3");

    var intervalId;
	
	var index = 0;
	
	var running = false;
	
	var score = 11;

	var winLoseSituation = false;

	var canClick = true;

	gameMusic.setAttribute("src", "Assets/music.mp3");
	function gameStart(){
		if(winLoseSituation !== true){
			gameMusic.play();
			gameMusic.volume = 0.1;
		}
	
    	clock.start();

		$("#question").html(QandA[index].question);
		$("#a").html(QandA[index].choiceA);
		$("#b").html(QandA[index].choiceB);
		$("#c").html(QandA[index].choiceC);
		$("#d").html(QandA[index].choiceD);
		var answer = QandA[index].answer;
	};	

	function next(){
		
		
		
		index++;

		clock.stop();
		
		setTimeout (function() {
			clock.reset();

			gameStart();

			$('#result').html('');
		}, 1000);

		if(index == 11){
			gameMusic.pause();
			gameMusic.currentTime =0;
			complete.play();
			complete.volume = 0.1;
			winLoseSituation = true;
			
			$('#container').html('<p>You have reached the end!</p><br><p>you got ' + score + ' of of 10 right</p><br><p> click here to play again!');
			$('#container').on("click", function(){
				game();
			});
		};
	};

	// array that contains all of the questions and answers objects
	var QandA = [
		{	//0
		question :'What game was featured in the final scene of the movie the wizard?',
			choiceA :'Metroid',
			choiceB :'Sonic The Hedgehog',
			choiceC :'Super Mario Bros. 3',
			choiceD :'The Legend of Zelda',
			answer:'c'
		},{	//1
		question :'What was the first video game based on a movie?',
			choiceA :'Death Race',
			choiceB :'E.T. The Extraterrestial',
			choiceC :'Star Wars: The Arcade Game',
			choiceD :'Raiders of the Lost Ark',
			answer:'a'
		},{	//2
		question :'What does Ken from Street Figher shout when he does his "Rising Dragon Fist" move?',
			choiceA :'Hadoken!',
			choiceB :'Shoryuken!',
			choiceC :'Sonic Boom!',
			choiceD :'Kame-Hame-Ha!',
			answer:'b'
		},{	//3
		question :'How many levels are in the orginal arcade version of Pac-Man?',
			choiceA :'100',
			choiceB :'999',
			choiceC :'200',
			choiceD :'256',
			answer:'d'
		},{ //4
		question :"What is Super Mario's last name?",
			choiceA :'Luigi',
			choiceB :'Mario',
			choiceC :'Nintendo',
			choiceD :'Toadstool',
			answer:'b'
		},{ //5
		question :'What is the Best selling Video Game Console of all time?',
			choiceA :'Nintedo Entertainment System',
			choiceB :'Nintendo DS',
			choiceC :'Sony Playstation 2',
			choiceD :'Sony Playstation',
			answer: 'c'
		},{ //6
		question :'What was the first handheld gaming console?',
			choiceA :'Atari Lynx',
			choiceB :'Nintendo Game Boy',
			choiceC :'NEC TurboExpress',
			choiceD :'Milton Bradley Microvision',
			answer: 'd'
		},{ //7
		question :'Why was the Atari game "adventure" considered groundbreaking when it was released?',
			choiceA :'It was the first Game to have an "easter egg"',
			choiceB :'It was the first game to show blood',
			choiceC :'It was the first console RPG',
			choiceD :'It was the first game to have dialouge',
			answer: 'a'
		},{ //8
		question :'What was the name of the video game console jointly developed by both Nintendo and Phillips?',
			choiceA :'3DO',
			choiceB :'CDX',
			choiceC :'CD-i',
			choiceD :'PSX',
			answer: 'c'
		},{ //9
		question :'What was the first arcade game to have polygon based graphics?',
			choiceA :'Winning Run',
			choiceB :'I,Robot',
			choiceC :'Virtua Fighter',
			choiceD :'Virtua Racing',
			answer: 'b'
		},{ //10
		question :"What is Nintendo's worst selling console?",
			choiceA :'Wii U',
			choiceB :'GameCube',
			choiceC :'Virtual Boy',
			choiceD :'GameBoy Color',
			answer: 'c'
		}
	];
	// clock object

  	var clock = {

  		time: 15,
  

	  	reset: function() {
	  		clearInterval(intervalId);
	    	clock.time = 15;
	    	$("#display").html('15');

	      	running = false;
	  	},

	  
	  	start: function() {
	    
	    	if(running == false){
	    		// DONE: Use setInterval to start the count here.
	    		intervalId = setInterval(clock.count, 1000);

	    		running = true;
	  		};
	  	},

	  	stop: function() {

	    	// DONE: Use clearInterval to stop the count here.
	    	clearInterval(intervalId);
	    	
	    	running = false;
	  	},
	 
	  	count: function() {
			
	    	clock.time--;
	    	
	    	if (clock.time === 0){
	    		$('#result').html('Whoops! You ran out of time!');
	    		score--;
	    		next();
			}
			
			$("#display").html(clock.time);
		},
	};
	
	$(".choices").on("click", function(){
		
		//Pull the id off of "this"
			var choice = $(this).attr("id");
			//Compare to answer
			if(choice === QandA[index].answer){
				coinSound.play();
				console.log(coinSound)
				$('#result').html('Correct!');

			}else {
				lossSound.play();
				$('#result').html("Sorry, that's wrong");
				score--;
			}
		//next
		
		next();

	});
	
	$('#startGame').on("click", function() {
		index = 0;
		score = 11;
		winLoseSituation = false;
		gameStart();
	});
};
game();	




