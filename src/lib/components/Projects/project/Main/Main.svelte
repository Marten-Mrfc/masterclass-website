<script>
    export let project;
</script>

<main class="flex-1 bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8">
    <div class="max-h-[80vh] overflow-y-auto px-2">
        <div class="prose-invert max-w-none">
            <p class="text-4xl font-bold text-gray-100 leading-relaxed">
                {project.title}
            </p>
            {#if project.description}
                <p class="text-gray-400 text-sm">
                    {project.description}
                </p>
            {/if}
            <div class="mt-8"></div>
            {#if project.content}
                <div class="text-gray-200 text-lg">
                    {@html project.content}
                </div>
            {/if}
        </div>
    </div>
</main>

