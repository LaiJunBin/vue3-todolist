<script setup>
import { useTodoStore } from "../stores/todo";
import TheButton from "./TheButton.vue";

const props = defineProps({
  id: String,
  text: String,
  done: Boolean,
});

const todoStore = useTodoStore();
</script>

<template>
  <div>
    {{ props.id }}
  </div>

  <div class="flex-grow px-4">
    {{ props.text }}
  </div>

  <div class="text-center">
    <TheButton
      class="text-white"
      :class="{
        'bg-yellow-500': props.done,
        'bg-green-500': !props.done,
      }"
      @click="todoStore.switchStatus(props.id)"
    >
      {{ props.done ? "UnDone" : "Done" }}
    </TheButton>
    <TheButton
      class="bg-red-500 text-white"
      @click="todoStore.deleteTodo(props.id)"
    >
      Delete
    </TheButton>
  </div>
</template>
