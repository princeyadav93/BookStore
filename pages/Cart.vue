<template>
    <div v-motion-slide-visible-once-bottom class="bg-gray-100 min-h-screen py-10 px-4">
        <h1 class="text-3xl font-bold text-center mb-8">Your Cart</h1>
        <div v-if="cartStore.cart.length > 0" class="max-w-[1000px] mx-auto">
            <ul class="space-y-6">
                <li v-motion :initial="{
                    opacity: 0,
                    y: 100
                }" :visibleOnce="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: 'tween',
                        duration: 300,
                        delay: 70 * cart.id
                    }
                }" v-for="cart in cartStore.cart" :key="cart.id"
                    class="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div class="flex flex-col sm:flex-row items-center">
                        <NuxtLink :to="`/product/${cart.id}`">
                            <img :src="cart.image" alt="Book Cover" class="w-20 h-30 object-cover rounded mr-4" />
                        </NuxtLink>
                        <div class="mt-2 sm:mt-0">
                            <h2 class="text-xl font-semibold mb-2 sm:mb-0">Book: {{ cart.name }}</h2>
                            <p class="text-gray-600">Price: ${{ cart.price }} - Quantity: {{ cart.quantity }}
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center justify-center space-x-2 mt-2 sm:mt-0">
                        <button @click="decreasequantity(cart.id, cart.quantity)"
                            class="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition-colors">
                            <Minus color="white" :size="20" />
                        </button>
                        <button @click="deleteCart(cart.id)"
                            class="bg-red-500 hover:bg-red-600 text-white p-2 rounded transition-colors">
                            Delete
                        </button>
                        <button @click="increaseQuantity(cart.id)"
                            class="bg-green-500 hover:bg-green-600 text-white p-2 rounded transition-colors">
                            <Plus color="white" :size="20" />
                        </button>
                    </div>
                </li>
            </ul>
            <div class="mt-8 text-right">
                <h3 class="text-2xl font-bold">Total: ${{ totalAmount }}</h3>
            </div>
        </div>
        <div v-else class="text-center mt-8">
            <p class="text-xl text-gray-700">Your cart is currently empty</p>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart';
import { Plus, Minus } from 'lucide-vue-next';

const cartStore = useCartStore();
const deleteCart = (id) => {
    cartStore.deleteFromCart(id);
};

const decreasequantity = (id, quantity) => {
    if (quantity > 1) {
        cartStore.decreaseQuantity(id);
    } else {
        cartStore.deleteFromCart(id);
    }
};

const increaseQuantity = (id) => {
    cartStore.increaseQuantity(id);
};

const totalAmount = computed(() => {
    return cartStore.cart.reduce((total, item) => total + item.price * item.quantity, 0);
});
</script>

<style scoped></style>