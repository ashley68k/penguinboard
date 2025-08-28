<script lang="ts">
    // Generic hardware panel component variables and imports
    import InfoPanel from "$lib/InfoPanel.svelte";
    import InfoRow from "$lib/InfoRow.svelte";

    export let info: any = null;

    // Specific hardware panel imports/variables
    import { NormalizeCPUModel } from '$lib/utils/normalizeData';
</script>

<InfoPanel panelName="CPU">
    <InfoRow dataLabel="Model:" dataValue='{NormalizeCPUModel(info.static.cpu.manufacturer, info.static.cpu.brand)}'/>
    <br>
    <InfoRow dataLabel="Base Clock:" dataValue='{info.dynamic.cpu.speed} GHz'/>
    <InfoRow dataLabel="Min/Avg/Max Freq:" dataValue='{info.dynamic.cpuCurrentSpeed.min.toFixed(2)} | {info.dynamic.cpuCurrentSpeed.avg.toFixed(2)} | {info.dynamic.cpuCurrentSpeed.max.toFixed(2)} GHz'/>
    <InfoRow dataLabel="Current Temperature:" dataValue='{info.dynamic.cpuTemperature.main} °C'/>
    <InfoRow dataLabel="Current Load:" dataValue='{(info.dynamic.currentLoad.currentLoad).toFixed(2)}%'/>
    <InfoRow dataLabel="Cores:" dataValue={info.static.cpu.physicalCores}/>
    <InfoRow dataLabel="Threads:" dataValue={info.static.cpu.cores}/>
    <InfoRow dataLabel="Scaling Governor:" dataValue={info.dynamic.cpu.governor}/>
</InfoPanel>