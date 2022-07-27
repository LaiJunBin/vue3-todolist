import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    search: {
      text: "",
      done: undefined,
    },
    rawTodos: [],
  }),
  getters: {
    todos: (state) =>
      state.rawTodos
        .filter(
          (todo) =>
            state.search.done === undefined ||
            todo.done.toString() === state.search.done
        )
        .filter((todo) => todo.text.includes(state.search.text)),
  },
  actions: {
    initTodos() {
      localStorage.todos = localStorage.todos || "[]";
      this.rawTodos = JSON.parse(localStorage.todos);
    },

    addTodo(text) {
      const userStore = useUserStore();

      const todo = {
        id: Math.random().toString(36).substr(2),
        username: userStore.username,
        text,
        done: false,
      };

      this.rawTodos.push(todo);
      localStorage.todos = JSON.stringify(this.rawTodos);
    },

    deleteTodo(id) {
      this.rawTodos = this.rawTodos.filter((todo) => todo.id !== id);
      localStorage.todos = JSON.stringify(this.rawTodos);
    },

    switchStatus(id) {
      const todo = this.rawTodos.find((todo) => todo.id === id);
      todo.done = !todo.done;
      localStorage.todos = JSON.stringify(this.rawTodos);
    },

    setSearch({ text, done }) {
      if (text !== undefined) {
        this.search.text = text;
      }

      this.search.done = done;
    },
  },
});
