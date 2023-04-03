<h1>Decks:</h1>
<div class="decks-container">
{#each Array(5) as _, index (index)}
<a class="deck-link" href="deck/{index}">
    <h2>Deck{index}</h2>
    </a>    
{/each}
</div>
<style>
    .decks-container{
        margin-top: 1em;
        display: grid;
        grid-auto-columns: minmax(20em, max-content);
        grid-auto-flow: column;
        grid-auto-rows: 20em;
        justify-content: start;
    }
    .deck-link{
        transition: all 0.2s ease-out;
        padding: 2em;
        margin-right: 1em;
        border-radius: var(--border-radius);
        background-color: var(--inner-panel-color);
    }
    .deck-link:hover{
        border-radius: 2em;
        background-color: var(--statement-color);
    }
</style>