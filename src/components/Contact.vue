<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const WEB3FORMS_ACCESS_KEY = "3fd9b872-bd33-468e-8042-74e1f2fb4384";
  const name = ref("");
  const prenom = ref("");
  const email = ref("");
  const object = ref("");
  const message = ref("");

  const submitForm = async () => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "3fd9b872-bd33-468e-8042-74e1f2fb4384",
        name: name.value,
        prenom: prenom.value,
        email: email.value,
        object: object.value,
        message: message.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      alert("Votre message a bien été envoyé !");
      name.value = "";
      prenom.value = "";
      email.value = "";
      object.value = "";
      message.value = "";}
  }
</script>
  
<template>
  <div class="flex justify-center items-center h-screen  border-white">
    <div class="bg-gray-700 p-8 border-white rounded-lg shadow-lg max-w-md w-full">
      <h2 class="text-2xl font-bold mb-4 text-white">Formulaire de contact</h2>
      <form @submit.prevent="submitForm">
        <div class="flex">
            <div class="mr-3 mt-4 mb-4">
            <input
                id="name"
                type="text"
                name="name"
                v-model="name"
                placeholder="Votre nom"
                class="w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            </div>
            <div class="ml-3 mt-4 mb-4">
            <input
                id="prenom"
                type="text"
                name="prenom"
                v-model="prenom	"
                placeholder="Votre prenom"
                class="w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
            />
            </div>
        </div>
        <div class="mb-4">
          <input
            id="email"
            type="email"
            name="email"
            v-model="email"
            placeholder="Votre email"
            class="w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <input
            id="object"
            type="object"
            name="object"
            v-model="object"
            placeholder="Objet de votre message"
            class="w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <textarea
            id="message"
            name="message"
            v-model="message"
            rows="3"
            placeholder="Votre message..."
            class="w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

