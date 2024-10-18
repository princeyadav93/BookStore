<template>
    <section v-motion-slide-visible-once-bottom class="bg-gray-100 min-h-screen py-12">
        <div class="max-w-[1200px] mx-auto text-center">
            <h1 class="text-4xl font-bold mb-6">Welcome to BookStore</h1>
            <p class="text-lg text-gray-700 mb-12">
                Discover the magic in every book! Explore our collection of timeless classics and modern bestsellers.
            </p>
            <div class="max-w-6xl mx-auto">
                <div class="grid px-6 xl:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-motion :initial="{
                        opacity: 0,
                        y: 100
                    }" :visibleOnce="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: 'tween',
                            duration: 300,
                            delay: 100 * book.id
                        }
                    }" v-for="book in books" :key="book.id"
                        class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <NuxtLink :to="`/product/${book.id}`">
                            <img :src="book.image" alt="Book Cover" class="w-40 h-60 object-cover mb-4 rounded" />
                        </NuxtLink>
                        <h2 class="text-xl font-semibold mb-2 line-clamp-1">{{ book.name }}</h2>
                        <p class="text-gray-700 text-lg mb-4 line-clamp-2">{{ book.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { data: bookss } = await useFetch('/api/booksData');

const books = bookss.value.slice(0, 4);
</script>

<style scoped></style>