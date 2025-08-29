<script lang="ts">
    import { onMount } from 'svelte';

	import CpuPanel from '$lib/Panels/CPUPanel.svelte';
	import MemPanel from '$lib/Panels/MemPanel.svelte';
	import NetworkPanel from '$lib/Panels/NetworkPanel.svelte';
    import SystemPanel from '$lib/Panels/SystemPanel.svelte';
	import PartitionPanel from '$lib/Panels/PartitionPanel.svelte';

    // Get dynamic and static data separately, no reason to continually query data which doesn't change.
    // si.getStaticData and getDynamicData are unsuitable as they return all data at once.
    // Therefore, for the static and dynamic endpoints, use the standard si.get() with caution.

    let info: { dynamic: any, static: any } = { 
        dynamic: null,
        static: null
    };

    let refreshInterval = 5 * 1000;

	async function fetchDynamic() {
		const dynamicInfo = await fetch('/api/get-dynamic');
		info.dynamic = await dynamicInfo.json();
	}

    async function fetchStatic() {
		const staticInfo = await fetch('/api/get-static');
		info.static = await staticInfo.json();
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
        {#if info.dynamic && info.static}
            <CpuPanel {info}/> 
            <MemPanel {info}/>
            <SystemPanel {info}/>

            {#each [...info.static.fsSize].sort((a, b) => a.fs.localeCompare(b.fs)) as fileSys, idx}
                {#if fileSys.fs != "efivarfs"}
                    <PartitionPanel fs={fileSys} name='Partition #{idx+1}'/>
                {/if}
            {/each}

            {#each info.static.networkInterfaces as iface, idx}
                <NetworkPanel {iface} name='Interface #{idx+1}'/>
            {/each}
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