<script lang="ts">
import Logo from '../lib/components/Logo.svelte';
import './layout.css';
    let panelOpen: boolean = true;

    function togglePanel(){
        const elem = document.querySelector<HTMLElement>('.function-navigator')!;
        if(panelOpen){
            elem.style.maxWidth = "2em";
            panelOpen = !panelOpen;
            return;
        }
        elem.style.maxWidth = "6em";
        panelOpen = !panelOpen;
    }
</script>

<svelte:head>
    <title>TCGbuddy</title>
</svelte:head>
<body>
    <div class="layout-container">
        <div class="header panel">
            <div class="logo">
                <Logo/>
            </div>
            <div class="session-controls">
                <a href="/">Profile</a>
                <a href="/">Help</a>
                <a href="/">Logout</a>
            </div>
        </div>
        <div class="function-navigator panel" on:click={() => togglePanel()}>
                <a href="/">Cards</a>
                <a href="/">Decks</a>
                <a href="/">News</a>
        </div>
        <div class="main-content panel">
            <slot />
        </div>
    </div>
</body>

