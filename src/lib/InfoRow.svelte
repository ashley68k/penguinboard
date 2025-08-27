<script lang="ts">
    export let dataName: string;
    export let dataValue: string | number;
</script>

<div class="flex justify-between">
    <p>{dataName}</p>
    <p>{dataValue}</p>
</div>