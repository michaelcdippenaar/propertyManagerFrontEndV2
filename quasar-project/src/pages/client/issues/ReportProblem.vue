<template>
  <q-layout fullscreen view="hHh LpR fFf" style="font-size: 16px" class="">
    <q-page-container class="relative-position">
      <q-page class="q-px-md text-body2">
        <div class="row" style="">
          <q-btn @click="backToIssues" size="25px" padding="sm" unelevated round icon="close"/>
          <h6>Report A Problem</h6>
        </div>
        <div class="row rowc__what flex-center cus_row" style="">
          <div class="column" style="width: 100vw">
            <div class="col">
              <!--            <q-input outlined class="width" v-model="brokenItem"-->
              <!--                     label="Faulty Item e.g Gate Motor, Swimming Pump etc."/>-->

<!--              <q-select outlined v-model="category" :options="categoryOptions" label="Category"/>-->
<!--              <q-btn style="border: grey 1px solid; width: 100%; height: 60px" outline flat color="green" icon-right="mail"/>-->
              <div @click="bottomMenu(categoryOptions, 'reportIssue/categoryOptionMutation')" style="width: 100%; height: 60px;" class="flex justify-between content-center border-radius-inherit border">
                <div style="margin-left: 4%" class="text-black">{{categoryNameSelected}}</div>
                <q-icon color="grey-7" name="arrow_drop_down" size="sm" style="margin-right: 4%"/>
              </div>

            </div>
          </div>
        </div>
        <div class="row rowc__description cus_row">
          <div class="col flex">
            <q-input outlined v-model="description" label="Describe Problem" type="textarea"
                     style="height: 100%; width: 100%;" class="input_description"/>
          </div>
        </div>
        <div class="relative-position row rowc__image">

          <q-btn class="image__more absolute-top-right" size="large" style="z-index: 105"
                 flat round color="black"
                 icon="more_horiz" @click="bottomMenu(imageMenuList, 'reportIssue/imageOptionMutation')"/>

          <div class="col justify-center items-center " style="margin-top: 10px">
            <div class="relative-position">
              <q-btn v-if="!noOfImg" class="btn-fixed-width absolute-center " align="left" style="z-index: 100"
                     @click="takePicture" label="Add Photo" color="grey" icon="camera"/>
              <q-btn v-if="noOfImg" class="absolute-bottom-right glossy" style="z-index: 100" @click="takePicture" round
                     color="grey" icon="camera"/>
              <image-carousel2 ref="carousal" style="height: 40vh" :images="images" :slide="slide"/>
            </div>
          </div>
        </div>
        <q-page-sticky position="bottom-right" style="z-index: 200" :offset="[15, 30]">
          <q-btn @click="postIssue" class="full-width" style="font-size: 16px" color="primary" label="Submit"
                 :loading="submitState"/>
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
  <bottom-menu @close="closeBottomMenu" :mutation="mutation" @value="getCategory" :menuList="category" :showBottomMenu="ShowBottomMenu"/>
</template>

<script>
import apiIssue from 'src/api/modules/client/api.client.js'
import scaleImage from "src/helpers/scaleImage";
import ImageCarousel2 from "components/imageCarousel2";
import {Camera, CameraResultType} from '@capacitor/camera';
import BottomMenu from "components/BottomMenu";

export default {
  name: "ReportProblem",
  components: {BottomMenu, ImageCarousel2},
  data: function () {
    return {
      mutation: '',
      images: [],
      imageUrl: null,
      brokenItem: '',
      submittedBefore: false,
      description: '',
      imagePackage: [],
      submitState: false,
      url: 'https://placeimg.com/500/300/nature',
      slide: 1,
      cookies: null,
      hasCookies: true,
      category: '',
      categoryOptions: [
        {name:'Plumbing'},
        {name:'Pool'},
        {name:'Electrical'},
        {name:'General Maintenance'},
        {name:'Internet'},
        {name:'Appliances'},
        {name:'Alarm'},
        {name:'Security'},
        {name:'Gate'},
        {name:'Other'}
      ],
      categorySelected: null,
      ShowBottomMenu: false,
      maximizedToggle: true,
      imageMenuList: [
        {name: 'Delete', icon: 'delete'},
        {name: 'Add Comment', icon: 'comment'},
        {name: 'Add Photo', icon: 'photo'}
      ]
    }
  },
  computed: {
    noOfImg: function () {
      if (this.images.length) {
        return true
      }
      {
        return false
      }
    },
    imageOption: function () {
      return this.$store.state.reportIssue.imageOption
    },
    categoryOption: function () {
      return this.$store.state.reportIssue.categoryOption
    },
    categoryNameSelected: function () {
      if (this.categoryOption) {
        return this.categoryOptions[this.categoryOption].name
      }
      return ''
    }
  },
  methods: {
    bottomMenu(list, mutation){
      this.category = list
      this.mutation = mutation
      this.ShowBottomMenu=true
    },
    closeBottomMenu(e){
      this.ShowBottomMenu=false
    },
    getCategory(e){
      console.log(e)
      this.categorySelected=e
    },
    async takePicture() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      var imageUrl = image.webPath;

      scaleImage(imageUrl, 750).then(
        e => {
          vue.imagePackage.push(e)
        }
      )
      vue.images.push(img)
      vue.$refs.carousal.increasePage()

    },
    onFileSelected(e) {
      let files = e.target.files || e.dataTransfer.files
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = (e) => {
        scaleImage(e.target.result, 750).then(
          e => {
            this.imagePackage.push(e)
          }
        )
        this.images.push(reader.result)
        this.slide = this.images.length || 1;
      }
    },
    postIssue() {
      this.submitState = true
      const c = {
        data: {
          item: this.brokenItem,
          description: this.description,
          property: 1,
          status: 1,
          pictures: this.imagePackage
        }
      }
      apiIssue.postIssue(c).then(
        e => {
          console.log(e)
          this.submitState = false
          this.backToIssues()
        }
      )
    },
    getDescription() {
      this.description = this.$refs.description.value
    },
    backToIssues() {
      this.$router.push({path: '/client/issues/'})
    }
  }
}
</script>

<style scoped lang="scss">
.border {
    border: $grey-5 solid 1px;
    border-radius: 5px;
  }

.rowc {
  &__what {

  }

  &__before {
    height: 10vh;
  }

  &__description {

  }

  &__image {
    border: 1px solid rgba($grey-5, 1);
    border-radius: 4px;
  }
}

.image {
  &__more {
    transform: translate(0, -20%);
  }
}

.my-custom-toggle {
  border: 1px solid #027be3
}

.custom-file-input {
  width: 120px;
  color: transparent;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-file-input::before {
  width: 130px;
  content: 'Select Images';
  color: white;
  display: inline-block;
  background: $primary;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
}

.custom-file-input:hover::before {
  //border-color: black;
}

.custom-file-input:active {
  outline: 0;
}

.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}

.loc_img {
  height: auto;
  max-width: 100%;
  width: 100%;
}

body {
  padding: 20px;
  background: gray;
}

.cus_row {
  margin-bottom: 20px;
}
</style>
