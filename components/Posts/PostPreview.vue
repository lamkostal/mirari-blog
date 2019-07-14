<template>
    <nuxt-link class="column is-mobile is-half " :to="postLink" >
        <article class="box">
          <div class="post-thumb" >
           <div class="post-content ">
             <h2 class="title is-4">{{postTitle}}</h2>
            <div class="backgr image" :style="{backgroundImage:`url(${thumbnail})`}"></div>
            <div class="descriptive content">
                  <h3 class="subtitle is-6 sub">{{postSubtitle}}</h3>
                  <p class="is-5">{{previewText}}</p>
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
        
    },
    computed:{
        postLink(){
            return this.isAdmin? '/Admin/'+this.id : '/posts/' +this.id
        }
    }
}
</script>


<style scoped>


.post-thumb{
    padding: 10px
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
  height: 300px
}
.backgr{
    width:100%;
    height:300px;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover ;
}
.sub{
  height: 20px;
}


</style>

