function makeDeck() {
    const suits = ['heart', 'diamond', 'spade', 'club'];
    const values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']; 
    const deck = [];

    for (let value of values) {
        for (let suit of suits) {
            deck.push({value,suit});
        }
    }
    return deck;
}

//deck of 56 cards
const myDeck = makeDeck(); 