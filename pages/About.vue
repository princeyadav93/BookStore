<template>
    <div v-motion-slide-visible-once-bottom class="bg-gray-100 min-h-screen py-10 px-4">
        <h1 class="text-4xl font-bold text-center mb-8">About Our BookStore</h1>

        <section class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
            <h2 class="text-2xl font-semibold mb-4">Welcome to BookHaven</h2>
            <p class="mb-4 text-gray-700">
                At BookHaven, we believe in the magic of stories and the power of imagination. Our bookstore is
                dedicated to bringing you the finest selection of fantasy books, from timeless classics to the latest
                bestsellers.
            </p>
            <p class="mb-4 text-gray-700">
                Founded in 2024, we started as a small community-driven initiative to share the joy of reading with
                others. Over the years, we've built a haven for book lovers, where everyone can find their next great
                adventure.
            </p>
            <p class="mb-4 text-gray-700">
                Our mission is to provide a space where fantasy enthusiasts can explore new worlds, connect with
                like-minded readers, and discover books that inspire and entertain.
            </p>
        </section>

        <section class="mt-10 max-w-6xl mx-auto">
            <h2 class="text-2xl font-semibold mb-4 text-center">Featured Fantasy Books</h2>
            <div class="max-w-6xl mx-auto">
                <div class="grid  xl:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </section>

        <section class="mt-10 max-w-4xl mx-auto">
            <h2 class="text-2xl font-semibold mb-4 text-center">Join Our Community</h2>
            <p class="text-center text-gray-700 mb-4">
                Follow us on social media to stay updated on our latest arrivals, events, and book recommendations!
            </p>
            <div class="flex justify-center space-x-4">
                <a href="#"
                    class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">Facebook</a>
                <a href="#"
                    class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Twitter</a>
                <a href="#"
                    class="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors">Instagram</a>
            </div>
        </section>
    </div>
</template>

<script setup>
const { data: bookss } = await useFetch('/api/booksData');

const books = bookss.value.slice(0, 4);
</script>

<style scoped>
h1,
h2 {
    font-family: 'Georgia', serif;
}

p {
    line-height: 1.6;
}
</style>
