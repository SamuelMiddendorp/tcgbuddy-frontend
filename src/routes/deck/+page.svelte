<h1>Decks:</h1>
<div class="decks-container">
{#each Array(20) as _, index (index)}
<a class="deck-link" href="deck/{index}">
    <h2>Deck{index}</h2>
    </a>    
{/each}
</div>
<style>
    .decks-container{
        width: 100%;
        margin-top: 1em;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
        margin-right: 1em;
        border-radius: var(--border-radius);
    }
    .deck-link{
        transition: all 0.2s ease-out;
        padding: 1em;
        min-height: 8em;
        min-width: 10em;
        margin-right: 1em;
        margin-bottom: 1em;
        background-color: var(--inner-panel-color);
        border-radius: var(--border-radius);
    }
    .deck-link:hover{
        border-radius: 1em;
        background-color: var(--statement-color);
    }
</style>