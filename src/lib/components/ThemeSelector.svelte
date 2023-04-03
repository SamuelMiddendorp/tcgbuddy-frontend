<script lang="ts">
    const setTheme = (theme: string) => {
        document.documentElement.style.setProperty('--background', `var(--background-${theme})`);
        document.documentElement.style.setProperty('--text-color', `var(--text-color-${theme})`);
        document.documentElement.style.setProperty('--outer-panel-color', `var(--outer-panel-color-${theme}`);
        document.documentElement.style.setProperty('--inner-panel-color', `var(--inner-panel-color-${theme}`);
    }
</script>
<style>
    div{
        position: fixed;
        top: 0;
        left: 0;
    }
    .light-selector{
        display: block;
        background-color: #efefef;
        width: 2em;
        height: 2em;
        border-top-right-radius: 100vw;
    }
    .dark-selector{
        display: block;
        border-bottom-right-radius: 100vw;
        width: 2em;
        height: 2em;
        background-color: #111;
    }
</style> 
<body>
    <div>
    <span on:click={() => setTheme('light')} class="light-selector"></span>
    <span on:click={() => setTheme('dark')} class="dark-selector"></span>
    </div>
</body>