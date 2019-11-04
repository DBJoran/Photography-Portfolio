<template>
  <div class='navigation-bar row col-xl-12 col-lg-12 col-xs-12'>
    <div class='row col-xl-1 col-lg-2 col-sm-12 col-xs-12 justify-center'>
      <p class='navigation-item text' v-on:click="navigate('')">{{this.$store.getters.getSitename}}</p>
    </div>

    <div class='row col-xl-8 col-lg-7 col-sm-4 col-xs-12'>
    </div>

    <div v-if="isMobile == true" class='row col-xs-12 justify-center'>
      <hr class='menu-divider'>
    </div>

    <div class='row col-xl-1 col-lg-1 col-sm-12 col-xs-12 justify-center'>
      <p class='navigation-item text' v-on:click="navigate('portfolio')">Portfolio</p>
    </div>
    <div class='row col-xl-1 col-lg-1 col-sm-12 col-xs-12 justify-center'>
      <p class='navigation-item text' v-on:click="navigate('about')">About</p>
    </div>
    <div class='row col-xl-1 col-lg-1 col-sm-12 col-xs-12 justify-center'>
      <p class='navigation-item text' v-on:click="navigate('contact')">Contact</p>
    </div>
  </div>
</template>

<script>
import router from '../router.js'

export default {
  name: 'navigation',

  methods: {
    navigate(component){
      router.push({ path: '/' + component })
    },
  },

  computed: {
    isMobile: function() {
      return this.$store.getters.isMobile;
    }
  }
}
</script>

<style>
.navigation-bar{
  margin: 20px;
  margin-bottom: 50px;
}

.navigation-item{
  font-size: 20px !important;
  font-weight: 400;
  cursor: pointer;
  margin: 0px;
}

.navigation-item:hover{
  color: rgb(49,53,58);
}

.menu-divider{
  width: 200px;
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;
}
</style>
