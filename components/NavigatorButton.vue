<template>
  <button @click="$router.push({ name: routeName })">
    Go to {{ routeName }}
  </button>
</template>

<script setup lang="ts">
defineProps(["routeName"]);
</script>
