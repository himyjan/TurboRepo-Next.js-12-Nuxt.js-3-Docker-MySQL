<script setup>
const route = useRoute();
</script>

<template>
  <div class="text-orange-500 text-[50px]">dynamic url: {{ route.path }}</div>
</template>
