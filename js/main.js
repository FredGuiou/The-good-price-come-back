function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var game = {
        price: randomNumber(10, 20),
        attemps: 0,
        score: []
}

function play(searchedNumber) {
    
    var enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));
    while (enteredNumber !== searchedNumber) {
        
        if (enteredNumber < searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        }
        else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        
        game.attemps += 1;
    }
    alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + game.attemps);
    game.score.push(game.attemps);

    var choice = confirm("Tu veux rejouer ?");
    if(choice === true) {
    game.attemps = 0
    play(game.price)
    } else {
        alert("A bientôt !")
    }
}

play(game.price)

console.log(game)