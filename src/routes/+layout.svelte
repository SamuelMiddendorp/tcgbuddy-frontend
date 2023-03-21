<script lang="ts">
import Logo from '../lib/components/Logo.svelte';
import './layout.css';
</script>

<svelte:head>
    <title>TCGbuddy</title>
</svelte:head>
<body>
    <div class="layout-container">
        <div class="header">
            <div class="logo">
                <Logo/>
            </div>
            <div class="session-controls">
                <a href="/">Profile</a>
                <a href="/">Help</a>
                <a href="/">Logout</a>
            </div>
        </div>
        <div class="function-navigator">
                <a href="/">Cards</a>
                <a href="/">Decks</a>
                <a href="/">News</a>
        </div>
        <div class="main-content">
            <slot />
        </div>
    </div>
</body>

