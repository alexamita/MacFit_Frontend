<script setup>

</script>

<template>
    <v-container style="background-color:#CFD0D6">
        <v-row>
            <div class="pricing-title text-display-medium mb-12">Bundles</div>
        </v-row>
        <v-row>
            <v-col md="3">
                <v-card class="text-center pa-2">
                    <v-icon color="#" icon="mdi mdi-hours-12" size="large"></v-icon>
                    <v-card-title color="#"> Daily Pass</v-card-title>
                    <v-card-text>KES 500</v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card class="text-center pa-2">
                    <v-icon color="#" icon="mdi mdi-numeric-1-box" size="large"></v-icon>
                    <v-card-title color="#">One Month Pass</v-card-title>
                    <v-card-text>KES 12000</v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card class="text-center pa-2">
                    <v-icon color="#" icon="mdi mdi-numeric-3-box" size="large"></v-icon>
                    <v-card-title color="#">Three Months Pass</v-card-title>
                    <v-card-text>KES 25000</v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card class="text-center pa-2">
                    <v-icon color="#" icon="mdi mdi-numeric-6-box" size="large"></v-icon>
                    <v-card-title color="#">Six Months Pass</v-card-title>
                    <v-card-text>KES 45000</v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="12">
                <v-card class="text-center pa-2">
                    <v-icon color="#" icon="mdi mdi-calendar-check" size="large"></v-icon>
                    <v-card-title color="#">12 Month Pass</v-card-title>
                    <v-card-text>KES 66000</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style>
    .pricing-title {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700; /* Bold version */
    text-transform: uppercase; /* Roboto Condensed looks great in all caps */
}
</style>
