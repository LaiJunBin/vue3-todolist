<script setup>
import { onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { useTodoStore } from "../stores/todo";
import { useDebounce } from "../utils";
import TheTodo from "./TheTodo.vue";
import TodoFilterLink from "./TodoFilterLink.vue";
import TheInput from "./TheInput.vue";

const route = useRoute();
const todoStore = useTodoStore();
const debounce = useDebounce(300);

todoStore.initTodos();

onBeforeRouteUpdate((to) => {
  const { done } = to.query;
  todoStore.setSearch({ done });
});

onMounted(() => {
  const { done } = route.query;
  todoStore.setSearch({ done });
});
</script>

<template>
  <div class="max-w-[640px] mx-auto my-2">
    <div>
      過濾:
      <TodoFilterLink done="true">Done</TodoFilterLink>
      <TodoFilterLink done="false">UnDone</TodoFilterLink>
      <TodoFilterLink>None</TodoFilterLink>
    </div>

    <TheInput
      type="text"
      placeholder="Search.."
      class="w-full my-4"
      @input="
        debounce(() =>
          todoStore.setSearch({
            ...todoStore.search,
            text: $event.target.value,
          })
        )
      "
    />

    <div class="grid grid-cols-[100px_1fr_max-content] gap-2">
      <div class="text-center font-black">Id</div>
      <div class="text-center font-black">Text</div>
      <div class="text-center font-black">Operation</div>

      <TheTodo
        v-for="todo in todoStore.todos"
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        :done="todo.done"
      />
    </div>
  </div>
</template>
