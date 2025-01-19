// Script for Rock-Paper-Scissors game
document.addEventListener("DOMContentLoaded", () => {
    const choices = ["rock", "paper", "scissors"];
    const choiceButtons = document.querySelectorAll(".choice");
    const playerChoiceSpan = document.getElementById("player-choice");
    const computerChoiceSpan = document.getElementById("computer-choice");
    const resultSpan = document.getElementById("result");
    const restartButton = document.getElementById("restart");
  
    // Event listener for player's choice
    choiceButtons.forEach(button => {
      button.addEventListener("click", () => {
        const playerChoice = button.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);
  
        // Update UI
        playerChoiceSpan.textContent = capitalize(playerChoice);
        computerChoiceSpan.textContent = capitalize(computerChoice);
        resultSpan.textContent = result;
      });
    });
  
    // Restart game
    restartButton.addEventListener("click", () => {
      playerChoiceSpan.textContent = "-";
      computerChoiceSpan.textContent = "-";
      resultSpan.textContent = "-";
    });
  
    // Get random choice for the computer
    function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    // Determine the result
    function getResult(player, computer) {
      if (player === computer) {
        return "It's a tie!";
      }
      if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
      ) {
        return "You win!";
      }
      return "You lose!";
    }
  
    // Capitalize the first letter of a string
    function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });
  