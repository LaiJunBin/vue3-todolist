import { defineStore } from "pinia";
import userData from "../const/data/users";
import { useGlobalStore } from "./global";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    username: null,
  }),
  getters: {
    isLogin: (state) => {
      return state.username !== null;
    },
  },
  actions: {
    async refreshUser(token) {
      const globalStore = useGlobalStore();
      globalStore.setLoading(true);

      return new Promise((resolve) =>
        setTimeout(() => {
          if (userData.find((u) => u.username === token)) {
            this.username = token;
            resolve(true);
          } else {
            localStorage.removeItem("token");
            resolve(false);
          }
        }, 500)
      ).finally(() => {
        globalStore.setLoading(false);
      });
    },
    async login(username, password) {
      const globalStore = useGlobalStore();
      globalStore.setLoading(true);

      return new Promise((resolve) =>
        setTimeout(() => {
          if (
            userData.find(
              (u) => u.username === username && u.password === password
            )
          ) {
            this.username = username;
            localStorage.token = username;
            resolve(true);
          } else {
            resolve(false);
          }
        }, 500)
      ).finally(() => {
        globalStore.setLoading(false);
      });
    },

    logout() {
      this.username = null;
      localStorage.removeItem("token");
    },
  },
});
