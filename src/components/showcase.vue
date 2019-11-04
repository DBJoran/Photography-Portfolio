<template>
  <div class='row col-lg-12 col-xs-12 justify-center'>
    <div class='row col-lg-12 col-xs-12 justify-center'>
      <p class='showcase-car-name'> {{this.carName}} </p>
    </div>

    <div class='row col-lg-12 col-xs-12 justify-center'>
      <a target="_blank" rel="noopener noreferrer" v-bind:href="'https://www.instagram.com/' + this.instagramName">
        <font-awesome-icon class='social-media-icons-small instagram' :icon="['fab', 'instagram']"/>
      </a>
      <a style='text-decoration: none' target="_blank" rel="noopener noreferrer" v-bind:href="'https://www.instagram.com/' + this.instagramName">
        <p class='instagram-name'> {{'@' + this.instagramName}} </p>
      </a>
    </div>

    <div class='row col-lg-12 col-xs-12 justify-center'>
      <hr class='showcase-divider'>
    </div>

    <div class='row col-lg-12 col-xs-12 justify-center' v-for="photos in showcasePhotos" :key="photos.id" >
      <div class='row col-lg-12 col-xs-10 justify-center'>
        <q-img v-if="photos.orientation == 'L'" class='col-lg-6 showcase-car-image justify-center'
          :src="require('../assets/pictures/' + photos.photo)"
          spinner-color="black"
        />
      </div>

      <div class='row col-lg-4 col-xs-10 justify-center'>
        <q-img v-if="photos.orientation == 'P'" class='col-lg-10 showcase-car-image'
          :src="require('../assets/pictures/' + photos.photo)"
          spinner-color="black"
        />
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'showcase',

  data () {
    return {
      carName: '',
      instagramName: '',
      showcasePhotos: [],
    }
  },

  methods: {
    getShowcaseInformation(){
      var info = this.$store.getters.getShowcase
      this.carName = info.carName;
      this.instagramName = info.instagramName;
      this.showcasePhotos = info.photos;
    }
  },

  beforeMount(){
    document.body.style.overflow = 'unset'
    this.getShowcaseInformation()
  }
}
</script>

<style>
.social-media-icons-small{
  font-size: 22px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
}

.instagram-name{
  font-size: 15px;
  color: rgb(49,53,58);
}

.instagram-name:hover{
  color: black;
}

.showcase-car-name{
  font-size: 25px;
  max-height: 30px;
  color: rgb(49,53,58);
  margin-bottom: 10px;
}

.showcase-car-image{
  margin-top: 20px;
  margin-bottom: 20px;
}

.showcase-divider{
  width: 50%;
  text-align: center;
  margin-left: 0px;
  margin-right: 0px;
}
</style>

