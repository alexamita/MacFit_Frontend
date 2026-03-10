<script setup>
// #010c1e,
// #001e38,
// #4a6d88,
// #c6cdd7,
// #d5d9e0
</script>

<template>
    <!-- Hero Section -->
    <v-container fluid class="pa-0">
        <v-row no-gutters>
            <v-carousel height=100dvh hide-delimiters :show-arrows="false" cycle interval="5000">
                <v-carousel-item src="/images/img1-landscape.jpg" cover></v-carousel-item>
                <v-carousel-item src="/images/img2-landscape.jpg" cover></v-carousel-item>
                <v-carousel-item src="/images/img6-landscape.jpg" cover></v-carousel-item>
                <!-- Hero Overlay Section -->
            </v-carousel>
        </v-row>
    </v-container>

    <!-- About Us -->
    <v-container style="background-color: #D5D9E0;" color="" max-width="100%">
        
        <v-row align="center" no-gutters>
            <v-col md="8" class="text-center">
                <h2 class="text-headline-medium mb-8 font-weight-bold">Elite Training.<span
                        class="text-grey-darken-1">Unlimited Access.</span>
                </h2>
                <p class="text-body-1 mb-4 text-grey-darken-3" style="line-height: 1.8;">
                    We believe fitness is the ultimate investment. Our mission is to provide a seamless fusion of
                    high-performance training and recovery across our growing network of locations. From our
                    state-of-the-art floors to our signature recovery suites, every detail at every branch is engineered
                    to help you perform at your peak—for life.
                </p>
                <v-list style="background-color: #D5D9E0;">
                    <v-list-item>
                        <b>Integrated Wellness:</b> Training, nutrition, and recovery under one roof at every location
                    </v-list-item>
                    <v-list-item>
                        <b>Bespoke Programming:</b> Workouts tailored to your specific biometrics, accessible wherever
                        you train.
                    </v-list-item>
                    <v-list-item>
                        <b>A Unified Network:</b> One membership grants you elite access to our entire collection of
                        premium clubs.
                    </v-list-item>
                    <v-list-item>
                        <b>Premium Amenities:</b> Because the experience should be as good as the results.</v-list-item>
                </v-list>

                <v-btn color="#8FD40B" variant="flat" rounded="lg" font-weight-bold px-8 elevation="10">LEARN
                    MORE
                </v-btn>
            </v-col>
            <v-col md="4">
                <v-container class="d-flex align-centre justify-center fill-height">
                    <v-img src="/images/aboutus-square.jpg"></v-img>
                </v-container>
            </v-col>
        </v-row>
    </v-container>


    <!-- Latest News -->
    <v-container>
        <v-row>
            <v-col md="4" class="d-flex">
                <v-card density="compact" class="h-100 d-flex flex-column" elevation="2">
                    <v-img src="/images/bundle-wellness.png" cover height="400"></v-img>
                    <v-card-title class="font-weight-bold py-4">2026 Trend: The Biophilic Home</v-card-title>
                    <v-card-text class="flex-grow-1">Industry experts report a 20% surge in "Living Studio" designs this year.Homeowners are moving away from closed-off gyms toward sun-drenched spaces
                    that use natural wood, floor-to-ceiling glass, and indoor greenery to
                    reduce cortisol levels and boost creativity.
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions class="pa-4">
                        <v-btn color="#8FD40B" variant="flat">Read the Full Report</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col md="4" class="d-flex">
                <v-card density="compact" class="h-100 d-flex flex-column" elevation="2">
                    <v-img src="/images/news-nutrition.jpg" cover height="400"></v-img>
                    <v-card-title class="font-weight-bold py-4">Post-Flow: The "Golden Hour" Reset</v-card-title>
                    <v-card-text class="flex-grow-1">New 2026 dietary guidelines highlight the "Golden Hour" after movement.
                        Forget synthetic protein shakes; the focus is shifting to bio-available
                        electrolytes and anti-inflammatory tonics. Think turmeric, ginger, and
                        magnesium-rich snacks to support the deep muscle recovery seen in
                        low-impact practices.
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions class="pa-4">
                        <v-btn color="#8FD40B" variant="flat">Get the Recovery Guide</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col md="4" class="d-flex">
                <v-card density="compact" class="h-100 d-flex flex-column" elevation="2">
                    <v-img src="/images/bundle_yoga.png" cover height="400"></v-img>
                    <v-card-title class="font-weight-bold py-4">The Rise of Neurowellness</v-card-title>
                    <v-card-text class="flex-grow-1">Yoga is evolving. New data for 2026 shows a major shift toward "soft-care"
                        practices. Prescribed breathwork and somatic-informed yoga are becoming
                        mainstream as practitioners prioritize nervous system regulation over
                        high-intensity performance to combat digital burnout.
                    </v-card-text>
                    <v-spacer></v-spacer>
                    <v-card-actions class="pa-4">
                        <v-btn color="#8FD40B" variant="flat">View Science Updates</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

        </v-row>
    </v-container>


    <!-- Reviews -->
    <v-container>
        <v-row justify="center">
            <v-col md="3" class="d-flex">
                <v-card density="compact" class="h-100 d-flex flex-column">
                    <v-card-text class="flex-grow-1">
                        "I finally found my sanctuary at ZenCore Wellness Studio. The yoga and
                        Pilates sessions are exactly what I need to balance my busy week in Nairobi.
                        The studio in Lavington is stunning, sun-drenched, and promotes a truly
                        holistic approach to fitness. My mobility has never been better!"
                        <br><br>
                        <strong>— Maria W., Lavington Member</strong>
                        <v-rating :length="5" :size="32" :model-value="4" active-color="primary"></v-rating>
                    </v-card-text>
                    <v-spacer></v-spacer>
                </v-card>
            </v-col>

            <v-col md="3" class="d-flex">
                <v-card density="compact" class="h-100 d-flex flex-column">
                    <v-card-text class="flex-grow-1">
                        "If you're serious about your conditioning, Iron Forge Fitness in
                        Westlands is the place to be. The modern equipment is top-tier, and the
                        certified trainers are incredibly knowledgeable. Even as a yoga enthusiast,
                        adding their strength sessions has transformed my core stability!"
                        <br><br>
                        <strong>— David K., Westlands Member</strong>
                        <v-rating :length="5" :size="32" :model-value="5" active-color="primary"></v-rating>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col md="3" class="d-flex">
                <v-card density="compact" class="h-100 d-flex flex-column">
                    <v-card-text class="flex-grow-1">
                        "The energy at Pulse Performance Center is unmatched. Their HIIT and
                        CrossFit sessions are intense, but the results are worth it. I love that
                        I can get a high-performance workout in Kilimani and then use their
                        recovery space to stretch and find my center. A perfect 2026 fitness hub!"
                        <br><br>
                        <strong>— Sheila A., Kilimani Member</strong>
                        <v-rating :length="5" :size="32" :model-value="4.5" active-color="primary"></v-rating>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <!-- Footer -->
    <v-footer class="bg-black px-10" border>
        <v-container>
            <v-row justify="center">
                <v-cols cols="12" md="8" class="text-center">
                    <div class="text-h6 font-weight-bold mb-2">Get in touch</div>
                    <div class="mb-4">0712 345 678 | macfitness@gmail.com</div>

                    <v-divider color="grey-darken-3" class="mb-4"></v-divider>

                    <div class="text-subtitle-1 font-weight-bold">Opening Hours:</div>
                    <div class="mb-6">Mon-Fri:5.00am-9.00 pm | Sat:5.30am-6.00pm | Sun:8.00am-2.00pm </div>

                    <div class="text-caption text-grey">&copy;2026 MacFitness. Designed by AA</div>
                </v-cols>
            </v-row>
        </v-container>
    </v-footer>

</template>

<style>
/* Force titles to occupy exactly 2 lines of space */
.v-card-title {
    min-height: 4.5rem;
    display: flex;
    align-items: center;
    line-height: 1.2;
    word-break: break-word; /* Prevents overflow */
}

/* Force text descriptions to occupy a consistent height */
.v-card-text {
    min-height: 10rem; /* Adjust this value based on your longest paragraph */
}
</style>
