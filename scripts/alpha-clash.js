

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log(playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        // update score
        // get current score:
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // increase the score by 1
        const newScore = currentScore + 1;

        // show the updated score
        currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        // get the current life number 
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // reduce the life count
        const newLife = currentLife - 1;

        // display updated life
        currentLifeElement.innerText = newLife;
    }
}

// capture keyboard press 
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame() {
    // generate and get a random alphabet
    const alphabet = getARandomAlphabet();

    // set random alphabet to the playground screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color on randomly generated key
    setBackgroundColorById(alphabet);
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}