const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'|| userInput ==='paper' || userInput === 'scissors'){
      return userInput;
    } else {
      return "Invalid input"
    } 
  };
  
  
  const getComputerChoice = () => {
    choice =  Math.floor(Math.random(0,1) * 3)
   switch (choice){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
   }
  };
  
  const determineWinner = (userchoice, computerchoice) => {
  
    if (userchoice === computerchoice) {
      return 'A tie!';
    } if (userchoice === 'rock') {
        if (computerchoice === 'paper'){
          return "Sorry, computer is a winner!"}
        return "You won!"
    } if (userchoice === 'scissors' && computerchoice !== 'rock'){
        return 'User is a winner!';
    } else {
        return 'Computer is a winner!';
    }
  }

  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();
    
      