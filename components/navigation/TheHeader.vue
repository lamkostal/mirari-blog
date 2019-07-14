<template>
<div class="header-container">
  <header class="the-header">
    
    <div class="logocontainer level is-marginless">
      <nuxt-link to="/"><img class="logo" src="@/assets/images/mirarilogo1.svg" alt="arenahub logo"></nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/" exact>Home</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/posts">All Posts</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/calculator">Calculator</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/contact">Contact</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
  
      </ul>
    </div>
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>
.logo{
  padding: 0px 0px ;
  height: 100px;
}

.header-container {
  height: 120px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background:rgba(8, 83, 97,1);
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}


.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
    flex:2
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}

.nav-item {
  margin: 0 25px;
  position: relative;
  font-size:18px
}

.nav-item a {
  text-decoration: none;
  color: white;
  padding: 50px 0;
  transition:all 0.3s ease;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
 color:rgb(255, 195, 128);
}
.nav-item a:after{
  content: '';
  transition: width 0.3s ease-out;
  width:0%;
  left:50%;
  position: absolute;


}
.nav-item a:hover:after{
  content: '';
  border-bottom: 2px solid white;
  z-index: 200;
  width:100%;
  left:0%;
  padding: 20px 0;
}
</style>
