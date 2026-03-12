<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

// Select options
const gymLocations = ['Iron Forge Fitness', 'Pulse Performance Center', 'ZenCore Wellness Studio', 'MetroFit Downtown', 'Elite Sports Conditioning Hub']

// Validation rules
const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    passwordMatch: () => password.value === confirmPassword.value || 'Passwords must match'
}

// Models
const firstName = ref(null)
const lastName = ref(null)
const email = ref(null)
const phoneNumber = ref(null)
const gender = ref(null)
const dob = ref(null)
const selectedGym = ref(null)
const password = ref(null)
const confirmPassword = ref(null)
const visible = ref(false)

function signUp() {
    const userDetails = {
        name: `${firstName.value} ${lastName.value}`,
        email: email.value,
        phone: phoneNumber.value,
        dob: dob.value,
        gender: gender.value,
        gymLocations: selectedGym.value,
        password: password.value,
    }
    //store this data
    try {
        localStorage.setItem('userSignUpData', JSON.stringify(userDetails))
        console.log('User saved:', userDetails)
        router.push('/login') //redirect after success
    } catch (err) {
        console.error('Sign up process failed', err)
    }
}
</script>

<template>
    <v-container fluid class="fill-height bg-white pa-0 overflow-hidden">
        <v-row no-gutters class="fill-height">
            <!-- Left Column: Visual Impact -->
            <v-col cols="12" md="5" class="d-none d-md-flex">
                <v-img
                    src="/images/img2-landscape.jpg"
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

            <!-- Right Column: Sign Up Form -->
            <v-col cols="12" md="7" class="d-flex align-center justify-center bg-white pa-4 pa-md-16 overflow-y-auto">
                <v-card width="100%" max-width="640" min-height="850" border rounded="xl" elevation="0" class="bg-white pa-8 pa-md-12 d-flex flex-column justify-center">
                    <v-form @submit.prevent="signUp">
                        <div class="d-md-none text-center mb-8">
                            <v-img src="/logo_dark-removebg-preview.png" max-width="240" class="mx-auto" contain></v-img>
                        </div>

                        <h1 class="text-h5 font-weight-black text-black mb-2 text-uppercase text-center" style="letter-spacing: -1px;">
                            Create Account
                        </h1>
                        <p class="text-body-1 text-grey-darken-1 mb-8 text-center">
                            Join MacFitness and start your transformation today.
                        </p>

                        <!-- Input Section: Name Group -->
                        <v-row density="compact" class="mb-2">
                            <v-col cols="12" sm="6" class="pb-2">
                                <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">First Name</label>
                                <v-text-field v-model="firstName" density="compact" placeholder="John"
                                    variant="outlined" color="black" base-color="grey-lighten-1" hide-details="auto"
                                    rounded="lg"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" class="pb-2">
                                <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">Last Name</label>
                                <v-text-field v-model="lastName" density="compact" placeholder="Doe"
                                    variant="outlined" color="black" base-color="grey-lighten-1" hide-details="auto"
                                    rounded="lg"></v-text-field>
                            </v-col>
                        </v-row>

                        <!-- Input Section: Identity Group (Full Width) -->
                        <div class="mb-6">
                            <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">Email Address</label>
                            <v-text-field v-model="email" density="compact" placeholder="name@example.com"
                                variant="outlined" color="black" base-color="grey-lighten-1" hide-details="auto" rounded="lg"
                                prepend-inner-icon="mdi-email-outline"></v-text-field>
                        </div>

                        <!-- Input Section: Contact & Info Group -->
                        <v-row density="compact" class="mb-2">
                            <v-col cols="12" sm="7" class="pb-2">
                                <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">Phone Number</label>
                                <v-text-field v-model="phoneNumber" density="compact" placeholder="+254..."
                                    variant="outlined" color="black" base-color="grey-lighten-1" hide-details="auto" rounded="lg"
                                    prepend-inner-icon="mdi-phone-outline"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="5" class="pb-2">
                                <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">Date of Birth</label>
                                <v-date-input v-model="dob" label="" variant="outlined" density="compact"
                                    color="black" base-color="grey-lighten-1" hide-details="auto" rounded="lg" prepend-icon=""
                                    prepend-inner-icon="mdi-calendar-outline"></v-date-input>
                            </v-col>
                        </v-row>

                        <!-- Input Section: Preferences Group -->
                        <v-row density="compact" class="mb-4 align-center">
                            <v-col cols="12" sm="6" class="pb-2">
                                <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">Gender</label>
                                <v-radio-group inline v-model="gender" hide-details class="mt-0">
                                    <v-radio label="Male" value="male" color="black" density="compact"></v-radio>
                                    <v-radio label="Female" value="female" color="black" density="compact"></v-radio>
                                </v-radio-group>
                            </v-col>
                            <v-col cols="12" sm="6" class="pb-2">
                                <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">Preferred Gym</label>
                                <v-select v-model="selectedGym" :items="gymLocations" density="compact"
                                    placeholder="Select Location" variant="outlined" color="black" base-color="grey-lighten-1"
                                    hide-details="auto" rounded="lg" prepend-inner-icon="mdi-map-marker-outline"></v-select>
                            </v-col>
                        </v-row>

                        <v-divider class="mb-8 opacity-20"></v-divider>

                        <!-- Input Section: Security Group -->
                        <v-row density="compact" class="mb-10">
                            <v-col cols="12" sm="6" class="pb-2">
                                <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">Password</label>
                                <v-text-field v-model="password" :rules="[rules.required, rules.min]"
                                    :type="visible ? 'text' : 'password'" density="compact" placeholder="••••••••"
                                    variant="outlined" color="black" base-color="grey-lighten-1" hide-details="auto" rounded="lg"
                                    prepend-inner-icon="mdi-lock-outline"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" class="pb-2">
                                <label class="text-caption font-weight-black text-grey-darken-3 mb-1 d-block text-uppercase ls-1">Confirm Password</label>
                                <v-text-field v-model="confirmPassword" :rules="[rules.required, rules.passwordMatch]"
                                    :append-inner-icon="visible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                                    :type="visible ? 'text' : 'password'" density="compact" placeholder="••••••••"
                                    variant="outlined" color="black" base-color="grey-lighten-1"
                                    @click:append-inner="visible = !visible" hide-details="auto" rounded="lg"
                                    prepend-inner-icon="mdi-lock-check-outline"></v-text-field>
                            </v-col>
                        </v-row>

                        <!-- Action Button -->
                        <v-btn block size="large" color="#ee6909" class="text-black font-weight-bold mb-6" type="submit"
                            height="54" rounded="lg" elevation="0">
                            CREATE ACCOUNT
                        </v-btn>

                        <div class="mt-2 text-center">
                            <span class="text-grey-darken-1 text-body-2">Already have an account? </span>
                            <v-btn variant="plain" color="black" class="text-none font-weight-bold pa-0 text-decoration-underline"
                                to="/login" :ripple="false">
                                Login here
                            </v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style></style>
