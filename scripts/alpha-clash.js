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