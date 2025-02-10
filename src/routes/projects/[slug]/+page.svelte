<script>
    import Aside from '$lib/components/Projects/project/aside/Aside.svelte';
    import Main from '$lib/components/Projects/project/Main/Main.svelte';
    import NavBar from '$lib/components/NavBar/NavBar.svelte';
    let { data } = $props();
</script>

<div class="min-h-screen bg-gray-900">
    <NavBar />
    <div class="max-w-6xl mx-auto px-4 py-4">
        <article class="flex gap-8">
            <Aside project={data.project} />
            <Main project={data.project} />
        </article>
    </div>
</div>