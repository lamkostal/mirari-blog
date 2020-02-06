<template>
    <div class="page container ">
        <section class="columns is-centered">
            <div class="column is-two-thirds">
                <h1 class="title is-1">{{title}}</h1>
                <p class="is-6">{{content}}</p>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    asyncData(context){
        return context.app.$storyapi.get('cdn/stories/about', {
             version : process.env.NODE_ENV == 'production' ? 'published' : 'draft',
            })
            .then(res =>{
                return {
                        title : res.data.story.content.title,
                        content : res.data.story.content.content
                        }
            })
    }
}
</script>


<style scoped>

p{
     white-space: pre-line;
     /* font-size:1.2rem */
}
</style>

