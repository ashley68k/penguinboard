<script lang="ts">
    import { onMount } from 'svelte';
	import InfoPanel from "$lib/InfoPanel.svelte";
	import InfoRow from "$lib/InfoRow.svelte";
	import { NormalizeCPUModel } from '$lib/utils/normalizeData';

    // Get dynamic and static data separately, no reason to continually query data which doesn't change.
    // si.getStaticData and getDynamicData are unsuitable as they return all data at once.
    // Therefore, for the static and dynamic endpoints, use the standard si.get() with caution.

    let dynInfo: any = null;
    let statInfo: any = null;

    let refreshInterval = 5 * 1000;

	async function fetchDynamic() {
		const dynamicInfo = await fetch('/api/get-dynamic');
		dynInfo = await dynamicInfo.json();
	}

    async function fetchStatic() {
		const staticInfo = await fetch('/api/get-static');
		statInfo = await staticInfo.json();
	}

	onMount(() => {
        // run immediately on DOM attachment and then every x/1000 seconds after.
        // static only needs to be run once
        fetchStatic();

		fetchDynamic();

		const interval = setInterval(fetchDynamic, refreshInterval);

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
        <!--both start null while waiting for API, so you need to ensure both are initialized before displaying panels-->
        {#if dynInfo && statInfo}
            <InfoPanel panelName="CPU">
                <InfoRow dataLabel="Model:" dataValue='{NormalizeCPUModel(statInfo.cpu.manufacturer, statInfo.cpu.brand)}'/>
                <br>
                <InfoRow dataLabel="Base Clock:" dataValue='{dynInfo.cpu.speed} GHz'/>
                <InfoRow dataLabel="Min/Avg/Max Freq:" dataValue='{dynInfo.cpuCurrentSpeed.min.toFixed(2)} | {dynInfo.cpuCurrentSpeed.avg.toFixed(2)} | {dynInfo.cpuCurrentSpeed.max.toFixed(2)} GHz'/>
                <br>
                <InfoRow dataLabel="Current Temperature:" dataValue='{dynInfo.cpuTemperature.main} °C'/>
                <br>
                <InfoRow dataLabel="Cores:" dataValue={statInfo.cpu.physicalCores}/>
                <InfoRow dataLabel="Threads:" dataValue={statInfo.cpu.cores}/>
                <InfoRow dataLabel="Scaling Governor:" dataValue={dynInfo.cpu.governor}/>
            </InfoPanel>
            <InfoPanel panelName="Memory">
                <InfoRow dataLabel="Total Memory:" dataValue='{(dynInfo.mem.total / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
                <InfoRow dataLabel="Free Memory:" dataValue='{(dynInfo.mem.free / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
                <InfoRow dataLabel="Used Memory:" dataValue='{(dynInfo.mem.used / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
            </InfoPanel>
            <InfoPanel panelName="Disk">
            </InfoPanel>
            <InfoPanel panelName="Network">
                
            </InfoPanel>
            <InfoPanel panelName="Processes">
                
            </InfoPanel>
        {/if}
    </main>

    <footer class="text-center mt-auto">
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