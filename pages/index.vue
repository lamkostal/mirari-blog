<template>
  <div class="homepage">
   <section class='canvas-container'>
     <canvas id="glcanvas" ></canvas>
   </section>
  
    <section class="content main-section">
      <div class="fullheight columns">
        <div class="titles has-text-centered column is-6 ">
          <h1 class="title is-1 is-marginless ">Welcome to Mirari!</h1>
          
          <div class="sub"
          ><h2 class="subtitle is-5 sub is-centered">An MTGArena blog - Stay tuned for some cool stuff. </h2></div>
        </div> 
      </div>
      <div class="container postlist-container">
        
        <h2 class="decor title is-3">Recent posts</h2>
        <PostList :posts="loadedPosts" isRecent/>
      </div>
    </section>     
    
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
 
  components:{
    PostList,
  },
  // asyncData(context){
  //   return context.app.$storyapi.get('cdn/stories',{
  //     version:'draft',
  //     starts_with : 'blog/'
  //   }).then( res => {
  //     console.log(res)
  //     return {
  //       posts : res.data.stories.map( bp => {
  //        return {
  //          title:bp.content.title,
  //          previewText:bp.content.previewText,
  //          id:bp.slug,
  //          content:bp.content.content,
  //          thumbnail:bp.content.thumbnail
  //        } 
  //       })
  //     }
  //   })
  //   .catch(e => console.log(e))

  // },
  computed:{
    loadedPosts(){
      return this.$store.getters.loadedPosts
    }
  },
  mounted: function () {
  CABLES.patch = new CABLES.Patch({
        patchFile: 'js/clusterdeckOpt.json',
        prefixAssetPath: '',
        glCanvasId: 'glcanvas',
        glCanvasResizeToWindow: true,
        glCanvasResizeToParent:true,
        onError: showError,
        onPatchLoaded: patchInitialized,
        onFinishedLoading: patchFinishedLoading,
    });
}
 
  
}
 
</script>
 
 

<style scoped>
.fullheight{
  height:100vh;
  display: flex;
  align-items: center;
}
.titles{
  position: relative;
  padding: 05vh 5vw 20vh 0;
 
  /* z-index: 100; */
}
.titles h2{
  color:grey;
  font-weight: 400;
  }
  .decor{

    border-left:rgb(255, 195, 128) 5px solid;
    padding:0 10px 0 10px;
  }

.main-section{
  padding: 5vh 0 0 0 ;
}

@media only screen and (max-width: 600px){
.main-section{
  padding: 25vh 15px 0 15px ;
}
 } 

.postlist-container{
  padding: 0vh 0 05vh 0;
  margin-top:-100px;
 z-index: 11;

}
.canvas-container{
 height:100vh;
 width:100%;
 position: absolute;
 z-index: 10;
 /* left:100px */
}
canvas{
  /* position: absolute; */
  /* height: 200px; */
   font-size: inherit;
}
canvas {
  font-size: inherit;
            }
 @media only screen and (max-width: 600px){
.canvas-container{
 height:30vh;
 width:100%;
 left:0px
}
 }           


.homepage{
  margin:0;
  padding: 0;
}

</style>

