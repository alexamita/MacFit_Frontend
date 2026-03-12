import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
    const isLoggedIn = ref(localStorage.getItem("isLoggedIn") === "true");
    const user = ref(JSON.parse(localStorage.getItem("userSignUpData")) || null);

    function login(userData) {
        isLoggedIn.value = true;
        user.value = userData;
        localStorage.setItem("isLoggedIn", "true");
    }

    function logout() {
        isLoggedIn.value = false;
        user.value = null;
        localStorage.removeItem("isLoggedIn");
    }

    return {
        isLoggedIn,
        user,
        login,
        logout,
    };
});
