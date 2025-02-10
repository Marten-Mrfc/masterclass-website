<script>
    export let project;
    
    function formatDate(dateString) {
        if (!dateString) return '';
        try {
            return new Date(dateString).toLocaleDateString('nl-NL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (error) {
            console.error('Error formatting date:', error);
            return '';
        }
    }

    function formatDateRange(startDate, endDate) {
        const start = startDate ? formatDate(startDate) : '';
        const end = endDate ? formatDate(endDate) : 'Present';
        return `${start} - ${end}`;
    }
</script>

<aside class="w-[300px] flex-shrink-0" aria-label="Project details">
    <div class="sticky top-4 bg-gray-800 rounded-xl shadow-lg p-6 h-[80vh] space-y-6">
        {#if project.imageUrl}
            <div class="relative overflow-hidden rounded-xl aspect-video">
                <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    loading="lazy"
                    class="w-full h-full object-cover transform hover:scale-105 transition-all duration-300" />
            </div>
        {/if}        
        {#if project.date}
            <div class="space-y-1">
                <h3 class="text-sm font-medium text-gray-400">Published</h3>
                <p class="text-gray-100">{formatDate(project.date)}</p>
            </div>
        {/if}

        <div class="space-y-3">
            <div class="space-y-1">
                <p class="text-sm text-gray-400">Started on:</p>
                <p class="text-gray-100">{formatDate(project.startDate)}</p>
            </div>
            <div class="space-y-1">
                <p class="text-sm text-gray-400">Ended on:</p>
                <p class="text-gray-100">{project.endDate ? formatDate(project.endDate) : 'Present'}</p>
            </div>
        </div>

        {#if project.tags?.length}
            <div>
                <h3 class="text-sm font-medium text-gray-400 mb-2">Tags</h3>
                <div class="flex flex-wrap gap-2">
                    {#each project.tags as tag}
                        <span class="px-3 py-1 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors 
                            rounded-full text-xs font-medium cursor-default">
                            {tag}
                        </span>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</aside>
