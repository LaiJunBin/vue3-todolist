<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  done: String,
});
</script>

<template>
  <RouterLink
    class="hover:brightness-105 mx-1"
    :class="{ 'text-blue-500': $route.query.done === props.done }"
    :to="{
      name: 'home',
      query: { done: props.done ? props.done === 'true' : undefined },
    }"
  >
    <slot></slot>
  </RouterLink>
</template>
