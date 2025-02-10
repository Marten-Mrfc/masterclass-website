import { error } from '@sveltejs/kit';
import { projects } from '../data.js';

export function load({ params }) {
    try {
        const project = projects.find(p => p.slug === params.slug);
        
        if (!project) {
            throw error(404, 'Project not found');
        }

        // Validate required fields
        if (!project.title || !project.slug) {
            throw error(500, 'Missing required project fields');
        }

        return {
            project: {
                title: project.title,
                slug: project.slug,
                description: project.description || '',
                imageUrl: project.imageUrl || null,
                link: project.link || null,
                content: project.content || '',
                tags: project.tags || [],
                startDate: project.startDate || null,
                endDate: project.endDate || null,
            }
        };
    } catch (err) {
        throw error(err.status || 500, err.message);
    }
}