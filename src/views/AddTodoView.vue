<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useTodoStore } from "../stores/todo";
import TheInput from "../components/TheInput.vue";
import TheButton from "../components/TheButton.vue";

const todo = ref("");
const todoStore = useTodoStore();
const router = useRouter();

const addTodo = () => {
  todoStore.addTodo(todo);
  router.push({ name: "home" });
};
</script>

<template>
  <div>
    <h1 class="text-3xl ml-2">Add Todo</h1>

    <form @submit.prevent="addTodo">
      <div class="grid grid-cols-[100px_1fr] gap-2 items-center m-4">
        <TheInput label="todo-input" text="Todo: " v-model="todo" />
      </div>

      <div class="text-center mt-2 mx-4">
        <TheButton class="bg-green-500 text-white">Add</TheButton>
      </div>
    </form>
  </div>
</template>
