import { writable } from "svelte/store";


const authStore = writable({
    isLoggedIn: false,
    user: null,
});

export default {
    subscribe: authStore.subscribe,
    set: authStore.set
}