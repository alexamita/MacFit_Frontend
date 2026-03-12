/**
 * Main Application Entry Point
 * * This is the root component of the Vue application.
 * It uses <RouterView /> to dynamically render the component associated with the current URL path defined in your router configuration.
 */

<!-- Contains the JavaScript logic of the component. -->
<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<!-- Defines the HTML structure of the component. -->
<template>
    <v-app>
        <NavBar/>
            <v-main>
                <RouterView />
            </v-main>
    </v-app>
</template>

<!-- Defines the CSS styles specific to this component (can be scoped or global). -->
<style>
</style>
