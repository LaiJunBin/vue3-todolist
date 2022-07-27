<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const router = useRouter();

const onLogout = () => {
  userStore.logout();
  router.push({ name: "home" });
};
</script>

<template>
  <nav
    class="bg-purple-700 text-white flex justify-between items-center p-2 mb-4"
  >
    <h1 class="text-2xl">
      <RouterLink :to="{ name: 'home' }">TodoList</RouterLink>
    </h1>
    <ul>
      <li
        class="opacity-80 cursor-pointer hover:opacity-100"
        v-if="userStore.isLogin"
        @click="onLogout"
      >
        Logout
      </li>
      <li v-else>
        <RouterLink
          :to="{ name: 'login' }"
          class="opacity-80 hover:opacity-100"
          active-class="opacity-100"
          >Login</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
