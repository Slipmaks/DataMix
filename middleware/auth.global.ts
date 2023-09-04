import { storeToRefs } from "pinia";
import { useMyAuthStoreStore } from "~/stores/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const { authorized, niceTry } = storeToRefs(useMyAuthStoreStore());

  if (to?.name === "hello" && authorized.value === false) {
    niceTry.value = "nice try";
    return navigateTo("/");
  }
});
