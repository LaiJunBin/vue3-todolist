<script setup></script>

<template>
  <button
    class="px-4 py-2 rounded-sm transition hover:brightness-105"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
