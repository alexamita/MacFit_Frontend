<script>
</script>

<template>
    <v-app-bar outlined class="px-16" color="black" border>
        <v-app-bar-title class="font-weight-bold">MACFITNESS</v-app-bar-title>

        <div class="hidden-sm-and-down">
            <!-- <v-btn to="/homepage" variant="text" class="text-capitalize text-grey-lighten-1">HOME</v-btn> -->
            <v-btn to="/bundles" variant="text" class="text-capitalize text-white">BUNDLES</v-btn>
            <v-btn to="/gym_locations" variant="text" class="text-capitalize text-white">LOCATIONS</v-btn>
        </div>

        <v-btn to="/login" variant="outlined" class="me-2 rounded-lg" color="white">Login</v-btn>
        <v-btn to="/signup" variant="flat" color="#8FD40B" class="rounded-lg text-white font-weight-bold">
            GET STARTED
        </v-btn>
        <!-- <v-btn to="/profile">PROFILE</v-btn> -->
        <!-- <v-btn to="/admin">ADMIN</v-btn> -->
    </v-app-bar>
</template>


<style scoped>
.v-btn {
    font-weight: 500;
}
</style>
