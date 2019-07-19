<template>
    <div class="page container">
        <h1 class="title is-size-1 ">All posts</h1>
        <PostList :posts="loadedPosts"/>
    </div>
</template>

<script>
import PostList from '@/components/posts/PostList'
export default {
    components:{
        PostList
    },
    computed:{
        loadedPosts() {
            return this.$store.getters.loadedPosts;
        }
    }
   
}
</script>


<style scoped>
.posts-page{
   padding: 50px 0;
}


</style>



