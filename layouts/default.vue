<template>
  <div class="default">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav :show="displaySidenav"  @close="displaySidenav=false"/> 
    <nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader'
import TheFooter from '@/components/navigation/TheFooter'
import TheSidenav from '@/components/navigation/TheSidenav'
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
