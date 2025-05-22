//*Items for WAR card game:

/**
 * Deck
 * -52 cards
 *  -Rank ("name value")
 *  -Suit (heart/spade/club/diamond)
 *  -Values
 * -a way to shuffle
 * -a way to pass the cards to the players(Deck or game logic?)
 * 
 * Players (player class? or include in game logic?)
 * -Name?
 * -Score
 * -Hand
 * 
 * Logic to actually play tghe game...we can use a deck in any card game, but we're plaing WAR.
 * -Ways to compare the cards..number vaules in each card  * 
 */

//Deck class

/** SHould have:
 *  An array to store the cards
 *  An array to store all of the cards ranks
 *  An array to store all the card suits
 */

class Deck {
  constructor() {
    this.deck = [];
    this.ranks = [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King"
     ];
     this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
  }

    //A method to create a deck...iterate over our ranks/suits
    //push a new card... (as an object) into our constructors this.deck

  createDeck() {
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        let card = {
          name: `${this.ranks[j]} of ${this.suits[i]}`,
          value: j + 1
        }
        this.deck.push(card)
      }
    }
  }

  shuffleDeck() {
    for (let i = this.deck.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }  
  }

}


//*Class for a Game (Specifically our WAR game)
/** Needs:
 * - Deck...instatiate a new Deck inside of our Game class
 * 
 * - Create the deck, shuffle the deck, and pass the deck...
 * 
 * - Logic to play the game
 *   - Turn based, how many turns?
 *   - Do our players have a hand yet?
 *   - Control flow statement logic to decide who wins?
 * 
 * - 2 players
 *   - Hand
 *   - Score
 *   - Name 
 */

class Game {
  constructor() {
    this.player1 = {
      name: 'Player 1',
      score: 0,
      hand: []
    }
    this.player2 = {
      name: 'Player 2',
      score: 0,
      hand: []
    }
  }

  //*Method to play the game
  /*- Pass out cards ot our players
  */
  playGame(){
    //Instatiate a new deck, create a deck, then shuffle the deck
    const deck = new Deck
    deck.createDeck()
    deck.shuffleDeck()
    
    //*Action: As long as there are greater than 52 cards in the deck, shuffle the deck, and deal a card to each player.*//
    while (deck.deck.length !== 0) {

      this.player1.hand.push(deck.deck.shift())
      this.player2.hand.push(deck.deck.shift())
    }

    //Action: play the game. Each player will take 26 turns.

    for (let i =0; i < this.player1.hand.length; i++) {
      if (this.player1.hand[i].value > this.player2.hand[i].value) {
        this.player1.score ++
        console.log(`
        P1 Card: ${this.player1.hand[i].name}
        P2 Card: ${this.player2.hand[i].name}
        Player 1 wins a point!
        Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}         
        `)
      } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
        this.player2.score ++
        console.log(`
        P1 Card: ${this.player1.hand[i].name}
        P2 Card: ${this.player2.hand[i].name}
        Tie: No points awarded
        Player 2 wins a point!
        Current Score: p1: ${this.player1.score}, p2: ${this.player2.score}         
        `)
      }
    }

     if (this.player1.score > this.player2.score) {
      console.log(`
      Player 1 wins!
      Final Score: p1: ${this.player1.score}
                   p2: ${this.player2.score}
                   `)
    } else if (this.player2.score > this.player1.score) {
      console.log(`Player 2 wins!
      Final Score: p1: ${this.player1.score}
                   p2: ${this.player2.score}
      `)
    } else {
      console.log('Game tied')
    }
  }

}

const game = new Game
game.playGame()





//*console.log(deck.deck) to show the cards with values in the deck 52*//
//*console.log(deck.deck) to show the deck of cards is shuffled*//

