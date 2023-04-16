 <script lang="ts">
    export let card: any;
    export let deleteFunc = (id: string) => {};
 </script>
 <style>
    .decklist-card {
        position: relative;
        display: grid;
        grid-template-columns: max-content 1fr;
        background-color: var(--inner-panel-color);
        padding: 1rem;
        font-size: 1rem;
        border-radius: var(--border-radius);
        margin-bottom: 1rem;
        margin-right: 1rem;
    }
    .decklist-card img{

        border-radius: 0.6rem;
        width: 100%;
        max-width: 12rem;
    }
    .decklist-card::after{
        content: attr(data-count);
        position: absolute;
        font-size: 1.6rem;
        display: grid;
        place-content: center;
        opacity: 0.6;
        top: 0;
        right: 0;
        background-color: var(--statement-color);
        width: 2rem;
        height: 2rem;
        border-radius: var(--border-radius);
    }
    .remove-button{
        cursor: pointer;
        position: absolute;
        font-size: 1.6rem;
        display: grid;
        place-content: center;
        opacity: 0.6;
        bottom: 0;
        right: 0;
        background-color: var(--statement-color);
        width: 2rem;
        height: 2rem;
        border-radius: var(--border-radius);
    }
    .card-info{
        position: relative;
        align-content: start;
        margin-left: 1rem;
        display: grid;
    }
    .card-info p{
        margin-bottom: 1rem;
        background-color: var(--inner-inner-panel-color);
        padding: 0.4rem;
        border-radius: var(--border-radius); 
    }
    </style>
            <div data-count="{card.count}" class="decklist-card shadow">
                <img src="/images/card_sample.jpg" alt="Cute pokemon" />
                <p on:click={() => deleteFunc(card.id)} class="remove-button">-</p>
                <div class="card-info">
                    <p class="shadow">{card.type}</p>
                    <p class="shadow">Some info on the card</p>    
                    <p class="shadow">Some more info on the card</p>    
                </div>
            </div>