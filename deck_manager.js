// Initialize Deck Array inside GDevelop Variables
// Run once at scene start
let globalVars = runtimeScene.getGame().getVariables();
let deck = ["Strike", "Strike", "Defend", "Defend", "PowerUp"];
let discardPile = [];
let hand = [];

// Fisher-Yates Shuffle Algorithm Function
function shuffleDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initial Shuffle
shuffleDeck(deck);

// Function to draw a card (Can be triggered by a custom GDevelop event)
function drawCard(amount) {
    for (let i = 0; i < amount; i++) {
        if (deck.length === 0) {
            if (discardPile.length === 0) break; // No cards left anywhere
            deck = shuffleDeck([...discardPile]);
            discardPile = [];
        }
        
        let drawnCard = deck.pop();
        hand.push(drawnCard);
        
        // Visual feedback: Create Card Object in GDevelop scene
        let newCard = runtimeScene.createObject("CardObject");
        newCard.setPosition(100 + (hand.length * 80), 500);
        newCard.getVariables().get("CardName").setString(drawnCard);
    }
}

// Example: Draw 3 cards at the start of the player turn
drawCard(3);
