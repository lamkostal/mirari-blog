<template>
    <div class="about-page container">
        <section >
            <div class="">
                <h1 class="title is-1">{{title}}</h1>
                <p>{{content}}</p>
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
.about-page{
    padding: 50px 0;
}
p{
     white-space: pre-line;
     font-size:1.2rem
}
</style>

