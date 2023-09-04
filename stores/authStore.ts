type User = {
  login: string;
  email: string;
  password: string;
};

export const useMyAuthStoreStore = defineStore({
  id: "myAuthStoreStore",
  state: () => ({
    user: {},
    authorized: false,
    niceTry: "",
  }),
  actions: {
    authUser(user: User) {
      this.user = user;
      this.authorized = true;
      navigateTo("/hello");
    },
    logoutUser() {
      this.authorized = false;
      this.niceTry = "";
      navigateTo("/");
    },
  },
});
