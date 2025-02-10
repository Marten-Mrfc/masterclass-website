<script lang="ts">
    import NavBar from '$lib/components/NavBar/NavBar.svelte';
    import Button from '$lib/components/button/Button.svelte';
    
    let formData = {
        name: '',
        email: '',
        message: ''
    };

    function handleSubmit() {
        // Handle form submission
        console.log(formData);
    }
</script>

<div class="min-h-screen bg-gray-900">
    <NavBar />
    
    <main class="max-w-3xl mx-auto px-4 py-12">
        <div class="bg-gray-800 rounded-xl shadow-lg p-8">
            <h1 class="text-4xl font-bold text-white mb-8">Contact Me</h1>
            
            <form class="space-y-6" on:submit|preventDefault={handleSubmit}>
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-400 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        bind:value={formData.name}
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        required
                    />
                </div>
                
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-400 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        bind:value={formData.email}
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                        required
                    />
                </div>
                
                <div>
                    <label for="message" class="block text-sm font-medium text-gray-400 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        bind:value={formData.message}
                        rows="6"
                        class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        required
                    ></textarea>
                </div>
                
                <Button
                    type="submit"
                    text="Send Message"
                    variant="primary"
                    size="md"
                />
            </form>

            <div class="mt-12 border-t border-gray-700 pt-8">
                <h2 class="text-2xl font-bold text-white mb-4">Other Ways to Reach Me</h2>
                <div class="space-y-4 text-gray-400">
                    <p>
                        <span class="font-medium">Email:</span>
                        <a href="mailto:martensog@gmail.com" class="text-blue-400 hover:text-blue-300 ml-2">
                            martensog@gmail.com
                        </a>
                    </p>
                    <p class="text-sm">I typically respond within 24-48 hours.</p>
                </div>
            </div>
        </div>
    </main>
</div>