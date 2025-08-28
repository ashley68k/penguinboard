<script lang="ts">
    export let dataLabel: string;
    export let dataValue: string | number;
</script>

<div class="flex justify-between">
    <p class="text-left text-gray-900 dark:text-gray-400">{dataLabel}</p>
    <p class="text-right text-gray-700 dark:text-gray-200">{dataValue}</p>
</div>