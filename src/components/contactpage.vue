<template>
  <div class='main-contact-text row col-lg-12 col-xs-12 justify-center'>
    <div class='contact-text row col-lg-12 col-xs-12 justify-center'>
      <p> Contact {{this.$store.getters.getSitename}} at one of the following social media outlets! </p>
    </div>
    <div class="row col-lg-2 col-xs-4">
      <hr class='divider'>
    </div>
    <div class="row col-lg-1 col-sm-2 col-xs-4">
      <div class='row col-lg-6 col-xs-6'>
        <a target="_blank" rel="noopener noreferrer" v-bind:href="facebookUrl">
          <font-awesome-icon class='social-media-icons facebook' :icon="['fab', 'facebook-square']" />
        </a>
      </div>
      <div class='row col-lg-6 col-xs-6'>
        <a target="_blank" rel="noopener noreferrer" v-bind:href="instagramUrl">
          <font-awesome-icon class='social-media-icons instagram' :icon="['fab', 'instagram']" />
        </a>
      </div>
    </div>
    <div class="row col-lg-2 col-xs-4">
      <hr class='divider'>
    </div>
    <div class='email-text row col-lg-12 col-xs-10 justify-center'>
      <!-- Change your email here -->
      <p> or e-mail {{this.$store.getters.getSitename}} at carzoku@gmail.com </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactPage',

  data(){
    return {
      // Change the url to your Facebook and Instagram page
      facebookUrl: 'https://www.facebook.com/carzoku',
      instagramUrl: 'https://www.instagram.com/carzoku'
    }
  },
}
</script>

<style>
template {
 overflow: 'hidden'
}

.main-contact-text{
  margin-top: 15%;
}

.contact-text{
  text-align: center;
  margin-bottom: 50px;
}

.divider{
  width: 350px;
  margin: 25px;
}

.social-media-icons{
  font-size: 50px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.facebook{
  color: rgb(59,89,152);
}

.facebook:hover{
  color: rgb(14, 31, 86);
}

.instagram{
  color: rgb(49,53,58);
}

.instagram:hover{
  color: black;
}

.email-text{
  margin-top: 50px;
  text-align: center;
}
</style>

