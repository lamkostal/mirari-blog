<template>
    <section class="footer ">
 <css-doodle>
  :doodle {
    @grid: 20 / 100vmax;
    background: #0a0c27;
    font-family: sans-serif;
  }
background:rgba(8, 83, 97,@rand(.6));
  <!-- background: rgba(96, 86, 158, @rand(.9)); -->
transition: 20s ease-out @rand(4000ms);
transform: rotate(@rand(360deg));
clip-path: polygon(
  @rand(150%) 0, 100% @rand(80%), 0 @rand(20%)
);
</css-doodle>
       <div class="container fcontent">
            <div class="columns">
                <div class="column">
                    <ul class="footerlinks">
                     
        <li class="nav-item flink"><nuxt-link class="flink" to="/" exact>Home</nuxt-link></li>
        <li class="nav-item flink"><nuxt-link class="flink" to="/posts">All Posts</nuxt-link></li>
        <li class="nav-item flink"><nuxt-link class="flink" to="/calculator">Calculator</nuxt-link></li>
        <li class="nav-item flink"><nuxt-link class="flink" to="/contact">Contact</nuxt-link></li>
        <li class="nav-item flink"><nuxt-link class="flink" to="/about">About</nuxt-link></li>
  
     
                    </ul>
                </div>
                <div class="column"></div>
                <div class="column"></div>
            </div>
       </div>
    </section>
</template>

<script>

export default {
  name: "TheFooter",
  components: {
   
  }
};
</script>


<style scoped>

.footer{
    height: 300px;
    background:grey;
    margin-top:100px;
    overflow: hidden;
    position: relative;
    padding: 0;
}
.fcontent{
    position: absolute;
    top:0;
    padding: 50px;
}
@media (max-width:600px){
  .fcontent{
   
    padding: 40px 15px 0px;
}
.footer{margin-top:0}
}
.footerlinks{
    /* position:absolute; */
    display: flex;
    flex-direction: column;
}
.flink{
    padding: 7px 10px;
    color: white;
}.flink:hover{

  color:rgb(255, 195, 128);
}


</style>