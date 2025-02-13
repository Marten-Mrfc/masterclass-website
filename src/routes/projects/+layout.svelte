<script>
	let { children } = $props();
	export const prerender = true;
</script>

<div class="layout">
	{@render children()}
</div>