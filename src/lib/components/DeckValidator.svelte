<script lang="ts">
let valid: boolean = false;
    export let deck;
    $:{
        valid = deck.isValid
    }
</script>
<div>{valid};legal</div>