<script>
    import { onMount } from 'svelte';
    import Loading from '$lib/components/loading.svelte';
    import { getToken } from '$lib/utils/storageUtils';
    let loading = true;

    onMount(() => {
        if (getToken()) {
            loading = false;
        }
    });
</script>

{#if loading}
    <Loading />
{:else}
    <slot />
{/if}
