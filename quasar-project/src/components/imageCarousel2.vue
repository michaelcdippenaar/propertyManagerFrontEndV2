<template>
  <div class="q-pa-md" v-on:reportNextSlide="increasePage">
    <q-carousel
      animated
      v-model="indexDum"
      navigation
      infinite
      :autoplay="autoplay"
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="100%"
    >
      <q-carousel-slide v-for="(image, index) in images" :key='index' :name="index +1" :img-src="image"/>
    </q-carousel>
  </div>
</template>


<script>
export default {
  name: "imageCarousel2",
  data:
    () => {
      return {
        autoplay: false,
        indexDum:0
      }
    },
  props: ['images', 'slide'],
  methods: {
    increasePage(){
      this.indexDum = this.indexDum + 1
    }
  },
  created() {

  }

}
</script>

<style scoped>

</style>
