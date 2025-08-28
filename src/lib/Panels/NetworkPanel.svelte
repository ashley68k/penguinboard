<script lang="ts">
    // Generic hardware panel component variables and imports
    import InfoPanel from "$lib/InfoPanel.svelte";
    import InfoRow from "$lib/InfoRow.svelte";

    export let staticIFace: any = null;
    export let dynamicIFace: any = null;

    export let name: string;
</script>

<InfoPanel panelName={name}>
    <InfoRow dataLabel="Interface Name:" dataValue='{staticIFace.iface}'/>
    <br>
    <InfoRow dataLabel="IPv4:" dataValue='{staticIFace.ip4}'/>
    <InfoRow dataLabel="IPv4 Subnet:" dataValue='{staticIFace.ip4subnet}'/>
    <InfoRow dataLabel="IPv6:" dataValue='{staticIFace.ip6}'/>
    <InfoRow dataLabel="IPv6 Subnet:" dataValue='{staticIFace.ip6subnet}'/>
    <br>
    <InfoRow dataLabel="Duplex:" dataValue='{staticIFace.duplex}'/>
    <InfoRow dataLabel="Type:" dataValue='{staticIFace.type}'/>
    <InfoRow dataLabel="Speed:" dataValue='{dynamicIFace.speed}'/>
    <InfoRow dataLabel="State:" dataValue='{dynamicIFace.operstate}'/>
</InfoPanel>