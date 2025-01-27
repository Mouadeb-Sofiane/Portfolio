<script setup lang="ts">
import { ref } from 'vue'

const WEB3FORMS_ACCESS_KEY = '3fd9b872-bd33-468e-8042-74e1f2fb4384'
const name = ref('')
const prenom = ref('')
const email = ref('')
const object = ref('')
const message = ref('')

const submitForm = async () => {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      prenom: prenom.value,
      email: email.value,
      object: object.value,
      message: message.value
    })
  })

  const result = await response.json()
  if (result.success) {
    alert('Votre message a bien été envoyé !')
    name.value = ''
    prenom.value = ''
    email.value = ''
    object.value = ''
    message.value = ''
  } else {
    alert("Une erreur s'est produite, veuillez réessayer.")
  }
}
</script>

<template>
  <div>
    <section class="contact-us">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10"></div>
        <div
          class="contact-wrapper p-10 rounded-2xl shadow-lg relative"
          :class="{
            'text-white': isDarkMode,
            'bg-third': !isDarkMode,
            'text-primary': !isDarkMode,
            'bg-gray-700': isDarkMode
          }"
        >
          <div class="flex flex-col lg:flex-row items-start lg:items-center">
            <div class="w-full lg:w-2/3">
              <form @submit.prevent="submitForm">
                <div class="flex flex-col md:flex-row md:space-x-4">
                  <div class="mb-4 w-full">
                    <label class="block text-gray-700 mb-1" for="name" style="font-family: 'Viga'"
                      >Nom</label
                    >
                    <input
                      id="name"
                      v-model="name"
                      type="text"
                      placeholder="Votre nom"
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
                      style="font-family: 'Viga'"
                    />
                  </div>
                  <div class="mb-4 w-full">
                    <label class="block text-gray-700 mb-1" for="prenom" style="font-family: 'Viga'"
                      >Prénom</label
                    >
                    <input
                      id="prenom"
                      v-model="prenom"
                      type="text"
                      placeholder="Votre prénom"
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
                      style="font-family: 'Viga'"
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 mb-1" for="email" style="font-family: 'Viga'"
                    >Email</label
                  >
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    placeholder="Votre email"
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
                    style="font-family: 'Viga'"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 mb-1" for="object" style="font-family: 'Viga'"
                    >Objet</label
                  >
                  <input
                    id="object"
                    v-model="object"
                    type="text"
                    placeholder="Objet de votre message"
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
                    style="font-family: 'Viga'"
                  />
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 mb-1" for="message" style="font-family: 'Viga'"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    v-model="message"
                    placeholder="Votre message..."
                    rows="4"
                    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
                    style="font-family: 'Viga'"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-primary text-white py-2 px-4 rounded-lg hover:scale-105 focus:outline-none focus:ring-2"
                  style="font-family: 'Viga'"
                >
                  Envoyer
                </button>
              </form>
            </div>
            <div class="hidden lg:block lg:w-1/3 relative">
              <img
                src="../assets/img/software.png"
                alt="Contact Background"
                class="absolute right-[-20px] top-[-100px] w-96"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="h-10"></div>
    </section>
  </div>
</template>
