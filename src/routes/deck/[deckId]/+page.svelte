<script lang="ts">
    export let data: any;
</script>

<div class="deck-container">
    <div class="deck-descriptors">
        <div class="deck-descriptor">
            <h1>{data.deck.name}</h1>
            <p>{data.deck.description}</p>
            <p>Difficulty: {data.deck.difficulty}</p>
        </div>
        {#each data.deck.stats as stat}
            <div class="deck-descriptor">
                <h2>{stat.type}</h2>
                <p>{stat.card}</p>
            </div>
        {/each}
    </div>
    <div class="deck-viewer">
        {#each data.deck.cardList as card}
            <div data-count="{card.count}" class="decklist-card">
                <p>{card.id}</p>
                <img src="/images/card_sample.png" alt="Cute pokemon" />
            </div>
        {/each}
    </div>
</div>

<style>
    .deck-viewer {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
    .decklist-card {
        position: relative;
        background-color: var(--inner-panel-color);
        padding: 1rem;
        border-radius: var(--border-radius);
        margin-bottom: 1rem;
        margin-right: 1rem;
    }
    .decklist-card img{
        position: relative;
        max-width: 12rem;
        width: 100%;
    }
    .decklist-card::after{
        content: attr(data-count);
        position: absolute;
        font-size: 1.6rem;
        display: grid;
        place-content: center;

        top: 0;
        right: 0;
        background-color: var(--statement-color);
        width: 2rem;
        height: 2rem;
        border-radius: var(--border-radius);
    }
    .deck-descriptors {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        grid-auto-rows: minmax(10rem, max-content);
    }
    .deck-container h1 {
        margin-bottom: 1rem;
    }
    .deck-descriptor h2 {
        margin-bottom: 1rem;
    }
    .deck-descriptor {
        position: relative;
        margin-right: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;
        background-color: var(--inner-panel-color);
        border-radius: var(--border-radius);
    }
    .deck-descriptor::before {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0px;
        height: 1rem;
        width: 1rem;
        border-top-right-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
        background-color: var(--statement-color);
    }
</style>
