<script>
	import InfoPanel from "$lib/InfoPanel.svelte";
	import InfoRow from "$lib/InfoRow.svelte";
</script>

<svelte:head>
    <meta name="darkreader-lock">
</svelte:head>

<div class="bg-white dark:bg-gray-900 min-h-screen">
    <header class="flex flex-col items-center p-4">
        <h1 class="text-6xl font-bold leading-relaxed
                bg-clip-text text-transparent   
                bg-gradient-to-r from-green-600 via-green-400 to-green-600">
            Penguinboard
        </h1>
    </header>

    <main class="flex flex-row flex-wrap gap-4 justify-center">
        <InfoPanel panelName="CPU">
            
        </InfoPanel>
        <InfoPanel panelName="Memory">

        </InfoPanel>
        <InfoPanel panelName="Disk">
        </InfoPanel>
        <InfoPanel panelName="Network">
            
        </InfoPanel>
        <InfoPanel panelName="Processes">
            
        </InfoPanel>
    </main>

    <footer class="text-center py-4 mt-auto">
    <a 
        href="https://github.com/ashley68k/penguinboard" 
        target="_blank" 
        rel="nofollow"
        class="font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
    >
        GitHub
    </a>
    </footer>
</div>