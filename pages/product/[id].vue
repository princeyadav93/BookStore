<template>
    <div v-motion-slide-visible-once-bottom class="container mx-auto p-20 bg-gray-100">
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center">
            <img :src="book.image" alt="Book Cover" class="w-64 h-96 object-cover rounded mb-6 md:mb-0 md:mr-6" />

            <div class="flex-1">
                <h1 class="text-3xl font-bold mb-4">{{ book.name }}</h1>
                <p class="text-2xl text-gray-700 font-semibold mb-2">Price: ${{ book.price }}</p>
                <p class="text-gray-600 mb-6">{{ book.description }}</p>

                <button @click="() => { addToCart(book) }"
                    class="w-full md:w-auto bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition font-semibold">
                    {{ alreadyInCart(book) ? `Add more ${getQuantity(book.id)}` : 'Add to cart' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart';

const cartStore = useCartStore();
const { id } = useRoute().params;
const { data: books } = await useFetch('/api/booksData')

const book = ref(books.value.find((book) => book.id === Number(id)));

const alreadyInCart = (book) => {
    const item = cartStore.cart?.find((item) => item.id === book.id);
    return !!item;
};

const addToCart = (book) => {
    if (!alreadyInCart(book)) {
        cartStore.addToCart(book);
    } else {
        cartStore.increaseQuantity(book.id);
    }
};
const getQuantity = (id) => {
    const item = cartStore.cart?.find((item) => item.id === id);
    return item ? item.quantity : 0;
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    color: #1a202c;
    font-family: 'Georgia', serif;
}

p {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
}

button {
    transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
    transform: scale(1.05);
}
</style>
