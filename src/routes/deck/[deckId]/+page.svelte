<script lang="ts">
    import DeckCard from "$lib/components/DeckCard.svelte";
    import DeckValidator from "$lib/components/DeckValidator.svelte";
    import CardDistribution from "$lib/components/CardDistribution.svelte";

    export let data: any;
</script>

<div class="deck-container">
    <div class="deck-descriptors">
        <div class="deck-descriptor">
            <h1>{data.deck.name}</h1>
            <p>{data.deck.description}</p>
            <p>Difficulty: {data.deck.difficulty}</p>
        </div>
        <div class="deck-descriptor">
            <DeckValidator deck={data.deck}/>
        </div>
        {#each data.deck.stats as stat}
            <div class="deck-descriptor">
                <h2>{stat.type}</h2>
                <p>{stat.card}</p>
            </div>
        {/each}
        <div class="deck-descriptor">
            <h2>Trainers</h2>
            <CardDistribution cardType={"Trainer"} deck={data.deck}/>
        </div>
        <div class="deck-descriptor">
            <h2>Pokemon</h2>
            <CardDistribution cardType={"Pokemon"} deck={data.deck}/>
        </div>
        <div class="deck-descriptor">
            <h2>Energy</h2>
            <CardDistribution cardType={"Energy"} deck={data.deck}/>
        </div>
    </div>
    <div class="deck-viewer">
        {#each data.deck.cardList as card}
                <DeckCard card={card}/>
        {/each}
    </div>
</div>

<style>
    .deck-viewer{
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
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
