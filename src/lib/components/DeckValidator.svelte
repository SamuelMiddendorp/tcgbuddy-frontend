<script lang="ts">
let valid: boolean = false;
let cardCount: number;
    export let deck;
    $:{
       valid = validateDeck(deck); 
    }
    let validateDeck = (deckToCheck: any) => {
        cardCount = 0;
        deckToCheck.cardList.forEach(card => {
            cardCount += card.count;
        });
        return cardCount == 60;
    }
</script>
<h2>
    Validations:
</h2>
<div>valid: {valid}; card count: {cardCount};legality: legal</div>