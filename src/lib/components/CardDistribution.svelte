<script lang="ts">
   export let deck;
   export let cardType: string;
   let percentage = 0;
   $: {
      let totalCards = 0;
      let relevantCards = 0;
      deck.cardList.forEach((card) => {
         totalCards += card.count;
         if (card.type == cardType) {
            relevantCards += card.count;
         }
      });
      percentage = Math.round((relevantCards / totalCards) * 100);
   }
</script>

<div class="cardAmountPie" style="--p:{percentage}">{percentage}%</div>

<style>
   .cardAmountPie {
      transition: all 0.4s ease-out;
      position: relative;
      width: 50%;
      aspect-ratio: 1;
      display: inline-grid;
      place-content: center;
      margin: 1rem;
      z-index: 1;
      font-size: 1rem;
   }
   .cardAmountPie:before {
      transition: all 0.4s ease-out;
      content: "";
      position: absolute;
      border-radius: 50%;
      inset: 0;
      z-index: -1;
      border: 1px solid var(--statement-color);
      background: conic-gradient(var(--statement-color) calc(var(--p) * 1%), #0000 0);
   }
</style>
