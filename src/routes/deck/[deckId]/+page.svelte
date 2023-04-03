<script lang="ts">
    export let data: any;
</script>

<div class="deck-container">
    <div class="deck-descriptor">
        <h1>{data.deck.name}</h1>
        <p>{data.deck.description}</p>
    </div>
    {#each data.deck.stats as stat}
    <div class="deck-descriptor">
        <h2>{stat.type}</h2>
        <p>{stat.card}</p>
    </div>
    {/each}
</div>

<style>
    .deck-container {
        display: grid;
        grid-auto-columns: max-content;
        grid-auto-flow: column;
        grid-auto-rows: minmax(10em, max-content);
    }
    .deck-container h1 {
        margin-bottom: 1em;
    }
    .deck-descriptor h2 {
        margin-bottom: 1em;
    }
    .deck-descriptor{
        justify-self: center;
        margin-right: 1em;
        padding: 1em;
        background-color: var(--inner-panel-color);
        border-radius: var(--border-radius);
        border-right: 2px solid var(--statement-color);
    }
</style>
