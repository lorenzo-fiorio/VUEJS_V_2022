import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
    const cart = ref([])
    const totalPrice = ref(0)
    const selectedItem = null

    function addItem(item) {
        cart.value.push(item)
        updatePrice(item.price)
    }

    function removeItem(item) {
        let index = cart.value.indexOf(item)
        if (cart.value.length > 0 && index > -1) {
            cart.value.splice(index, 1)
            updatePrice(-item.price)
        }
    }

    function updatePrice(price) {
        totalPrice.value += price;
    }

    return { cart, totalPrice, selectedItem, addItem, removeItem }
})