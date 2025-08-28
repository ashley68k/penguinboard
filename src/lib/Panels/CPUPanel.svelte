<script lang="ts">
    // Generic hardware panel component variables and imports
    import InfoPanel from "$lib/InfoPanel.svelte";
    import InfoRow from "$lib/InfoRow.svelte";

    export let dynInfo: any = null;
    export let statInfo: any = null;

    // Specific hardware panel imports/variables
    import { NormalizeCPUModel } from '$lib/utils/normalizeData';
</script>

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