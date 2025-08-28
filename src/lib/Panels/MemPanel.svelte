<script lang="ts">
    // Generic hardware panel component variables and imports
    import InfoPanel from "$lib/InfoPanel.svelte";
    import InfoRow from "$lib/InfoRow.svelte";

    export let info: any = null;
</script>

<InfoPanel panelName="Memory">
    <InfoRow dataLabel="Total Memory:" dataValue='{(info.dynamic.mem.total / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
    <InfoRow dataLabel="Free Memory:" dataValue='{(info.dynamic.mem.available / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
    <InfoRow dataLabel="Used Memory:" dataValue='{(info.dynamic.mem.active / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
    <br>
    <InfoRow dataLabel="Type:" dataValue='{info.static.memLayout.type}'/>
    <InfoRow dataLabel="ECC:" dataValue='{info.static.memLayout.ecc}'/>
    <InfoRow dataLabel="Clock Speed:" dataValue='{info.static.memLayout.clockspeed}'/>
    <InfoRow dataLabel="Voltage:" dataValue='{info.static.memLayout.formFactor}'/>
    <InfoRow dataLabel="Form Factor:" dataValue='{info.static.memLayout.voltageConfigured}'/>
</InfoPanel>