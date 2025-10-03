<script setup>
const route = useRoute();
const {data: postData} = await useFetch(`http://localhost:3001/posts/${route.params.id}`);
</script>

<template>
  <div class="p-4 mx-auto w-1/2">
    <div class="mb-4">
      <NuxtLink :to="{name: 'posts'}" class="text-white text-xs uppercase px-3 py-2 border border-sky-700">back</NuxtLink>
    </div>
    <div class="bg-white p-4 border border-gray-200 w-full mb-4">
      <h3 class="text-lg mb-2 font-bold text-gray-700">{{ postData.title }}</h3>
      <p class="text-sm text-gray-500">{{ postData.content }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>