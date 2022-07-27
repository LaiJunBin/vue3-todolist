import { createRouter, createWebHistory } from "vue-router";
import { useGlobalStore } from "../stores/global";
import { useUserStore } from "../stores/user";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        requireAuth: false,
      },
    },
    {
      path: "/create",
      name: "create-todo",
      component: () => import("../views/AddTodoView.vue"),
      meta: {
        requireAuth: true,
      },
    },
  ],
});

router.beforeEach(async (to) => {
  const userStore = useUserStore();
  const globalStore = useGlobalStore();

  if (!globalStore.initialized) {
    await userStore.refreshUser(localStorage.token);
    globalStore.init();
  }

  if (to.meta.requireAuth !== undefined) {
    if (userStore.isLogin ^ to.meta.requireAuth) {
      return { name: "home" };
    }
  }
});

export default router;
