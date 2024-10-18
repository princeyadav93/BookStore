<template>
    <nav class="bg-gray-800 text-white w-full px-12 py-4 relative z-10">
        <div class="max-w-[1400px] flex justify-between items-center mx-auto">
            <div class="text-2xl font-bold">
                <NuxtLink to="/" exact class="hover:text-yellow-400">
                    BookStore
                </NuxtLink>
            </div>
            <ul class="hidden md:flex items-center gap-8 font-semibold">
                <li>
                    <NuxtLink to="/" exact class="hover:text-yellow-400"
                        :class="{ 'text-yellow-400': $route.path === '/' }">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/product" class="hover:text-yellow-400"
                        :class="{ 'text-yellow-400': $route.path === '/product' }">
                        Product
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/cart" class="hover:text-yellow-400"
                        :class="{ 'text-yellow-400': $route.path === '/cart' }">
                        Cart
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="hover:text-yellow-400"
                        :class="{ 'text-yellow-400': $route.path === '/about' }">
                        About
                    </NuxtLink>
                </li>

            </ul>
            <div class="md:hidden">
                <button @click="toggleMenu" class="focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 h-screen">
            <ul class="flex flex-col gap-4 font-semibold items-center">
                <li>
                    <NuxtLink to="/" exact class="hover:text-yellow-400"
                        :class="{ 'text-yellow-400': $route.path === '/' }" @click="closeMenu">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/product" class="hover:text-yellow-400"
                        :class="{ 'text-yellow-400': $route.path === '/product' }" @click="closeMenu">
                        Product
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/cart" class="hover:text-yellow-400"
                        :class="{ 'text-yellow-400': $route.path === '/cart' }" @click="closeMenu">
                        Cart
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" class="hover:text-yellow-400"
                        :class="{ 'text-yellow-400': $route.path === '/about' }" @click="closeMenu">
                        About
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};


const closeMenu = () => {
    isMobileMenuOpen.value = false;
};
</script>

<style scoped></style>