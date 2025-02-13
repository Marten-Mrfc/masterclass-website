import { base } from '$app/paths';

export async function entries() {
    const response = await fetch(`${base}/projects.json`);
    const projects = await response.json();
    return projects.map((project) => ({
        slug: project.slug
    }));
}
