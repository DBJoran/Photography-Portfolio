<template>
  <div class='row col-xl-12 col-lg-12 col-xs-12'>
    <div class='row col-lg-6 col-xs-12'>
      <div class='row col-lg-12 col-xs-12'>    
        <hr class='car-name-divider'>
      </div>
      <div class='row'>
        <p class='car-name'> Nissan S13 </p>
      </div>
      <div v-on:click="showCase('s13s13whiteboi')" class='row col-lg-12 col-xs-12 justify-end'>
        <i class="arrow material-icons md-48">trending_flat</i>          
      </div> 
      <q-img class='car-image'
        :src="require('../assets/pictures/s13s13whiteboi1.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-6 col-xs-12'>
      <div class='row col-lg-12 col-xs-12'>    
        <hr class='car-name-divider'>
      </div>
      <div class='row'>
        <p class='car-name'> Toyota AE86 Levin </p>
      </div>
      <div v-on:click="showCase('ae86fuego_hachiroku')" class='row col-lg-12 col-xs-12 justify-end'>
        <i class="arrow material-icons md-48">trending_flat</i>          
      </div> 
      <q-img class='car-image'
        :src="require('../assets/pictures/ae86fuego_hachiroku1.jpg')"
        spinner-color="black"
      />
    </div>
  </div>
</template>

<script>
import router from '../router.js'

export default {
  name: 'contentWindow',

  methods: {
    showCase(showcaseName){
      // Enable scrolling for mobile users
      if (this.$store.getters.isMobile == true){
        document.body.style.overflow = 'unset'
      } else {
        document.body.style.overflow = 'hidden'
      }

      router.push('/showcase')

      this.$store.commit('setCurrentShowcaseName', showcaseName)
    }
  }

}
</script>

<style>
.car-name-divider{
  width: 50px;
  max-width: 50px;
  border-top: 2px solid rgb(49,53,58);
  max-height: 2px;
  margin-left: 50px;
  margin-right: 0px;
  margin-bottom: 15px;
  margin-top: 15px;
}

.car-name{
  max-height: 30px;
  padding-left: 50px;
  color: rgb(49,53,58);
  margin-bottom: 10px;
}

.car-image{
  max-height: 470px;
  z-index: -10;
}

.material-icons.md-48 {
  font-size: 48px;
  color: white;
  position: absolute;
  cursor: pointer;
  text-shadow: 0 0 10px black,0px -2px 1px rgba(0, 0, 0, 0.01);
}

.arrow{
  margin-right: 15px;
}
</style>
