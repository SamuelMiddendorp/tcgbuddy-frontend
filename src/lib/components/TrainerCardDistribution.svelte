<script lang="ts">
   export let deck;
   let percentage = 0;
   $:{
     let totalCards = 0;
     let relevantCards = 0;
     deck.cardList.forEach(card => {
      totalCards += card.count
      if(card.type == "Trainer"){
         relevantCards += card.count
      }
     }); 
     percentage = Math.round(relevantCards / totalCards * 100) 
   }
</script>
<div class="cardAmountPie">{percentage}</div>