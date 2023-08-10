<script>
    export let data;
    console.log(data);
</script>

<div class="flex justify-center">
    <div class="w-6/12 flex justify-center">
        <img
            width="50%"
            alt="auth layout"
            src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
        />
    </div>
    <div class="w-6/12">
        <slot />
    </div>
</div>
