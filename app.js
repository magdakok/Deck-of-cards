const myDeck = {
    deck: [],
    drawnCards: [],
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
    },
    drawCard() {
        if (this.deck.length) {
            //pick random index
            const idx = Math.floor(Math.random()*this.deck.length);

            //remove random card from the deck
            const card = this.deck.splice(idx,1);

            //add picked card to drawnCards array
            this.drawnCards.push(...card);
        } else {
            console.log('No cards in the deck');
        }
    },
    //shuffles deck no matter how many cards are inside
    shuffleDeck() {
        if (this.deck.length) {
            const shuffledDeck= [];
            for (let i = 0; i<this.deck.length; i++){
            const idx = Math.floor(Math.random()*this.deck.length);
            shuffledDeck.push(this.deck[idx]);
        }
        console.log(shuffledDeck);
        this.deck = shuffledDeck;
        } else {
            console.log('No cards in the deck');
        }
    }
}