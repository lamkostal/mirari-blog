<template>
<div class="header-container">
  <header class="the-header" :class="{scrolled:scrolled}">
    
    <div class="logocontainer level is-marginless">
      <nuxt-link to="/" exact>
      <!-- <img 
      class="logo" 
      :class="{scrolled:scrolled}"
      src="@/assets/images/mirarilogo4.svg" 
      alt="mirari blog logo"> -->
      <div class="logo" :class="{scrolled:scrolled}">
        <svg width="50%" height="100%" viewBox="0 0 116 81" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M67.5,60.5c2.17,3.49 5.85,4.34 6.89,9.6c0.28,-0.51 0.43,-1.1 0.43,-1.72c0,-8.79 -6.21,-7.17 -7.31,-14.33l0,6.45l-0.01,0Z" style="fill:#ff8200;" class="rednsc" /><path d="M75.92,62.1c3.33,2.39 7.06,1.77 10.03,6.22c0.068,-0.595 -0.018,-1.198 -0.25,-1.75c-3.36,-8.11 -8.49,-4.24 -12.24,-10.44l2.46,5.96l0,0.01Z" style="fill:#ff8200;" class="rednsc" /><path d="M60.34,55.8c0.66,4.05 3.73,6.25 2.69,11.5c0.45,-0.36 0.82,-0.84 1.06,-1.41c3.36,-8.12 -3,-9 -1.28,-16.04l-2.47,5.95Z" style="fill:#ff8200;" class="rednsc" /><path d="M84.3,60.34c4,0.94 7.2,-1.05 11.66,1.92c-0.166,-0.575 -0.476,-1.098 -0.9,-1.52c-6.22,-6.2 -9.47,-0.67 -15.31,-4.96l4.56,4.56l-0.01,0Z" style="fill:#ff8200;" class="rednsc" /><path d="M102.88,52.84c-0.372,-0.467 -0.858,-0.832 -1.41,-1.06c-8.12,-3.37 -9,3 -16.04,1.27l5.95,2.47c4.026,-0.656 6.224,-3.694 11.5,-2.68Z" style="fill:#ff8200;" class="rednsc" /><path d="M96.08,48.36l-6.45,0c7.16,-1.1 5.54,-7.32 14.33,-7.32c0.62,0 1.2,0.15 1.71,0.44c-5.25,1.04 -6.1,4.72 -9.6,6.88l0.01,0Z" style="fill:#ff8200;" class="rednsc" /><path d="M103.9,29.91c-0.596,-0.065 -1.199,0.025 -1.75,0.26c-8.11,3.36 -4.24,8.48 -10.44,12.24l5.96,-2.47c2.386,-3.31 1.787,-7.006 6.23,-10.03Z" style="fill:#ff8200;" class="rednsc" /><path d="M97.84,19.9c-0.56,0.17 -1.08,0.47 -1.52,0.9c-6.2,6.22 -0.67,9.47 -4.96,15.31l4.56,-4.55c0.94,-4 -1.05,-7.2 1.92,-11.65l0,-0.01Z" style="fill:#ff8200;" class="rednsc" /><path d="M88.42,12.98c-0.469,0.375 -0.834,0.864 -1.06,1.42c-3.37,8.11 3,9 1.27,16.04l2.47,-5.96c-0.656,-4.026 -3.694,-6.224 -2.68,-11.5Z" style="fill:#ff8200;" class="rednsc" /><path d="M77.06,10.19c-0.29,0.5 -0.44,1.1 -0.44,1.71c0,8.79 6.22,7.17 7.32,14.33l0,-6.43c-2.16,-3.5 -5.84,-4.35 -6.88,-9.6l0,-0.01Z" style="fill:#ff8200;" class="rednsc" /><path d="M55.49,18.02c0.15,0.56 0.46,1.08 0.9,1.52c6.21,6.21 9.46,0.67 15.3,4.96l-4.55,-4.56c-3.976,-0.934 -7.162,1.036 -11.65,-1.92Z" style="fill:#ff8200;" class="rednsc" /><path d="M65.5,11.96c-0.07,0.58 0,1.18 0.24,1.75c3.37,8.12 8.5,4.24 12.25,10.44l-2.47,-5.96c-3.33,-2.4 -7.06,-1.78 -10.03,-6.23l0.01,0Z" style="fill:#ff8200;" class="rednsc" /><path id="greensc" class="greensc" d="M48.65,51.65c-1.26,5.35 1.41,9.65 -2.58,15.61c0.771,-0.22 1.473,-0.633 2.04,-1.2c8.33,-8.33 0.9,-12.7 6.65,-20.52l-6.11,6.1l0,0.01Z" style="fill:#89b860;"/><path id="greensc1" class="greensc" d="M55.11,61.13c0.89,5.43 5,8.37 3.6,15.41c0.628,-0.501 1.117,-1.156 1.42,-1.9c4.5,-10.87 -4.03,-12.06 -1.71,-21.49l-3.3,7.98l-0.01,0Z" style="fill:#89b860;"/><path id="greensc2" class="greensc" d="M64.71,67.42c2.9,4.68 7.83,5.82 9.22,12.86c0.38,-0.68 0.59,-1.46 0.59,-2.3c0,-11.77 -8.34,-9.6 -9.8,-19.2l0,8.64l-0.01,0Z" style="fill:#89b860;"/><path id="greensc3" class="greensc" d="M76,69.56c4.45,3.21 9.45,2.38 13.43,8.35c0.09,-0.799 -0.027,-1.609 -0.34,-2.35c-4.5,-10.87 -11.37,-5.68 -16.4,-13.98l3.3,7.98l0.01,0Z" style="fill:#89b860;"/><path id="greensc4" class="greensc" d="M87.23,67.22c5.35,1.26 9.65,-1.42 15.61,2.57c-0.222,-0.772 -0.639,-1.475 -1.21,-2.04c-8.32,-8.32 -12.68,-0.9 -20.51,-6.64l6.11,6.11Z" style="fill:#89b860;"/><path id="greensc5" class="greensc" d="M112.12,57.16c-0.5,-0.632 -1.155,-1.124 -1.9,-1.43c-10.87,-4.5 -12.06,4.03 -21.5,1.72l8,3.3c5.42,-0.88 8.36,-5 15.4,-3.6l0,0.01Z" style="fill:#89b860;"/><path id="greensc6" class="greensc" d="M103,51.15l-8.64,0c9.6,-1.47 7.43,-9.8 19.2,-9.8c0.84,0 1.62,0.2 2.3,0.58c-6.998,1.392 -8.166,6.272 -12.86,9.22Z" style="fill:#89b860;"/><path id="greensc7" class="greensc" d="M113.49,26.43c-0.799,-0.09 -1.609,0.027 -2.35,0.34c-10.87,4.5 -5.68,11.38 -13.99,16.4l7.99,-3.3c3.196,-4.44 2.387,-9.406 8.35,-13.44Z" style="fill:#89b860;"/><path id="greensc8" class="greensc" d="M105.37,13.02c-0.75,0.22 -1.45,0.62 -2.04,1.21c-8.32,8.33 -0.9,12.69 -6.64,20.52l6.1,-6.11c1.254,-5.336 -1.386,-9.612 2.58,-15.62Z" style="fill:#89b860;"/><path id="greensc9" class="greensc" d="M92.73,3.74c-0.628,0.501 -1.117,1.156 -1.42,1.9c-4.5,10.88 4.03,12.06 1.71,21.5l3.31,-7.99c-0.88,-5.43 -5,-8.37 -3.6,-15.4l0,-0.01Z" style="fill:#89b860;"/><path id="greensc10" class="greensc" d="M77.5,0c-0.386,0.705 -0.585,1.497 -0.58,2.3c0,11.77 8.34,9.6 9.8,19.2l0,-8.64c-2.87,-4.68 -7.82,-5.82 -9.2,-12.86l-0.02,0Z" style="fill:#89b860;"/><path id="greensc11" class="greensc" d="M62.01,2.37c-0.09,0.78 0.02,1.58 0.34,2.35c4.5,10.88 11.38,5.68 16.4,13.99l-3.3,-7.98c-4.45,-3.23 -9.45,-2.39 -13.44,-8.36Z" style="fill:#89b860;"/><path id="greensc12" class="greensc" d="M48.6,10.5c0.22,0.74 0.62,1.44 1.21,2.03c8.33,8.33 12.69,0.9 20.51,6.65l-6.1,-6.11c-5.36,-1.26 -9.65,1.41 -15.62,-2.58l0,0.01Z" style="fill:#89b860;"/><path id="greensc13" class="greensc" d="M54.73,19.53c-5.43,0.89 -8.37,5 -15.4,3.6c0.499,0.627 1.149,1.115 1.89,1.42c10.87,4.5 12.06,-4.03 21.5,-1.71l-7.99,-3.3l0,-0.01Z" style="fill:#89b860;"/><g id="rubik-bold" class="rubik bold"><path d="M0.61,45.6c-0.16,0.002 -0.315,-0.059 -0.43,-0.17c-0.121,-0.109 -0.187,-0.267 -0.18,-0.43l0,-15.27c0,-0.18 0.06,-0.32 0.18,-0.44c0.112,-0.116 0.268,-0.182 0.43,-0.18l2.66,0c0.4,0 0.68,0.18 0.85,0.52l4.05,7.25l4.07,-7.25c0.148,-0.332 0.487,-0.539 0.85,-0.52l2.66,0c0.162,0 0.317,0.065 0.43,0.18c0.118,0.116 0.183,0.275 0.18,0.44l0,15.27c0,0.18 -0.06,0.32 -0.18,0.43c-0.117,0.107 -0.271,0.165 -0.43,0.16l-3,0c-0.152,-0.003 -0.297,-0.068 -0.4,-0.18c-0.112,-0.103 -0.177,-0.248 -0.18,-0.4l0,-8.57l-2.54,4.66c-0.2,0.36 -0.48,0.54 -0.83,0.54l-1.27,0c-0.31,0 -0.59,-0.18 -0.82,-0.55l-2.52,-4.66l0,8.57c0,0.18 -0.06,0.32 -0.18,0.43c-0.117,0.107 -0.271,0.165 -0.43,0.16l-2.98,0l0.01,0.01Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M51.65,37.95c0.38,0.07 0.56,0.9 0.4,1.84c-0.16,0.96 -0.6,1.68 -0.98,1.61c-0.38,-0.06 -0.56,-0.89 -0.4,-1.84c0.16,-0.95 0.6,-1.67 0.98,-1.6l0,-0.01Z" style="fill:#fff;"/><path d="M20.38,45.6c-0.154,-0.006 -0.298,-0.074 -0.4,-0.19c-0.111,-0.104 -0.176,-0.248 -0.18,-0.4l0,-15.31c0,-0.18 0.06,-0.32 0.17,-0.43c0.109,-0.109 0.256,-0.17 0.41,-0.17l3.37,0c0.007,0 0.014,0 0.02,0c0.313,0 0.57,0.257 0.57,0.57c0,0.006 0,0.013 0,0.02l0,15.31c0,0.16 -0.06,0.3 -0.17,0.41c-0.107,0.118 -0.261,0.184 -0.42,0.18l-3.37,0l0,0.01Zm7.98,0c-0.154,-0.006 -0.298,-0.074 -0.4,-0.19c-0.112,-0.103 -0.177,-0.248 -0.18,-0.4l0,-15.29c0,-0.18 0.05,-0.32 0.16,-0.44c0.107,-0.118 0.261,-0.184 0.42,-0.18l6.48,0c2.07,0 3.69,0.48 4.86,1.42c1.179,0.97 1.829,2.445 1.75,3.97c0,1.1 -0.25,2.04 -0.76,2.8c-0.522,0.785 -1.253,1.408 -2.11,1.8l3.18,5.74c0.04,0.1 0.07,0.18 0.07,0.26c-0.002,0.127 -0.052,0.249 -0.14,0.34c-0.1,0.1 -0.22,0.15 -0.36,0.15l-3.32,0c-0.424,0.018 -0.813,-0.242 -0.96,-0.64l-2.59,-5.1l-2.26,0l0,5.16c0,0.18 -0.06,0.32 -0.18,0.43c-0.117,0.107 -0.271,0.165 -0.43,0.16l-3.23,0l0,0.01Zm6.45,-9.21c0.68,0 1.2,-0.17 1.55,-0.5c0.35,-0.35 0.53,-0.81 0.53,-1.4c0,-0.6 -0.18,-1.08 -0.53,-1.45c-0.36,-0.36 -0.87,-0.54 -1.55,-0.54l-2.6,0l0,3.89l2.6,0Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M53.79,39.26l-2.1,-6l-2.1,6l-1.83,5.81c-0.14,0.32 -0.38,0.5 -0.8,0.52l-3.06,0c-0.129,-0.001 -0.252,-0.055 -0.34,-0.15c-0.098,-0.086 -0.156,-0.209 -0.16,-0.34c0,-0.1 0.01,-0.17 0.03,-0.22l5.47,-15.08c0.16,-0.46 0.47,-0.69 0.95,-0.69l3.67,0c0.47,0 0.78,0.23 0.94,0.69l5.48,15.08c0.02,0.05 0.03,0.12 0.03,0.22c0,0.12 -0.05,0.24 -0.16,0.34l-0.34,0.15l-3.06,0c-0.35,0.016 -0.672,-0.194 -0.8,-0.52l-1.83,-5.81l0.01,0Z" style="fill:#ff8200;" class="dragonhead"/><path d="M62.59,45.6c-0.157,-0.003 -0.306,-0.072 -0.41,-0.19c-0.112,-0.103 -0.177,-0.248 -0.18,-0.4l0,-15.29c0,-0.18 0.06,-0.32 0.17,-0.44c0.107,-0.118 0.261,-0.184 0.42,-0.18l6.47,0c2.07,0 3.7,0.48 4.86,1.42c1.182,0.968 1.836,2.444 1.76,3.97c0,1.1 -0.26,2.04 -0.77,2.8c-0.519,0.783 -1.246,1.407 -2.1,1.8l3.17,5.74c0.113,0.193 0.085,0.439 -0.07,0.6c-0.1,0.1 -0.21,0.15 -0.35,0.15l-3.32,0c-0.424,0.018 -0.813,-0.242 -0.96,-0.64l-2.6,-5.1l-2.25,0l0,5.16c0,0.18 -0.06,0.32 -0.18,0.43c-0.119,0.11 -0.278,0.167 -0.44,0.16l-3.21,0l-0.01,0.01Zm6.45,-9.21c0.67,0 1.19,-0.17 1.54,-0.5c0.35,-0.35 0.53,-0.81 0.53,-1.4c0,-0.6 -0.18,-1.08 -0.53,-1.45c-0.35,-0.36 -0.87,-0.54 -1.54,-0.54l-2.61,0l0,3.89l2.61,0Zm10.14,9.21c-0.154,-0.006 -0.298,-0.074 -0.4,-0.19c-0.116,-0.102 -0.184,-0.246 -0.19,-0.4l0,-15.31c0,-0.18 0.06,-0.32 0.18,-0.43c0.109,-0.109 0.256,-0.17 0.41,-0.17l3.37,0c0.007,0 0.014,0 0.02,0c0.313,0 0.57,0.257 0.57,0.57c0,0.006 0,0.013 0,0.02l0,15.31c0,0.16 -0.06,0.3 -0.17,0.41c-0.107,0.118 -0.261,0.184 -0.42,0.18l-3.37,0l0,0.01Z" style="fill:#fff;fill-rule:nonzero;"/></g></svg>
      </div>
      </nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/" exact>Home</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/posts">Posts</nuxt-link></li>
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
import TheSideNavToggle from "@/components/navigation/TheSideNavToggle";
// import {TweenMax} from "@/static/js/TweenMax.min.js"

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  },
  data(){
    return {
      scrolled:false,
    }},
    
 
 methods: {
  handleScroll () {
    this.scrolled = window.scrollY > 0;
  },
},
beforeMount () {
  window.addEventListener('scroll', this.handleScroll);

},
mounted(){

gsap.to('.greensc',{duration:1,opacity:1,ease:Power2.easeOut,stagger:0.04});
gsap.from('.greensc',{duration:1,rotation:55,ease:Power2.easeOut,transformOrigin:"30% 100%",stagger:0.04});
gsap.to('.logo',{duration:0.5,opacity:1});
gsap.to('.rednsc', {duration:1,opacity:1 ,ease:Power2.easeOut,stagger:0.1});
gsap.from('.rednsc',{duration:1,rotation:-85,ease:Power3.easeOut,transformOrigin:"70% 0%",stagger:0.07});

},
beforeDestroy () {
  window.removeEventListener('scroll', this.handleScroll);
}
}
</script>


<style scoped>
.rednsc{
  opacity : 0;
  }

.logo{
  padding: 4px 0px ;
  height: 100px;
  transition: all 0.3s ease-in-out;
  opacity: 0;
}
.greensc{opacity : 0;}


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
  transition: all 0.3s ease-in-out;
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
  margin: 0 20px;
  position: relative;
  font-size:18px;
  /* opacity:0; */
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
  padding: 15px 0;
 
}
 .scrolled{
   height: 80px;
   transition: all 0.3s ease-in-out;
 }
</style>
