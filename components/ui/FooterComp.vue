<template>
    <footer class="bg-gray-800 text-white py-10 px-4 relative z-10">
        <div class="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="flex flex-col items-center md:items-start">
                <NuxtLink to="/" class="text-2xl font-bold">
                    BookStore
                </NuxtLink>
                <p class="mt-2 text-gray-400">Discover the magic of reading with us.</p>
            </div>
            <div class="flex justify-center md:justify-start">
                <ul class="space-y-2">
                    <li>
                        <NuxtLink to="/" class="hover:text-yellow-400">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/product" class="hover:text-yellow-400">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/cart" class="hover:text-yellow-400">Cart</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="hover:text-yellow-400">About Us</NuxtLink>
                    </li>

                </ul>
            </div>
            <div class="flex flex-col items-center md:items-start">
                <h3 class="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
                <form @submit.prevent="subscribe" class="flex flex-col gap-2 w-full">
                    <input v-model="email" type="email" placeholder="Enter your email"
                        class="p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400"
                        required />
                    <button type="submit"
                        class="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
                        Subscribe
                    </button>
                </form>
                <div class="flex space-x-4 mt-4">
                    <a href="#" class="hover:text-yellow-400">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="hover:text-yellow-400">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="hover:text-yellow-400">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="hover:text-yellow-400">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="mt-10 text-center text-gray-400">
            <p>&copy; 2024 BookStore. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup>
const email = ref("");
const subscribe = () => {
    if (email.value) {
        alert(`Thanks for subscribing with email: ${email.value}`);
        email.value = "";
    }
}
</script>

<style scoped></style>