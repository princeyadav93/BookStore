<template>
    <div v-motion-slide-visible-once-bottom>
        <h1 class="text-center">Books of the decade</h1>
        <div class="flex justify-center mt-8">
            <ul>
                <div class="flex justify-between items-center" v-for="book in books" :key="book.id">
                    <li class="p-4">
                        {{ book.name }} - {{ book.price }}
                    </li>
                    <button @click="() => { addToCart(book) }" class="outline outline-1 
                            outline-offset-2
                            bg-red-500 text-white p-1 
                            rounded hover:bg-red-600 h-8">{{ alreadyInCart(book) ? 'Add more' : 'Add to cart'
                        }}</button>
                </div>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart';

const cartStore = useCartStore();
const books = ref([
    {
        id: 1,
        name: 'Harry Potter',
        price: 100
    }, {
        id: 2,
        name: 'Lord of the Rings',
        price: 100
    }, {
        id: 3,
        name: 'Game of Thrones',
        price: 100
    }, {
        id: 4,
        name: 'The Hobbit',
        price: 100
    }, {
        id: 5,
        name: 'The Lord of the Rings',
        price: 100
    }
]);
const alreadyInCart = (book) => {
    const x = cartStore.cart?.find(item => item.id === book.id);
    if (x?.id) {
        return true;
    } else {
        return false;
    }
}
const addToCart = (book) => {
    if (!alreadyInCart(book)) {
        cartStore.addToCart(book);
    } else {
        cartStore.increaseQuantity(book.id)
    }
}

</script>

<style scoped></style>