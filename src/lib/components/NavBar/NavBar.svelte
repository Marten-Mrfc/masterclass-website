<script lang="ts">
    import { onMount } from 'svelte';
    let title = 'Marten Mrfc';
    let navItems = [
        { name: 'Home', href: '/' },
        { name: 'Over Mij', href: '/#about-me' },
        { name: 'Projecten', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];

    let projects = [{}];

    onMount(async () => {
        // Load projects from the JSON file
        const response = await fetch('/projects.json');
        const projectsData = await response.json();
        projects = projectsData.map(project => ({
            name: project.title,
            href: `/projects/${project.slug}`
        }));
        activePath = window.location.pathname;
    });

    let activePath = '';

    function isActive(href: string) {
        return href === activePath ? 'text-yellow-500' : 'text-white';
    }
</script>

<nav class="bg-gray-900 p-4 shadow-lg flex items-center">
    <div class="text-white text-xl font-bold">
        {title}
    </div>
    <ul class="flex space-x-6 ml-8">
        {#each navItems as { name, href }}
            <li class="relative group">
                <a href={href} class={`hover:text-gray-400 ${isActive(href)} font-medium`}>
                    {name}
                </a>
                {#if name === 'Projects'}
                <div class="absolute hidden group-hover:block bg-gray-900 z-10 shadow-lg rounded-md group-hover:flex flex-col">
                    {#each projects as project}
                        <a href={project.href} class="block text-white px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                            {project.name}
                        </a>
                    {/each}
                </div>
                {/if}
            </li>
        {/each}
    </ul>
</nav>

<style>
    a {
        transition: color 0.3s ease;
    }
    .group:hover .group-hover\:block {
        display: block;
    }
    .group:hover .group-hover\:flex {
        display: flex;
    }
</style>