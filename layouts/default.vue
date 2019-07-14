<template>
  <div class="default">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav :show="displaySidenav"  @close="displaySidenav=false"/> 
    <nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheFooter from '@/components/Navigation/TheFooter'
import TheSidenav from '@/components/Navigation/TheSidenav'
export default {
  components:{
    TheHeader,
    TheSidenav,
    TheFooter
  },
  data(){
    return{
      displaySidenav:false
    }
  },
  
}
</script>


<style>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}



</style>
