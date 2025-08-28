<script lang="ts">
    // Generic hardware panel component variables and imports
    import InfoPanel from "$lib/InfoPanel.svelte";
    import InfoRow from "$lib/InfoRow.svelte";

    export let dynInfo: any = null;
    export let statInfo: any = null;
</script>

<InfoPanel panelName="Memory">
    <InfoRow dataLabel="Total Memory:" dataValue='{(dynInfo.mem.total / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
    <InfoRow dataLabel="Free Memory:" dataValue='{(dynInfo.mem.free / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
    <InfoRow dataLabel="Used Memory:" dataValue='{(dynInfo.mem.used / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
</InfoPanel>