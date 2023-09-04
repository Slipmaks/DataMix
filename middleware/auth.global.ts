import { storeToRefs } from "pinia";
import { useMyAuthStoreStore } from "~/stores/authStore";

export default defineNuxtRouteMiddleware((to) => {
  const { authorized } = storeToRefs(useMyAuthStoreStore());

  if (authorized.value === false && to?.name === "hello") {
    return { name: "errorPage" };
  }
});
