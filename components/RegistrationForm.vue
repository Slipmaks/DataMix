<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <VeeForm as="" v-slot="{ handleSubmit }" :validation-schema="userSchema">
        <form
          class="space-y-8"
          @submit.prevent="handleSubmit($event, onSubmit)"
        >
          <div>
            <label
              for="login"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Login</label
            >
            <div class="mt-2">
              <VeeField
                name="login"
                type="login"
                autocomplete="login"
                class="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <VeeErrorMessage name="login" class="text-red-500 absolute" />
          </div>

          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Email address</label
            >
            <div class="mt-2">
              <VeeField
                name="email"
                type="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <VeeErrorMessage name="email" class="text-red-500 absolute" />
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
            </div>
            <div class="mt-2">
              <VeeField
                name="password"
                type="password"
                autocomplete="current-password"
                class="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <VeeErrorMessage name="password" class="text-red-500 absolute" />
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
          <NuxtLink
            to="/hello"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Try without registration :)
          </NuxtLink>
          <p v-if="store.niceTry.length">{{ store.niceTry }}&#128521;</p>
        </form>
      </VeeForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as Yup from "yup";
import { useMyAuthStoreStore } from "~/stores/authStore";

let userSchema = Yup.object({
  login: Yup.string()
    .required()
    .min(6, "Login must be 6 characters long")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

const store = useMyAuthStoreStore();

function onSubmit(userAuthData: any) {
  store.authUser(userAuthData);
}
</script>

<style></style>
