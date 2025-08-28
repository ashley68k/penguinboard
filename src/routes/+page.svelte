<script lang="ts">
    import { onMount } from 'svelte';
	import InfoPanel from "$lib/InfoPanel.svelte";
	import InfoRow from "$lib/InfoRow.svelte";
	import { NormalizeCPUModel } from '$lib/utils/normalizeData';

    let sys: any = null;

	async function fetchsys() {
		const info = await fetch('/api/get-data');
		sys = await info.json();
	}

	onMount(() => {
        // run immediately on DOM attachment and then every x/1000 seconds after
		fetchsys();

		const interval = setInterval(fetchsys, 5000);

		return () => clearInterval(interval);
	});
</script>

<svelte:head>
    <meta name="darkreader-lock">
</svelte:head>

<div class="bg-white dark:bg-gray-900 min-h-screen">
    <header class="flex flex-col items-center p-4">
        <h1 class="text-4xl font-bold leading-relaxed
                bg-clip-text text-transparent   
                bg-gradient-to-r from-green-600 via-green-400 to-green-600">
            PenguinBoard
        </h1>
    </header>

    <main class="flex flex-row flex-wrap gap-4 justify-center">
        {#if sys}
            <InfoPanel panelName="CPU">
                <InfoRow dataLabel="Model:" dataValue='{NormalizeCPUModel(sys.cpu.manufacturer, sys.cpu.brand)}'/>
                <br>
                <InfoRow dataLabel="Base Clock:" dataValue='{sys.cpu.speed} GHz'/>
                <InfoRow dataLabel="Min/Avg/Max Freq:" dataValue='{sys.cpuCurrentSpeed.min.toFixed(2)} | {sys.cpuCurrentSpeed.avg.toFixed(2)} | {sys.cpuCurrentSpeed.max.toFixed(2)} GHz'/>
                <br>
                <InfoRow dataLabel="Current Temperature:" dataValue='{sys.cpuTemperature.main} °C'/>
                <br>
                <InfoRow dataLabel="Cores:" dataValue={sys.cpu.physicalCores}/>
                <InfoRow dataLabel="Threads:" dataValue={sys.cpu.cores}/>
                <InfoRow dataLabel="Scaling Governor:" dataValue={sys.cpu.governor}/>
            </InfoPanel>
            <InfoPanel panelName="Memory">

            </InfoPanel>
            <InfoPanel panelName="Disk">
            </InfoPanel>
            <InfoPanel panelName="Network">
                
            </InfoPanel>
            <InfoPanel panelName="Processes">
                
            </InfoPanel>
        {/if}
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