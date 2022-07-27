<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "./components/TheNavbar.vue";
import TheLoading from "./components/TheLoading.vue";
import { useGlobalStore } from "./stores/global";

const globalStore = useGlobalStore();
</script>

<template>
  <TheNavbar />

  <div>
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

  <TheLoading v-if="globalStore.loading" />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}
</style>
