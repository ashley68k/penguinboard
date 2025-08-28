<script lang="ts">
    // Generic hardware panel component variables and imports
    import InfoPanel from "$lib/InfoPanel.svelte";
    import InfoRow from "$lib/InfoRow.svelte";

    export let info: any = null;
</script>

<InfoPanel panelName="System">
    <InfoRow dataLabel='Kernel:' dataValue='{info.static.osInfo.release} {info.static.osInfo.kernel}'/>
    <InfoRow dataLabel='CPU Architecture:' dataValue={info.static.osInfo.arch}/>
    <InfoRow dataLabel='Hostname:' dataValue={info.static.osInfo.hostname}/>
    <InfoRow dataLabel='Uses UEFI?' dataValue='{(info.static.osInfo.uefi === true ? "Yes" : "No")}'/>
</InfoPanel>