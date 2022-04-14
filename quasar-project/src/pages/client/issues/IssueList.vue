<template>
  <q-pull-to-refresh @refresh="refresh">
    <q-page class="text-body2">
      <div class="row flex flex-center q-mt-lg" v-if="token" v-bind:placeholder=getIssueList()>
        <q-card class="my-card full-width q-mb-md" style="max-width: 90%" v-for="(i, index) in issues" :key="index">
          <q-card-section>
            <div class="flex justify-between flex-center">
              <div class="text-h6">{{ i.item }}</div>
              {{ i.date.substring(0, 10) }}
            </div>
            <div class="text-subtitle2">{{ i.submitted_by.name }} {{ i.submitted_by.surname }}</div>
          </q-card-section>
          <q-separator class="q-mb-md"/>
          <q-card-section class="q-pt-none" style="max-width: 70%">
            {{ i.description }}
          </q-card-section>
        </q-card>
      </div>
      <q-page-sticky position="bottom-right" :offset="[30, 60]">
        <q-btn @click="reportIssue" icon="error" rounded color="red" label="Report Issue"/>
      </q-page-sticky>
    </q-page>
  </q-pull-to-refresh>
</template>

<script>
import clientApi from "src/api/modules/client/api.client";
import readFile from "src/storage/readFile.js";
import deleteFile from "src/storage/deleteFile";
import fileExist from "src/storage/fileExist";

export default {
  name: "IssueList",
  data: () => {
    return {
      issuesLoaded: false
    }
  },
  computed: {
    issues: function () {
      return this.$store.getters['issues/issueGetter']
    },
    token: function () {
      return this.$store.getters['auth/authGetter']
    }
  },

  methods: {
    reportIssue() {
      console.log('/report-problem/')
      this.$router.push({path: '/report-problem/'})
    },
    refresh(done) {
      const c = null
      clientApi.getIssues(c).then(
        e => {
          this.$store.commit('issues/issueMutation', e.data.children)
          done()
          this.issuesLoaded = true
        })
    }
    ,
    getIssueList() {
      const c = null
      clientApi.getIssues(c).then(
        e => {
          this.$store.commit('issues/issueMutation', e.data.children)
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
