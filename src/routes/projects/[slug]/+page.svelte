<script lang="ts">
    import { error } from '@sveltejs/kit';
    import { onMount } from 'svelte';
    import Aside from '$lib/components/Projects/project/aside/Aside.svelte';
    import Main from '$lib/components/Projects/project/Main/Main.svelte';
    import NavBar from '$lib/components/NavBar/NavBar.svelte';
    import { base } from '$app/paths';
    import type { Project } from '$lib/types';
    
    let project: Project | null = null;
    let loading = true;
    let errorMessage: string | null = null;

    onMount(async () => {
        try {
            const response = await fetch(`${base}/projects.json`);
            if (!response.ok) {
                throw new Error('Failed to fetch project data');
            }

            const projects = await response.json();
            const slug = window.location.pathname.split('/').pop();
            project = projects.find((p: Project) => p.slug === slug);

            if (!project) {
                throw new Error(`Project not found: ${slug}`);
            }
        } catch (e) {
            errorMessage = e instanceof Error ? e.message : 'Failed to load project';
            console.error('Error loading project:', e);
        } finally {
            loading = false;
        }
    });
</script>

<div class="min-h-screen bg-gray-900">
    <NavBar />
    <div class="max-w-6xl mx-auto px-4 py-4">
        <article class="flex gap-8">
            {#if loading}
                <div class="text-white">Loading project...</div>
            {:else if errorMessage}
                <div class="text-red-500">{errorMessage}</div>
            {:else if project}
                <Aside project={project} />
                <Main project={project} />
            {/if}
        </article>
    </div>
</div>