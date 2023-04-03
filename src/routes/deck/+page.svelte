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
        width: 100%;
        margin-top: 1em;
        display: grid;
        grid-template-columns: repeat(auto-fit, 10em);
        grid-auto-flow: column;
        margin-right: 1em;
        border-radius: var(--border-radius);
        background-color: var(--inner-panel-color);
    }
    .deck-link:hover{
        border-radius: 2em;
        background-color: var(--statement-color);
    }
</style>