<template lang="">
  <div>
    <div class="content_area">
      <div style="display: flex; justify-content: space-between">
        <div><nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li class="breadcrumb-item active" aria-current="page">Article</li>
              <li class="breadcrumb-item active" aria-current="page">Content</li>
              <li class="breadcrumb-item active" aria-current="page">Image</li>
            </ol>
          </nav>
       </div>
        <div>
            <nuxt-link class="btn btn-primary" :to="`/admin/article/${articleID}/add_content`">  Add Content </nuxt-link>
        </div>
      </div>
      <hr/>
       <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <div class="">
              <form @submit.prevent="formSubmit">
                  <div class="form-group">
                    <label for="content"> Image Content  </label>
                    <input type="file" class="form-control" id="feature_image" aria-describedby="featured_image" placeholder="Featured Image" @change="onFileSelected">
                  </div>
                  <div class=" text-center"> <button type="submit" class="btn btn-primary text-center">Submit</button></div>
                </form>
            </div>
        </div>

          <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
              <div class="">
                  <h2>{{article_content.content_subtitle}}</h2>
                  <div>
                     Image <img :src="`${base_url}public/uploads/article/thumbnail/${iamge_content.content}`" />
                  </div>
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
      base_url: this.$axios.defaults.baseURL,
      token : this.$auth.strategy.token.get(),
      params: this.$route.params.id,
      form_data:{
        article_id: null,
        article_content_id: null
      },
      iamge_content: {},
      article_content: {},
      file_selected: null,
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

    onFileSelected(event){
       this.file_selected =  event.target.files[0];
    },

    async formSubmit(){
            let res =  await this.$axios.post('api/v1/auth/text-content/store',this.form_data,{ headers: {
                                                    'Authorization': `Basic ${this.token}`
                                                    }});
    },

    async getTextContent(){
      let res =  await this.$axios.get(`api/v1/auth/image-content/get/${this.contentID}`,
                                          { headers: {
                                                        'Authorization': `Basic ${this.token}`,
                                                        'Accept': `Application/json`,
                                                      }
                                          }
                                     );
          this.iamge_content =  res.data.data[0];
    },

    async setID(){
      this.form_data.article_id = this.articleID;
      this.form_data.article_content_id = this.contentID;
    },

    async getArticleContent(){
      let res =  await this.$store.dispatch("admin_store/getContentById",1);
      this.article_content = res.data.data;
      if(res.data.length){
        this.content_exist = true;
      }
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
