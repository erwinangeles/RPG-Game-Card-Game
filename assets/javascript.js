let gameover = false;
let userAlreadyPickedPokemon = false;
let userAlreadyPickedEnemy = false;
let winCounter = 0;

const Pokemon ={
    Pikachu: {name: 'Pickachu', health: 115, attack: 20,userPicked: false, defeated: false},
    Charmander: {name: 'Charmander', health: 135, attack: 25,userPicked: false, defeated: false},
    Squirtle: {name: 'Squirtle', health: 80, attack: 10, userPicked: false, defeated: false},
    Bulbasaur: {name: 'Bulbasaur', health: 120, attack: 15, userPicked: false, defeated: false},
    // Jigglypuff: {name: 'Jigglypuff', health: 100, attack: 15, userPicked: false,defeated: false},
    // Snorlax: {name: 'Snorlax', health: 100, attack: 25, userPicked: false,defeated: false},
}

const Player1 ={
    name: '',
    health: 0,
    attack: 0,
    defeated: false,
}
let Player2 ={
    name: '',
    health: 0,
    attack: 0,
    defeated: false,
}

function startGame(){
    // Player1.name = Pokemon.Pikachu.name;
    // Pokemon.Pikachu.userPicked = true, //don't forget to set that the user picked the pokemon so it doesn't get counted in the nextFighter() function
    // Player2.name = Pokemon.Charmander.name;
    // alert(Player1.name);
    // alert(Player2.name);
    $('#pikachu_hp').append(`${Pokemon.Pikachu.health}`);
    $('#charmander_hp').append(`${Pokemon.Charmander.health}`);
    $('#squirtle_hp').append(`${Pokemon.Squirtle.health}`);
    $('#bulbasaur_hp').append(`${Pokemon.Bulbasaur.health}`);
    $('#battleMessage').html(`<p>Ready to battle? Pick your Pokemon!</p>`);

}
function selectEnemy(word){
    if (userAlreadyPickedEnemy == false){
        let pokemon = word;
        if(pokemon == 'pikachu'){
            userAlreadyPickedEnemy = true; //sets value so you can't pick another pokeman
            Player2.name = Pokemon.Pikachu.name;
            Player2.attack = Pokemon.Pikachu.attack;
            Player2.health = Pokemon.Pikachu.health;
            divPlayer2_pokemon.innerHTML = "<img src='assets/images/pikachu.png'/>";
            $('#divPlayer2_pokemon').append(`<div class="carousel-caption" id="divPlayer2_hp">HP: ${Pokemon.Pikachu.health}</div>`)
            $('#divPlayer2_hp').append(`<br>Attack: ${Pokemon.Pikachu.attack}`);
            $('#pikachu').hide();
            $('#battleMessage').html(`<p>${Player2.name} has been sent out. Click attack to battle!</p>`);
        }else if(pokemon == 'charmander'){
            userAlreadyPickedEnemy = true;  //sets value so you can't pick another pokeman
            Player2.name = Pokemon.Charmander.name;
            Player2.attack = Pokemon.Charmander.attack;
            Player2.health = Pokemon.Charmander.health;
            divPlayer2_pokemon.innerHTML = "<img src='assets/images/charmander.png'/>";
            $('#divPlayer2_pokemon').append(`<div class="carousel-caption" id="divPlayer2_hp">HP: ${Pokemon.Charmander.health}</div>`)
            $('#divPlayer2_hp').append(`<br>Attack: ${Pokemon.Charmander.attack}`);
            $('#charmander').hide();
            $('#battleMessage').html(`<p>${Player2.name} has been sent out. Click attack to battle!</p>`);
        }else if(pokemon == 'squirtle'){
            userAlreadyPickedEnemy = true;  //sets value so you can't pick another pokeman
            Player2.name = Pokemon.Squirtle.name;
            Player2.attack = Pokemon.Squirtle.attack;
            Player2.health = Pokemon.Squirtle.health;
            divPlayer2_pokemon.innerHTML = "<img src='assets/images/squirtle.png'/>";
            $('#divPlayer2_pokemon').append(`<div class="carousel-caption" id="divPlayer2_hp">HP: ${Pokemon.Squirtle.health}</div>`)
            $('#divPlayer2_hp').append(`<br>Attack: ${Pokemon.Squirtle.attack}`);
            $('#squirtle').hide();
            $('#battleMessage').html(`<p>${Player2.name} has been sent out. Click attack to battle!</p>`);
        }else if(pokemon == 'bulbasaur'){
            userAlreadyPickedEnemy = true;  //sets value so you can't pick another pokeman
            Player2.name = Pokemon.Bulbasaur.name;
            Player2.attack = Pokemon.Bulbasaur.attack;
            Player2.health = Pokemon.Bulbasaur.health;
            divPlayer2_pokemon.innerHTML = "<img src='assets/images/bulbasaur.png'/>";
            $('#divPlayer2_pokemon').append(`<div class="carousel-caption" id="divPlayer2_hp">HP: ${Pokemon.Bulbasaur.health}</div>`)
            $('#divPlayer2_hp').append(`<br>Attack: ${Pokemon.Bulbasaur.attack}`);
            $('#bulbasaur').hide();
            $('#battleMessage').html(`<p>${Player2.name} has been sent out. Click attack to battle!</p>`);
        }
    }

}
function attackMove(){

   if(gameover == false && userAlreadyPickedPokemon == true && userAlreadyPickedEnemy == true){
    Player2.health -= Player1.attack; //User Attacks
    Player1.health -= Player2.attack; //Computer Attacks
    
    evaluateHealth(); // evaluate health
   
    
    $('#battleMessage').html(`<p><b>${Player1.name}</b> attacked for ${Player1.attack} damage, and <b>${Player2.name}</b> attacked back for ${Player2.attack}</p>`)
    
    //updates the hp and attack per attack
    $('#divPlayer1_hp').text(`HP: ${Player1.health}`)
    $('#divPlayer1_hp').append(`<br>Attack: ${Player1.attack}`);

    $('#divPlayer2_hp').text(`HP: ${Player2.health}`)
    $('#divPlayer2_hp').append(`<br>Attack: ${Player2.attack}`);

    // $('#divPlayer1_pokemon').append(`<div class="carousel-caption" id="divPlayer1_hp">${Player1.health}</div>`);
    // $('#divPlayer2_pokemon').append(`<div class="carousel-caption" id="divPlayer1_hp">${Player2.health}</div>`);

    if (Player2.defeated == true){
        $('#battleMessage').html(`<p>${Player2.name} has fainted. Select a new enemy</p>`);
        resetEnemy();
    }
   isUserDefeated(); //check if the user lost
}
    
}

