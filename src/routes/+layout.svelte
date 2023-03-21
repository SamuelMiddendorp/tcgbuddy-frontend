<script lang="ts">

</script>
<svelte:head>
	<title>TCGbuddy</title>
</svelte:head>
<style>
   .layout-container{
        display: grid;
        grid-template-columns: max-content 1fr;
        grid-template-rows: max-content 1fr;
   } 
</style>
<body>
    <div class="layout-container">
        <div class="header">

        </div>
        <div class="function-navigator">

        </div>
        <div class="main-content">
            <slot/>
        </div>
    </div>
</body>