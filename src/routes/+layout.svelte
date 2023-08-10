<script>
    import '../assets/app.css';
    import Header from '$lib/components/header.svelte';
    import Footer from '$lib/components/footer.svelte';
</script>

<Header />
<div class="container mx-auto">
    <slot />
</div>
<Footer />
