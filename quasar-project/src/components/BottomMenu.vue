<template>
  <div>
  <div @click="$emit('close',true); " v-if="showBottomMenu" style="position:absolute; bottom: 0;
      z-index: 499; width:100%; height:100vh"
       class="overlay"/>
  <TransitionGroup name="list">
    <div v-if="showBottomMenu"
         style="position:absolute; bottom: 0; width: 100%;
                         background-color: white; z-index: 500"
         class="showBottom"
    >
      <q-card style="width:100%; height:100%;
          background-color: white; margin-bottom: 5%" class="no-shadow">
        <div v-for="(list, index) in menuList" :key=index >
          <q-card-section @click="clickCardSection(index)" v-ripple class="row items-center no-wrap">
            <q-icon style="margin-right: 5px" size="sm" v-if="list.icon" :name="list.icon"/>
            <div>{{ list.name }}</div>
          </q-card-section>
          <q-separator/>
        </div>
        <q-card-section class="row items-center no-wrap">
          <div></div>
        </q-card-section>
      </q-card>
    </div>
  </TransitionGroup>
    </div>
</template>

<script>
export default {
  name: "bottomMenu",
  props:
    ['showBottomMenu', 'menuList', 'mutation']
  ,
  data: function () {
    return {
      dataShowBottomMenu: false
    }
  },
  methods: {
    BottomMenuToggle(list) {
      this.dataShowBottomMenu = true
    },

    clickCardSection(e) {
      console.log('card', e)
      this.$store.commit(this.mutation, e)
      this.$emit('value',e);
      this.$emit('close',true)
      // this.BottomMenuToggle()
    }
  }
}
</script>

<style scoped lang="scss">
//.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-out;
}

.list-enter-from,
.list-leave-to {
  //opacity: 0.7;
  transform: translateY(100%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

//.input_description {
//  font-size: 14px;
//  color: blue;
//}

.overlay {
  background-color: rgba(grey, 0.5);
}

</style>
