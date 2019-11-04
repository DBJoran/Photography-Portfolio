<template>
  <div class='row full-width'>
    <div class='main-content row col-lg-12'>
      <div v-if='isMobile != true' class='main-content-left row col-xl-5 col-lg-5 col-xs-12 justify-center'>
        <h1 class='main-content-left-text'> AUTOMOTIVE <br> PHOTOGRAPHY </h1>
      </div>
      <div class='row col-xl-7 col-lg-7'>
        <div class='row col-lg-12'>
          <h1 class='header-text'> {{this.$store.getters.getSitename}} </h1>
        </div>
        <div class='row col-lg-8'>
          <h1 class='story-text'>
            A combination of the English word 'car' and the romaji for 家族 (family).
            Carzoku is all about Japanese cars and culture, old school or new school.
            <br>
            <br>
            I will try to capture as much content by myself as I can.
          </h1>
        </div>
      </div>
    </div>
    <contentWindow></contentWindow>
  </div>
</template>

<script>
import contentWindow from './contentwindow.vue'

export default {
  name: 'frontPage',

  components: {
    contentWindow
  },

  computed: {
    isMobile: function() {
      return this.$store.getters.isMobile;
    }
  },

  beforeMount(){
    // Scrolling is disabled for the frontpage, only enable scrolling for mobile users
    if (this.$store.getters.isMobile == true){
      document.body.style.overflow = 'unset'
    } else {
      document.body.style.overflow = 'hidden'
    }
  },
}
</script>

<style>
.main-content{
  margin-bottom: 100px;
}

.main-content-left-text{
  color: rgb(49,53,58);
  font-size: 50px;
  font-weight: 600;
  line-height: 100%;
  padding-top: 20px;
}

.header-text{
  color: rgb(49,53,58);
  font-size: 25px;
  font-weight: 600;
  text-align: left;
  margin: 20px;
  height: 30px;
}
</style>

