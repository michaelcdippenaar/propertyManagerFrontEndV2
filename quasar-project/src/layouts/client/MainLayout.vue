<template>
  <q-layout view="hHh lpr fff">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="q-pl-lg text-h6">Issues</div>
        </q-toolbar-title>
        <q-btn-dropdown icon="folder" unelevated class="dropdown-button" label="13 Irene...">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Videos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Articles</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>

    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import clientApi from 'src/api/modules/client/api.client.js'

export default {
  name: "MainLayout",
  computed: {

  }
}
</script>

<style scoped lang="scss">
.dropdown-button {
  background-color: rgba(blue, 0);
}
</style>
