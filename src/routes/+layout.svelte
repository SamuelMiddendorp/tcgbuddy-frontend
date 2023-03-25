<script lang="ts">
    import Logo from "../lib/components/Logo.svelte";
    import "./layout.css";
    let panelOpen: boolean = true;

    function togglePanel() {
        const elem = document.querySelector<HTMLElement>(
            ".function-navigator"
        )!;
        if (panelOpen) {
            elem.style.maxWidth = "2em";
            panelOpen = !panelOpen;
            return;
        }
        elem.style.maxWidth = "12em";
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
                <Logo />
            </div>
            <div class="session-controls">
                <a href="/">Profile</a>
                <a href="/">Help</a>
                <a href="/">Logout</a>
            </div>
        </div>
        <div class="function-navigator panel" on:click={() => togglePanel()}>
            <a href="/"
                ><span>CARDS</span>
                <svg
                    width="10.452028mm"
                    height="11.600512mm"
                    version="1.1"
                    viewBox="0 0 10.452028 11.600512"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                >
                    <g
                        transform="translate(-91.962555,-151.91574)"
                        fill="none"
                        stroke-linecap="round"
                        stroke-width="1.1"
                    >
                        <path
                            class="icon-1"
                            stroke="#fff"
                            d="m95.249999 153.45833h6.614581v9.26042h-6.614581z"
                        />
                        <path
                            class="icon-2"
                            stroke="#fff"
                            d="m92.60417 153.77158 6.50218-1.21422 1.6999 9.10306-6.502181 1.21422z"
                        />
                    </g>
                </svg>
            </a>
            <a href="/"
                ><span>CARDS</span>
                <svg
                    width="10.452028mm"
                    height="11.600512mm"
                    version="1.1"
                    viewBox="0 0 10.452028 11.600512"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                >
                    <g
                        transform="translate(-91.962555,-151.91574)"
                        fill="none"
                        stroke-linecap="round"
                        stroke-width="1.1"
                    >
                        <path
                            class="icon-1"
                            stroke="#fff"
                            d="m95.249999 153.45833h6.614581v9.26042h-6.614581z"
                        />
                        <path
                            class="icon-2"
                            stroke="#fff"
                            d="m92.60417 153.77158 6.50218-1.21422 1.6999 9.10306-6.502181 1.21422z"
                        />
                    </g>
                </svg>
            </a>
            <a href="/"
                ><span>CARDS</span>
                <svg
                    width="10.452028mm"
                    height="11.600512mm"
                    version="1.1"
                    viewBox="0 0 10.452028 11.600512"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                >
                    <g
                        transform="translate(-91.962555,-151.91574)"
                        fill="none"
                        stroke-linecap="round"
                        stroke-width="1.1"
                    >
                        <path
                            class="icon-1"
                            stroke="#fff"
                            d="m95.249999 153.45833h6.614581v9.26042h-6.614581z"
                        />
                        <path
                            class="icon-2"
                            stroke="#fff"
                            d="m92.60417 153.77158 6.50218-1.21422 1.6999 9.10306-6.502181 1.21422z"
                        />
                    </g>
                </svg>
            </a>
            <a href="/"
                ><span>CARDS</span>
                <svg
                    width="10.452028mm"
                    height="11.600512mm"
                    version="1.1"
                    viewBox="0 0 10.452028 11.600512"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                >
                    <g
                        transform="translate(-91.962555,-151.91574)"
                        fill="none"
                        stroke-linecap="round"
                        stroke-width="1.1"
                    >
                        <path
                            class="icon-1"
                            stroke="#fff"
                            d="m95.249999 153.45833h6.614581v9.26042h-6.614581z"
                        />
                        <path
                            class="icon-2"
                            stroke="#fff"
                            d="m92.60417 153.77158 6.50218-1.21422 1.6999 9.10306-6.502181 1.21422z"
                        />
                    </g>
                </svg>
            </a>
            <a href="/"
                ><span>CARDS</span>
                <svg
                    width="10.452028mm"
                    height="11.600512mm"
                    version="1.1"
                    viewBox="0 0 10.452028 11.600512"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                >
                    <g
                        transform="translate(-91.962555,-151.91574)"
                        fill="none"
                        stroke-linecap="round"
                        stroke-width="1.1"
                    >
                        <path
                            class="icon-1"
                            stroke="#fff"
                            d="m95.249999 153.45833h6.614581v9.26042h-6.614581z"
                        />
                        <path
                            class="icon-2"
                            stroke="#fff"
                            d="m92.60417 153.77158 6.50218-1.21422 1.6999 9.10306-6.502181 1.21422z"
                        />
                    </g>
                </svg>
            </a>
        </div>
        <div class="main-content panel">
            <slot />
        </div>
    </div>
</body>
