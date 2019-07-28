    <template >
        <div class="single-post-page columns is-centered ">
            <section class="post column is-7 overflow" v-editable="loadedPost.blok">
               <div class="postimage image">
                    <img :src= loadedPost.thumbnail >
               </div>
               <div class="post-title">
                    <h1 class="title">{{loadedPost.title}}</h1>
                    <div class="">
                        <h2 class="post-subtitle subtitle is-marginless is-size-4">{{loadedPost.subtitle}}</h2>  
                        <span class="grey is-size-7"> {{fixedDate}}</span>
                    </div>
               </div>
                 <br>
                <div v-html="$md.render(loadedPost.content)" class="md-content "></div>
                  <div class="embed" v-html="loadedPost.video"></div>
               
                <div class="author ">
                    <p class="author-name is-size-7">
                        Written by {{loadedPost.author}}
                    </p>
                </div>
                <SocialShares :slug="slug"></SocialShares>        
              
               
            </section>
 
        </div>
    </template>

    <script>
    import SocialShares from "@/components/UI/SocialShares.vue"

    export default {
        components:{
            SocialShares,
        },
       
        computed:{
            loadedPost(){
                let allstoredPosts = this.$store.getters.loadedPosts
                return allstoredPosts.find( (e) =>{
                   return e.id === this.$route.params.id
                    
                })
               
            },  
            fixedDate(){
                let oldDate = this.loadedPost.date
                return oldDate.substring(0,11);
               
            },
            slug(){
                return this.$route.params.id;
            }
          
        },
        // asyncData(context){
        //     return context.app.$storyapi.get('cdn/stories/posts/'+context.params.id,{
        //             version:'draft',
                    
        //           }).then( res => {
        //             console.log(res) 
                    
        //                return {
        //                  blok:res.data.story.content,
        //                  title:res.data.story.content.title,
        //                  previewText:res.data.story.content.previewText,
        //                  id:res.data.story.slug,
        //                  content:res.data.story.content.content,
        //                  thumbnail:res.data.story.content.thumbnail
        //                } 
                     
              
                   
                    
        //           })
        // },
        mounted() {
            this.$storyblok.init();
            this.$storyblok.on("change", () => {
            location.reload(true);
            });
           console.log(this.$route.params.id)
        }
     
    }

    </script>
    

    <style scoped>
    .single-post-page{
        padding: 30px
    }
    .postimage{
        height:400px;
        overflow: hidden;
       
    }
    @media (max-width:600px){

    .postimage{
        height:auto;
        overflow: hidden;
       
    }
    }
    .post-title{
        padding: 20px 0 0 0;
      
    }
    .post-subtitle{
        padding: 0
    }
    .author{
        margin:30px 0;
        display: flex;
        justify-content: flex-end;
    }
    .author-name{
        /* color:rgba(8, 83, 97,1);
        color:rgb(255, 195, 128); */
        color:gray;
        background:#fff;
        padding:6px 10px;
        border-radius: 10px;
        flex: 0 1 auto;
        box-shadow: 1px 1px 1px 1px lightgrey;
      
    }
    .md-content{
        margin:1rem 0;
        
    }
    .embed{
        margin:1rem 0;
    }
    .overflow{
        overflow: hidden;
    }
  
   
  
    </style>
    
       