<script setup>
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const isAdmin = true;

function logout() {
    authStore.logout();
    router.push("/");
}
</script>

<template>
    <v-app-bar flat class="px-16" color="black">
        <v-app-bar-title color="primary" class="font-weight-bold text-uppercase text-white">
            <router-link to="/" class="text-white text-decoration-none d-flex align-center">
                <v-img
                    src="/logo_complete-removebg-preview-2.png"
                    alt="MacFitness Logo"
                    height="170"
                    max-width="220"
                    class="mr-2"
                    contain>
                </v-img>
            </router-link>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn to="/homepage" v-if="authStore.isLoggedIn" class="mx-2">HOME</v-btn>
        <v-btn to="/bundles" class="mx-2">BUNDLES</v-btn>
        <v-btn to="/gymlocations" class="mx-2">LOCATIONS</v-btn>
        <v-btn to="/admin" v-if="isAdmin" class="mx-2">ADMIN</v-btn>

        <!-- Profile Menu - Only visible when logged in -->
        <v-btn icon="mdi-account" v-if="authStore.isLoggedIn">
            P
            <v-menu activator="parent">
                <v-list>
                    <v-list-item>
                        <v-btn color="primary" block to="/profile">PROFILE</v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-btn color="primary" block @click="logout">LOGOUT</v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>

        <!-- Login/Sign Up buttons - Only visible when NOT logged in -->
        <template v-else>
            <v-btn to="/login" variant="outlined" class="font-weight-bold mx-2">
                LOGIN
            </v-btn>
            <v-btn to="/signup" variant="flat" color="#ee6909" class="rounded-l text-black font-weight-bold mx-2">
                SIGN UP
            </v-btn>
        </template>
    </v-app-bar>
</template>

<style scoped>
</style>
