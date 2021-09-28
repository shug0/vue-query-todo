<template>
  <div class="flex gap-3 bg-gray-800 justify-center">
    <router-link class="text-white p-4" to="/">Home</router-link>
    <router-link class="text-white p-4" to="/shops">Shops</router-link>
    <router-link class="text-white p-4" to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
