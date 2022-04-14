<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4" style="width: 600px">
          To-Do-List
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row justify-center">
          <div class="col-12">
          <q-input v-model="todoTask" label="Standard">
            <template v-slot:after>
              <q-btn round dense flat icon="send" />
            </template>
          </q-input>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row justify-center" v-for="(item, index) in todoList" :key="index">
          <div class="col-8 q-py-md">
            {{item.value}}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      todoList: [
        {value:"Create an App"},
        {value:"Build an App"}
      ]
    }
  }
})
</script>
