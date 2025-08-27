<script lang="ts">
    export let panelName: string;
</script>

<div class="bg-gray-50 dark:bg-gray-800 
            rounded-t-md m-8 p-2 
            flex flex-col justify-between items-center
            min-w-[32rem] max-w-sm 
            border border-gray-100 dark:border-gray-700
            text-black dark:text-white">
    <header class="w-full bg-gray-100 dark:bg-gray-700 border-b
                border-gray-200 dark:border-gray-800 
                text-center rounded-t-sm p-2">
        <h2>{panelName}</h2>
    </header>
    <section class="py-4 w-full px-16">
        <!--inforows should go here-->
        <slot></slot>
    </section>
</div>