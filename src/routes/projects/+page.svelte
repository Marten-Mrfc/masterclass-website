<script lang="ts">
    import NavBar from '$lib/components/NavBar/NavBar.svelte';
    import Button from '$lib/components/button/Button.svelte';
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    
    let projects: { imageUrl: string; title: string; description: string; slug: string }[] = [];
    let loading = true;
    let error: string | null = null;

    onMount(async () => {
        try {
            const response = await fetch(`${base}/projects.json`);
            if (!response.ok) throw new Error('Failed to fetch projects');
            projects = await response.json();
        } catch (e) {
            error = e instanceof Error ? e.message : 'An error occurred';
        } finally {
            loading = false;
        }
    });

    function handleProjectClick(slug: string) {
        window.location.href = `${base}/projects/${slug}`;
    }
</script>

<div class="min-h-screen bg-gray-900">
    <NavBar />
    
    <section class="pt-4">
        <div class="container mx-auto px-6">
            {#if loading}
                <div class="text-white text-center py-12">Loading projects...</div>
            {:else if error}
                <div class="text-red-500 text-center py-12">{error}</div>
            {:else}
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {#each projects as project}
                        <div class="flex flex-col bg-gray-800 rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div class="relative overflow-hidden">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    class="w-full h-48 object-cover transform"
                                />
                            </div>
                            <div class="flex flex-col flex-grow p-6">
                                <h3 class="text-xl font-bold mb-3 text-white">{project.title}</h3>
                                <p class="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                                <div class="mt-auto">
                                    <Button 
                                        text="View Project →"
                                        variant="primary"
                                        size="md"
                                        onClick={() => handleProjectClick(project.slug)}
                                    />
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </section>
</div>