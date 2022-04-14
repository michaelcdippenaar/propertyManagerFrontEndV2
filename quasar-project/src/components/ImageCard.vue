<template>
  <div class="q-gutter-md row items-start">
    <div class="row flex content-start" style="width: 90vw">
      <div class="col col-6">
        <q-img
          v-if="images[0]"
          :src="images[0].result"
          style="max-width: 300px; height: 160px; border-right: 10px solid white"
          :fit="fitModes[0]"
          class="image__big"
        />
      </div>
      <div class="col flex q-gutter-sm">
        <q-img
          v-if="images[1]"
          :src="images[1].result"
          style="max-width: 150px; height: 75px;"
          :fit="fitModes[0]"
          class="image__small"
        />
        <q-img
          v-if="images[2]"
          :src="images[2].result"
          style="max-width: 150px; height: 75px;"
          :fit="fitModes[0]"
          class="image__small"
        />
      </div>
    </div>
  </div>
  <!--     [ 'cover', 'fill', 'contain', 'none', 'scale-down' ]-->
</template>

<script>
export default {
  name: "ImageCard",
  data: function () {
    return {
      fitModes: ['cover']
    }
  },
  props: ['images']
}
</script>

<style scoped>
.image__big {

}

.image__small {
}
</style>
