<template>
  <div class="w-full max-w-[320px] self-end mb-2">
    <div v-if="showName()">
      <span class="text-sm font-semibold text-gray-900 dark:text-white">{{
        name
      }}</span>
    </div>
    <div
      class="leading-1.5 p-4 border-gray-200 bg-pink-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
    >
      <p class="text-sm font-normal text-gray-900 dark:text-white">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue';

const props = defineProps({
  message: String,
  name: String,
  previousName: String
});


function showName() {
  if (props.previousName == undefined) return true;
  if (props.previousName) {
    return props.name.trim() != props.previousName.trim();
  }
}
</script>