function setPokemon(word){
    if (userAlreadyPickedPokemon == false){
        let pokemon = word;
        if(pokemon == 'pikachu'){
            userAlreadyPickedPokemon = true; //sets value so you can't pick another pokeman
            Player1.name = Pokemon.Pikachu.name;
            Player1.attack = Pokemon.Pikachu.attack;
            Player1.health = Pokemon.Pikachu.health;
            Pokemon.Pikachu.userPicked = true;
            divPlayer1_pokemon.innerHTML = "<img src='assets/images/pikachu.png'/>";
            $('#divPlayer1_pokemon').append(`<div class="carousel-caption" id="divPlayer1_hp">HP: ${Pokemon.Pikachu.health}</div>`)
            $('#divPlayer1_hp').append(`<br>Attack: ${Pokemon.Pikachu.attack}`);
            $('#pikachu').hide();
            $('#pokemon_selections').addClass('danger-box')
            $('#pokemon_selections').prepend('<h3>Select an Enemy</h3>');
            $('#battleMessage').html(`<p>Go ${Player1.name}, I choose you! Now pick your enemy.</p>`);
        }else if(pokemon == 'charmander'){
            userAlreadyPickedPokemon = true;  //sets value so you can't pick another pokeman
            Player1.name = Pokemon.Charmander.name;
            Player1.attack = Pokemon.Charmander.attack;
            Player1.health = Pokemon.Charmander.health;
            Pokemon.Charmander.userPicked = true;
            divPlayer1_pokemon.innerHTML = "<img src='assets/images/charmander.png'/>";
            $('#divPlayer1_pokemon').append(`<div class="carousel-caption" id="divPlayer1_hp">HP: ${Pokemon.Charmander.health}</div>`)
            $('#divPlayer1_hp').append(`<br>Attack: ${Pokemon.Charmander.attack}`);
            $('#charmander').hide();
            $('#pokemon_selections').addClass('danger-box')
           $('#pokemon_selections').prepend('<h3>Select an Enemy</h3>');
           $('#battleMessage').html(`<p>Go ${Player1.name}, I choose you! Now pick your enemy.</p>`);
        }else if(pokemon == 'squirtle'){
            userAlreadyPickedPokemon = true;  //sets value so you can't pick another pokeman
            Player1.name = Pokemon.Squirtle.name;
            Player1.attack = Pokemon.Squirtle.attack;
            Player1.health = Pokemon.Squirtle.health;
            Pokemon.Squirtle.userPicked = true;
            divPlayer1_pokemon.innerHTML = "<img src='assets/images/squirtle.png'/>";
            $('#divPlayer1_pokemon').append(`<div class="carousel-caption" id="divPlayer1_hp">HP: ${Pokemon.Squirtle.health}</div>`)
            $('#divPlayer1_hp').append(`<br>Attack: ${Pokemon.Squirtle.attack}`);
            $('#squirtle').hide();
            $('#pokemon_selections').addClass('danger-box')
           $('#pokemon_selections').prepend('<h3>Select an Enemy</h3>');
           $('#battleMessage').html(`<p>Go ${Player1.name}, I choose you! Now pick your enemy.</p>`);
        }else if(pokemon == 'bulbasaur'){
            userAlreadyPickedPokemon = true;  //sets value so you can't pick another pokeman
            Player1.name = Pokemon.Bulbasaur.name;
            Player1.attack = Pokemon.Bulbasaur.attack;
            Player1.health = Pokemon.Bulbasaur.health;
            Pokemon.Bulbasaur.userPicked = true;
            divPlayer1_pokemon.innerHTML = "<img src='assets/images/bulbasaur.png'/>";
            $('#divPlayer1_pokemon').append(`<div class="carousel-caption" id="divPlayer1_hp">HP: ${Pokemon.Bulbasaur.health}</div>`)
            $('#divPlayer1_hp').append(`<br>Attack: ${Pokemon.Bulbasaur.attack}`);
            $('#bulbasaur').hide();
            $('#pokemon_selections').addClass('danger-box');
            $('#pokemon_selections').prepend('<h3>Select an Enemy</h3>');
            $('#battleMessage').html(`<p>Go ${Player1.name}, I choose you! Now pick your enemy.</p>`);
        }
    }else if(userAlreadyPickedPokemon ==true){
        selectEnemy(word)
    }
}

