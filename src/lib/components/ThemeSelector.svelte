<script lang="ts">
    const setTheme = (lightTheme: boolean) => {
        let background = "#111";
        let textColor = "#efefef";
        let panelColor = "#222";
        if(lightTheme){ 
            background = "#efefef";
            textColor = "#111";
            panelColor = "#eaeaea";
        }
        document.documentElement.style.setProperty('--background', background);
        document.documentElement.style.setProperty('--main-link-color', textColor);
        document.documentElement.style.setProperty('--outer-panel-color', panelColor);

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
        background-color: #efefcf;
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
    <span on:click={() => setTheme(true)} class="light-selector"></span>
    <span on:click={() => setTheme(false)} class="dark-selector"></span>
    </div>
</body>