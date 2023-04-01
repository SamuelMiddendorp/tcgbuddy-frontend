<script lang="ts">
    export let data;
    console.log(data);

</script>

<body>
    <h2>Card name: {data.card.name}</h2>
    <h2>Card hp: {data.card.hp}</h2>
    <img src="{data.card.images.small}" alt="cute pokemon"/>
</body>