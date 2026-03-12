<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const rules = {
    required: value => !!value || 'Required.',
    min: value => value.length >= 8 || 'Min 8 characters',
    emailMatch: () => `The email and password you entered don't match`
}

const email = ref(null)
const password = ref(null)
const visible = ref(false)

function login() {
    const userDetails = JSON.parse(localStorage.getItem('userSignUpData'))
    if (userDetails && email.value === userDetails.email && password.value === userDetails.password) {
        authStore.login(userDetails);
        router.push('/homepage')
    }
    else {
        console.error('Invalid Credentials')
    }
}
</script>

<template>
    <v-container fluid class="fill-height bg-white pa-0 overflow-hidden">
        <v-row no-gutters class="fill-height">
            <!-- Left Column: Visual Impact -->
            <v-col cols="12" md="5" class="d-none d-md-flex">
                <v-img
                    src="/images/img6-landscape.jpg"
                    cover
                    class="h-100 position-relative"
                >
                    <v-overlay
                        model-value="true"
                        persistent
                        contained
                        scrim="black"
                        opacity="0.4"
                        class="d-flex align-center"
                    >
                    </v-overlay>
                </v-img>
            </v-col>

            <!-- Right Column: Login Form -->
            <v-col cols="12" md="7" class="d-flex align-center justify-center bg-white pa-4 pa-md-16">
                <v-card width="100%" max-width="480" min-height="600" border rounded="xl" elevation="0" class="bg-white pa-8 pa-md-12 d-flex flex-column justify-center">
                    <v-form @submit.prevent="login">
                        <div class="d-md-none text-center mb-8">
                            <v-img src="/logo_dark-removebg-preview.png" max-width="240" class="mx-auto" contain></v-img>
                        </div>

                        <h1 class="text-h5 font-weight-black text-black mb-2 text-uppercase text-center" style="letter-spacing: -1px;">
                            Log In
                        </h1>
                        <p class="text-body-1 text-grey-darken-1 mb-10 text-center">
                            Enter your credentials to access your account
                        </p>

                        <!-- Input Section -->
                        <div class="mb-6">
                            <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">Email Address</label>
                            <v-text-field v-model="email" density="compact" placeholder="name@example.com"
                                variant="outlined" color="black" base-color="grey" hide-details="auto"
                                rounded="lg" prepend-inner-icon="mdi-email-outline"></v-text-field>
                        </div>

                        <div class="mb-10">
                            <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">Password</label>
                            <v-text-field v-model="password" :rules="[rules.required, rules.min]"
                                :append-inner-icon="visible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                                :type="visible ? 'text' : 'password'" density="compact" placeholder="••••••••"
                                variant="outlined" color="black" base-color="grey"
                                @click:append-inner="visible = !visible" hide-details="auto"
                                rounded="lg" prepend-inner-icon="mdi-lock-outline"></v-text-field>
                        </div>

                        <!-- Action Button -->
                        <v-btn block size="large" color="#ee6909" class="text-black font-weight-bold mb-6" type="submit"
                            height="54" rounded="lg" elevation="0">
                            LOG IN
                        </v-btn>

                        <div class="mt-2 text-center">
                            <span class="text-grey-darken-1 text-body-2">Don't have an account? </span>
                            <v-btn variant="plain" color="black" class="text-none font-weight-bold pa-0 text-decoration-underline" to="/signup"
                                :ripple="false">
                                Sign up
                            </v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
