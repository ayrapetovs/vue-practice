<script setup>
const {getPost, updatePost} = usePost();
const {data: postData} = await getPost();

</script>


<template>

    <div class="w-1/2 mx-auto p-4">
      <div class="mb-4">
        <NuxtLink :to="{name: 'posts'}" class="text-white text-xs uppercase px-3 py-2 border border-sky-700">back</NuxtLink>
      </div>
      <div class="bg-white border border-b-gray-200 p-4 mb-4">

        <div class="mb-4">
          <input v-model="postData.title" type="text" placeholder="title" class="p-4 border border-gray-200 w-full"/>
        </div>
        <div class="mb-4">
          <textarea v-model="postData.content" placeholder="content" class="p-4 border border-gray-200 w-full"/>
        </div>

        <div>
          <a href="#" @click.prevent="updatePost(postData)" class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white">
            Update Post</a>
        </div>

      </div>

    </div>

</template>

<style scoped>

</style>