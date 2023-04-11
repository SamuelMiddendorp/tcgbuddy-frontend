 <script lang="TS">
    export let card;
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

            <div data-count="{card.count}" class="decklist-card">
                <img src="/images/card_sample.jpg" alt="Cute pokemon" />
                <div class="card-info">
                    <p>{card.type}</p>
                    <p>Some info on the card</p>    
                    <p>Some more info on the card</p>    
                </div>
            </div>