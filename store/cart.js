import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
    const cart = ref([]);

    function addToCart(product) {
        cart.value.push({ ...product, quantity: 1 });
    }
    function increaseQuantity(id) {
        cart.value = cart.value.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
    }
    function decreaseQuantity(id) {
        cart.value = cart.value.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item;
        })
    }
    function deleteFromCart(id) {
        cart.value = cart.value.filter((item) => item.id !== id);
    }
    return { cart, addToCart, deleteFromCart, increaseQuantity, decreaseQuantity }
})