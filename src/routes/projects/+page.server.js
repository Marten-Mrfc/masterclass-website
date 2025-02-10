import { error } from '@sveltejs/kit';
import { projects } from './data.js';

export function load() {
    try {
        // Validate posts is an array
        if (!Array.isArray(projects)) {
            throw new Error('Posts data is not in expected format');
        }

        return {
            summaries: projects.map((project) => ({
                slug: project.slug, 
                title: project.title
            }))
        };
    } catch (e) {
        console.error('Error loading project summaries:', e);
        throw error(500, 'Error loading projects');
    }
}