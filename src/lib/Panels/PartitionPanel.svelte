<script lang="ts">
    // Generic hardware panel component variables and imports
    import InfoPanel from "$lib/InfoPanel.svelte";
    import InfoRow from "$lib/InfoRow.svelte";

    export let name: string;
    export let fs: any = null;
</script>

<InfoPanel panelName={name}>
    <InfoRow dataLabel="Mount Point:" dataValue='{fs.fs}'/>
    <InfoRow dataLabel="File System:" dataValue='{fs.type}'/>
    <InfoRow dataLabel="Partition Size:" dataValue='{(fs.size / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
    <InfoRow dataLabel="Partition Used:" dataValue='{(fs.used / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
    <InfoRow dataLabel="Partition Available:" dataValue='{(fs.available / 1024 / 1024 / 1024).toFixed(2)} GiB'/>
</InfoPanel>