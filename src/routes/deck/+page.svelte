<h1>Decks:</h1>
<div class="decks-container">
{#each Array(5) as _, index (index)}
<div>
    <h2>Deck{index}</h2>    
    </div>
{/each}
</div>
<style>
    .decks-container{
        margin-top: 1em;
        display: grid;
        grid-auto-flow: column;
    }
</style>