<script>
export default {
  inheritAttrs: false,
};
</script>

<script setup>
import { useAttrs } from "vue";
defineProps({
  modelValue: String,
});

defineEmits(["update:modelValue"]);

const { label, text, class: className, ...rest } = useAttrs();
</script>

<template>
  <label v-if="text" :for="label">{{ text }}</label>
  <input
    v-bind="rest"
    :class="`border border-gray-700 rounded-sm p-2 ${className}`"
    :id="label"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
