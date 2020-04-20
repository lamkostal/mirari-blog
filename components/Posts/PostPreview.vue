<template>
    <nuxt-link class="column is-mobile is-half" :class="postWidth" :to="postLink" >
        <article class="box">
          <div class="post-thumb" >
           <div class="post-content">
             <div class="header">
                 
                 <h2 class="title is-5 is-inline-flex" ><img class="tube-icon  icon" src="@/assets/images/icon-youtube (omg).svg" alt="video icon" v-if="videoicon" >{{postTitle}}</h2>

             </div>
            <div class="backgr image" :style="{backgroundImage:`url(${thumbnail})`}"></div>
            <div class="descriptive content">
                  <h3 class="subtitle is-5 sub">{{postSubtitle}}</h3>
                  <p class="is-7">{{previewText}}</p>
            </div>
           </div>
          </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    props:{ 
        id:{
            type:String,
            required:true
        },
        postTitle:{
           type:String,
           required:true 
        },
        postSubtitle:{
           type:String,
            required:true 
        },
        previewText:{
            type:String,
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        videoicon:{
            type:Boolean,   
        },
          postWidth: {
              type:String,
          }
        

        
    },
    computed:{
        postLink(){
            return this.isAdmin? '/Admin/'+this.id : '/posts/' +this.id
        }
    }
}
</script>


<style scoped>

.header{
    min-height:5rem;
    padding-top:0.5rem;
}


.post-thumb{
    padding: 10px 0;
}
.descriptive h3{
    color:grey;
    font-weight:300;
}
.descriptive{
    padding: 10px 0 0 0;
}

.post-preview{
  border: 1px solid #cccccc;
  box-shadow: 0 2px 2px #cccccc;
  background-color: white;
  /* width: 90%; */
  /* min-height: 300px */
}
.backgr{
    width:100%;
    height:300px;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover ;
    margin-top:10px;
}

.tube-icon{
   
    margin-right: 10px;
    position: relative;
 
  
}


</style>

