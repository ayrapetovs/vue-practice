import{useRoute} from 'vue-router'

export const usePost = () => {
    const route = useRoute();
    const getPosts = async ()=> {
        return await useLazyFetch('http://localhost:3001/posts');
    }

    const getPost = async () => {
        return await useFetch(`http://localhost:3001/posts/${route.params.id}`);
    }

    const updatePost = async (postData) => {
        const res = await $fetch(`http://localhost:3001/posts/${route.params.id}`, {
            method: 'PATCH',
            body: postData
        })
    }


    const addPost = async (post) => {

        const res =  await $fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: post
        })

        Object.assign(post, {
            title: '',
            content: '',
        })


    }


    const deletePost = async (post) => {
        const res = await $fetch(`http://localhost:3001/posts/${post.id}`, {
            method: 'DELETE',
        });

        // postsData.value = postsData.value.filter((postItem) => postItem !== post);
    };

    return {getPosts, getPost, addPost, updatePost, deletePost}
}