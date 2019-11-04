<template>
  <div class='row col-lg-12 col-xs-12 justify-center'>
    <div class='row col-lg-6 col-xs-6 justify-center'>
      <q-img class='car-image'
        :src="require('../assets/pictures/s13s13whiteboi1.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-6 col-xs-6 justify-center'>
      <q-img class='car-image'
        :src="require('../assets/pictures/ae86fuego_hachiroku1.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-12 col-xs-12 justify-center'>
      <q-img class='car-image'
        :src="require('../assets/pictures/pfnsx.jpg')"
        spinner-color="black"
      />
    </div>

    <div class='row col-lg-4 col-xs-6 justify-center'>
      <q-img class='car-image'
        :src="require('../assets/pictures/pfae86.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-4 col-xs-6 justify-center'>
      <q-img class='car-image'
        :src="require('../assets/pictures/pfr32.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-4 col-xs-12 justify-center'>
      <q-img class='car-image'
        :src="require('../assets/pictures/pfs14.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-2 col-xs-3 justify-center'>
      <q-img class='car-image'
        :src="require('../assets/pictures/pfrwb.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-8 col-xs-6 justify-center'>
      <q-img class='car-image'
        :src="require('../assets/pictures/pf240sx.jpg')"
        spinner-color="black"
      />
    </div>
    <div class='row col-lg-2 col-xs-3 justify-center'>
      <q-img class='car-image'
        :src="require('../assets/pictures/pfevo.jpg')"
        spinner-color="black"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolio',

  beforeMount(){
    document.body.style.overflow = 'unset'
  }
}
</script>

