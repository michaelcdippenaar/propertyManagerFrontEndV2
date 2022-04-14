<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      navigation
      padding
      arrows
      control-color="secondary"
      height="200px"
      class="bg-grey-1"
    >
      <q-carousel-slide :name="index + 1" class="column no-wrap" v-for="(i, index) in images" :key="index">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img fit="cover" class="rounded-borders full-height" :src="i.result"/>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: "ImageCarousel",
  data: function () {
    return {
      slide: 1
    }
  },
  props:['images', 'slideShift']
}
</script>

<style scoped>

</style>
