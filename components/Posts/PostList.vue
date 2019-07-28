<template>
   <div class="container">
        <section class=" columns is-tablet is-multiline ">
    
          <Post-Preview
          
          v-for="post in filteredPosts"
          :key="post.id"
          :id="post.id"
          :postTitle="post.title"
          :postSubtitle="post.subtitle"
          :previewText="post.previewText"
          :thumbnail="post.thumbnail"
          :videoicon="post.videoicon"
          />
    
        </section>
   </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
    components:{
        PostPreview
    },
    props:{     
        posts:{
            type:Array,
            required:true
        },
        isRecent:{
            type:Boolean,
           
        }
    },
    computed: {
   filteredPosts: function () {
       if(this.isRecent){
           return this.posts.slice(0, 4)
       }else{
           return this.posts
       }
     
     }
  }
    
}
</script>

<style>


</style>


