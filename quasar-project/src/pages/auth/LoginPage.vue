<template>
  <!--  <div>-->
  <!--    TEST-->
  <!--  </div>-->
  <q-layout view="lHh Lpr lFf">
    <q-page class="page window-height window-width row justify-center items-center">
      <div class="column">
        <div class="row flex flex-center">
          <h5 class="text-h5 text-white q-my-md">Property Manager</h5>
        </div>
        <div class="row">
          <q-card square bordered class="q-pa-lg shadow-1">
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input square filled clearable v-model="email" type="email" label="email"/>
                <q-input square filled clearable v-model="password" type="password" label="password"/>
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn :loading="loading" @click="loginUser" unelevated color="primary" size="lg" class="full-width"
                     label="Login"/>
            </q-card-actions>
            <q-card-section class="text-center q-pa-none">
              <p class="text-grey-6">TEST Not registered? Created an Account</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script>

import apiLoginUser from 'src/api/modules/auth/api.LoginUser.js';
import {useQuasar} from "quasar";
import writeJson from 'src/storage/capacitor/writeJson'
import readFile from "src/storage/capacitor/readFile";

export default {
  name: "LoginPage",
  computed: {},
  data: function () {
    return {
      email: '',
      password: '',
      loading: false,
    }
  },
  methods: {
    getAuthFromFile () {
      const exist = readFile('token.json')
      exist.then(
        e => {
          const jwtTest = this.$store.dispatch('auth/jwtFromCache')
          jwtTest.then(
            ()=>{
              this.$router.push({path: '/client/issues/'})
            }
          )
        }
      )
    },
    loginUser: async function () {
      const c = {data: {email: this.email, password: this.password}}
      this.loading = true
      apiLoginUser.postDetail(c).then(
        e => {
          this.$store.commit('auth/jwtMutation', e.data.token.token)
          const obj = {token: e.data.token.token}
          writeJson(obj, 'token.json')
          this.$router.push({path: '/client/issues/'})
          this.loading = false
        }
      )
    }
  },
  // mounted() {
  //   this.$q.platform.is.mobile ? this.getAuthFromFile() : null
  // }
}
</script>

<style scoped lang="scss">
.page {
  background: $primary;
}
</style>
