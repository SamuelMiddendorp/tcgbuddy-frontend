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
        grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
        grid-auto-rows: minmax(10em, max-content);
    }
    .deck-container h1 {
        margin-bottom: 1em;
    }
    .deck-descriptor h2 {
        margin-bottom: 1em;
    }
    .deck-descriptor{
        position: relative;
        margin-right: 1em;
        margin-bottom: 1em;
        padding: 1em;
        background-color: var(--inner-panel-color);
        border-radius: var(--border-radius);
    }
    .deck-descriptor::before{
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0px;
        height: 1em;
        width: 1em;
        border-top-right-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
        background-color: var(--statement-color);
    }
</style>
