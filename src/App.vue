<template>
  <div>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
import isMobile from 'ismobilejs';

export default {
  name: 'LayoutDefault',

  components: {
    navigation,
  },

  beforeMount(){
    // Exception for users with old laptops with 1280 x 720 screen size
    // While it is NOT a phone or a tablet, it should be treated as one
    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    if (width == 1280 && height == 720){
      this.$store.commit('setIsMobile', true)
    }

    if (isMobile().phone == true || isMobile().tablet == true){
      this.$store.commit('setIsMobile', true)
    }

    if (this.$store.getters.isMobile == true){
      document.body.style.overflow = 'unset'
    }
  }
}
</script>

<style>
h1, h2, h3, h4, p{
  font-family: Triomphe;
  font-size: 20px;
  color: rgb(96, 99, 105);
}

hr{
  border-top: 2px solid rgb(49,53,58);
  max-height: 2px;
  margin-left: 50px;
  margin-right: 0px;
  margin-bottom: 15px;
  margin-top: 15px;
}

@font-face {
  font-family: 'Triomphe';
  src: url(assets/triomphe-regular-autoinstr.ttf);
}

.story-text{
  font-size: 20px;
  line-height: 120%;
  margin: 20px;
}

.header-text{
  color: rgb(49,53,58);
  font-size: 25px;
  font-weight: 600;
  margin: 20px;
}
</style>