function evaluateHealth(){
    if(gameover == false){
        if(Player1.health == 0 && Player2.health == 0){
            alert('Draw!');
            gameover = true;
        }else if(Player1.health <= 0){
            gameover = true;
            alert('You Lose!');
         }else if(Player2.health <= 0){
            Player2.defeated = true;
            winCounter++;
            levelUp();
        }
    }

}

function isUserDefeated(){
    if(gameover){
        $('#battleMessage').html(`<p>Your Pokemon Fainted. You Lose!</p>`);
        $('#controls').append(`<button class="btn btn-primary" onclick="location.reload()">New Game</button>`)
    }else if(winCounter == 3){
        $('#battleMessage').html(`<p>Congratulations, you win! <b>${Player1.name}</b> is the champion.</p>`);
        $('#controls').append(`<button class="btn btn-primary" onclick="location.reload()">New Game</button>`);
        $('#pokemon_selections').html('<h3>You Win!</h3>');
        $('#pokemon_selections').addClass('win-box')
    }
}

function resetEnemy(){
     Player2 ={
        name: '',
        health: 0,
        attack: 0,
        defeated: false,
    }
    userAlreadyPickedEnemy = false
}

function levelUp(){
    if(!gameover){
Player1.attack = Player1.attack * 3
alert('level up homie!')
 };
}
