<template>
    <div class="py-10 px-4 bg-gray-100">
        <div class="flex items-center justify-center">
            <input type="text" placeholder="Book Search..." v-model="searchQuery"
                class="w-1/2 px-4 py-2 my-6 outline-none" ref="search">
        </div>
        <h1 class="text-4xl font-bold text-center mb-8">Books of the Decade</h1>
        <div class="max-w-6xl mx-auto">
            <div v-if="filteredBooks.length > 0">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
                    }" v-for="book in filteredBooks" :key="book.id"
                        class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <NuxtLink :to="`/product/${book.id}`">
                            <img :src="book.image" alt="Book Cover" class="w-40 h-60 object-cover mb-4 rounded" />
                        </NuxtLink>
                        <h2 class="text-xl font-semibold mb-2 line-clamp-1">{{ book.name }}</h2>
                        <p class="text-gray-700 text-lg mb-4">Price: ${{ book.price }}</p>
                        <button @click="() => { addToCart(book) }"
                            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                            {{ alreadyInCart(book) ? `Add more ${getQuantity(book.id)}` : 'Add to cart' }}
                        </button>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="grid grid-cols-1">
                    <div v-motion :initial="{
                        opacity: 0,
                        y: 100
                    }" :visibleOnce="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: 'tween',
                            duration: 300,
                            delay: 250
                        }
                    }" class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <p>No books found</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '~/store/cart';

const cartStore = useCartStore();
const { data: books } = await useFetch('/api/booksData');

// Check if the book is already in the cart
const alreadyInCart = (book) => {
    return cartStore.cart?.find((item) => item.id === book.id);
};

// Add to cart or increase quantity if already present
const addToCart = (book) => {
    if (!alreadyInCart(book)) {
        cartStore.addToCart(book);
    } else {
        cartStore.increaseQuantity(book.id);
    }
};

// Get the quantity of the specific book in the cart
const getQuantity = (id) => {
    const item = cartStore.cart?.find((item) => item.id === id);
    return item ? item.quantity : 0;
};

const searchQuery = ref('');
const filteredBooks = computed(() => {
    return books.value.filter((book) => book.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const search = ref(null);
onMounted(() => {
    search.value.focus();
});

</script>

<style scoped>
h1 {
    font-family: 'Georgia', serif;
}

button {
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    transform: scale(1.05);
}
</style>
