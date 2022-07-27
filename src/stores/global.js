import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    loading: false,
    initialized: false,
  }),
  getters: {},
  actions: {
    setLoading(loading) {
      this.loading = loading;
    },
    init() {
      this.initialized = true;
    },
  },
});
