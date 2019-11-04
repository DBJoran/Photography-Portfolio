<template>
  <div class='main-text-about row col-lg-8 col-xs-8 justify-center'>
    <div class='row col-lg-12 col-xs-12 justify-center'>
      <p class='header-text'>{{this.$store.getters.getSitename}}</p>
    </div>
    <div class='story-text-about row col-lg-6 col-xs-10 justify-center'>
      <p> It all really started in 2016, when one of my friends got a Nissan Silvia. He invited me to several events, which got me really hooked on car events.
        <br>
        <br>
        I started visiting car related events more often, private meets, JapFest, Historic Grand Prix, Blancpain, Nürburgring, Spa Francorchamps and many more, 
        not just only events related to Japanese cars. However CARZOKU only really focusses on the Japanese cars.

        <br>
        <br>
        Don't feel afraid to contact me if you would like some photo's taken of your car.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutPage',

  methods: {
  }

}
</script>

<style>
template {
 overflow: 'hidden'
}

.main-text-about{
  margin-top: 5%;
}

.story-text-about{
  text-align: center;
}
</style>
