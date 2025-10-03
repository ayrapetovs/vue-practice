<script setup>
definePageMeta({
  layout: 'main',
});

const {
  data: postsData,
  refresh: refrachPost,
  error: errorPosts,
} = await useLazyFetch('http://localhost:3001/posts');

const deletePost = async (post) => {
  const res = await $fetch(`http://localhost:3001/posts/${post.id}`, {
    method: 'DELETE',
  });

  // postsData.value = postsData.value.filter((postItem) => postItem !== post);
};
</script>

<template>
  <div class="p-4 mx-auto w-1/2">
    <div class="mb-4">
      <NuxtLink
          :to="{ name: 'posts-create' }"
          class="text-white text-xs uppercase px-3 py-2 border border-sky-700"
      >add posts
      </NuxtLink>
    </div>

    <div
        v-for="post in postsData"
        :key="post.id"
        class="bg-white p-4 border border-gray-200 w-full mb-4"
    >
      <div class="mb-4">
        <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">
          <h3 class="text-lg mb-2 font-bold text-gray-700">
            {{ post.title }}
          </h3>
        </NuxtLink>
        <p class="text-sm text-gray-500">{{ post.content }}</p>
      </div>
      <div class="flex gap-2">
        <NuxtLink :to="{ name: 'posts-id-edit', params: { id: post.id } }">Edit</NuxtLink>
        <a @click.prevent="deletePost(post)" href="#" class="text-red-600">Delete</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
