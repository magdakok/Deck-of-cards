const myDeck = {
    deck: [],
    suits: ['heart', 'diamond', 'spade', 'club'],
    values: ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    initializeDeck() {
        const deck = []; 
        for (let value of this.values) {
            for (let suit of this.suits) {
                deck.push({value,suit});
            }
        }
        this.deck = deck;
    }
}