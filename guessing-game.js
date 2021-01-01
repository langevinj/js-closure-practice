function guessingGame() {
    let count = 0;
    let randomNum = Math.floor(Math.random() * (99 - 0 + 1));
    let won = false;
    
    return function guess(num) {
        count++;
        if(won) return "The game is over, you already won!"
        if(randomNum === num){
            won = true;
            return `You win! You found ${randomNum} in ${count} guesses.`
        } 
        if(randomNum > num) return `${num} is too low!`
        if(randomNum < num) return `${num} is too high!`
    };
}

module.exports = { guessingGame };
