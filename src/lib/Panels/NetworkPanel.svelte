<script lang="ts">
    // Generic hardware panel component variables and imports
    import InfoPanel from "$lib/InfoPanel.svelte";
    import InfoRow from "$lib/InfoRow.svelte";

    export let iface: any = null;

    export let name: string;
</script>

<InfoPanel panelName={name}>
    <InfoRow dataLabel="Interface Name:" dataValue='{iface.iface}'/>
    <br>
    <InfoRow dataLabel="IPv4:" dataValue='{iface.ip4}'/>
    <InfoRow dataLabel="IPv4 Subnet:" dataValue='{iface.ip4subnet}'/>
    <br>
    <InfoRow dataLabel="Duplex:" dataValue='{iface.duplex}'/>
    <InfoRow dataLabel="Type:" dataValue='{iface.type}'/>
    <InfoRow dataLabel="Speed:" dataValue='{iface.speed}'/>
    <InfoRow dataLabel="State:" dataValue='{iface.operstate}'/>
</InfoPanel>