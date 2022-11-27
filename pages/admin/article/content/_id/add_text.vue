<template lang="">
  <div>
    <div class="content_area">
      <div style="display: flex; justify-content: space-between">
        <div><h2> Article Text </h2></div>
        <div>
            <nuxt-link class="btn btn-primary" :to="`/admin/article/${contentID}/add_content`">  Add Content </nuxt-link>
        </div>
      </div>
      <hr/>
       <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <div class="">
              <form @submit.prevent="formSubmit">
                  <div class="form-group">
                    <label for="content"> Text Content  </label>
                    <editor
                        api-key="73t8fjsg0wa37r22h1gnoznhivgiwf2sxzvt50fu3jdigjo0"
                        :init="{
                            height: 500,
                            menubar: false,
                            plugins: [
                              'advlist autolink lists link image charmap print preview anchor',
                              'searchreplace visualblocks code fullscreen',
                              'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                              'undo redo | formatselect | bold italic backcolor | \
                              alignleft aligncenter alignright alignjustify | \
                              bullist numlist outdent indent | removeformat | help'
                          }"

                        v-model="form_data.content"
                      />
                  </div>
                  <div class=" text-center"> <button type="submit" class="btn btn-primary text-center">Submit</button></div>
                </form>
            </div>
        </div>

          <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
              <div class="">
                  <h2>{{article_content.content_subtitle}}</h2>
                  <div v-html="text_content.content"></div>
              </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
 import Editor from '@tinymce/tinymce-vue';

export default {
  layout: 'admin',
  middleware: 'admin_middleware',
  components: {
    'editor': Editor
  },
  data(){
    return{
      token : this.$auth.strategy.token.get(),
      params: this.$route.params.id,
      form_data:{
        article_id: null,
        article_content_id: null,
        content:null,
        font:'san-serif',
        font_size:'22',
      },
      text_content: {},
      article_content: {},
    }
  },
  computed:{
    contentID(){
      return  this.params.split("-")[0];
    },
    articleID(){
      return  this.params.split("-")[1];
    },
  },
  methods:{

    async formSubmit(){
      let res =  await this.$axios.post('api/v1/auth/text-content/store',this.form_data,{ headers: {
        'Authorization': `Basic ${this.token}`
      }});
    },

    async getTextContent(){
      let res =  await this.$axios.get(`api/v1/auth/text-content/get/${this.contentID}`,
                                          { headers: {
                                                        'Authorization': `Basic ${this.token}`,
                                                        'Accept': `Application/json`,
                                                      }
                                          }
                                     );
          this.text_content =  res.data.data[0];
          this.content =    res.data.data[0].content;
    },

    async setID(){
      this.form_data.article_id = this.articleID;
      this.form_data.article_content_id = this.contentID;
    },

    async getArticleContent(){
      let res =  await this.$store.dispatch("admin_store/getContentById",1);
      this.article_content = res.data.data;
    }


  },
  mounted(){
    this.getTextContent();
   // this.form_data.article_id = 5,
   this.setID();
   this.getArticleContent();
  }

}
</script>
<style lang="">

</style>
