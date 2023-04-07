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
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        margin-right: 1rem;
        border-radius: var(--border-radius);
    }
    .deck-link{
        position: relative;
        transition: all 0.2s ease-out;
        padding: 1rem;
        min-height: 8rem;
        min-width: 8rem;
        margin-right: 1rem;
        justify-items: center;
        margin-bottom: 1rem;
        background-color: var(--inner-panel-color);
        border-radius: var(--border-radius);
    }
    .deck-link::before{
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        height: 1rem;
        width: 1rem;
        border-top-right-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
        background-color: var(--statement-color);
    }
    .deck-link:hover{
        border-radius: 1rem;
        background-color: var(--statement-color);
    }
</style>