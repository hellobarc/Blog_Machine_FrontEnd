<template lang="">
  <div>
    <div class="content_area">
      <div style="display: flex; justify-content: space-between">
        <div><h2> Article Contant</h2></div>
        <div><nuxt-link class="btn btn-primary" :to="`/admin/article`"> Article</nuxt-link></div>
      </div>
      <hr/>


      <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <div class="">

              <form @submit.prevent="formSubmit">
                  <div class="form-group">
                    <label for="content_subtitle">Content Sub Title </label>
                    <input type="text" class="form-control" id="content_subtitle" aria-describedby="content_subtitle" placeholder="Content Subtitle" v-model="form_data.content_subtitle">
                  </div>

                  <div class="form-group">
                    <label for="content_type"> Content type  {{form_data.content_type}}</label>
                      <select class="form-control" v-model="form_data.content_type">
                        <option  value="text">Text</option>
                        <option  value="quote">Quote</option>
                        <option  value="image">Image</option>
                        <option  value="video">Video</option>
                        <option  value="left_text_video">Left Text Video</option>
                        <option  value="right_text_video">Right Text Video</option>
                        <option  value="into">Intro Text</option>
                      </select>
                  </div>

                  <div class="form-group">
                    <label for="layout"> Layout = {{form_data.layout}}</label>
                      <select class="form-control" v-model="form_data.layout">
                        <option  value="full_width">Full Width</option>
                        <option  value="left">Left</option>
                        <option  value="right">Right</option>
                        <option  value="center">Center</option>
                      </select>
                  </div>


                  <div class="form-group">
                    <label for="layout_width"> Width = {{form_data.layout_width}}</label>
                      <select class="form-control" v-model="form_data.layout_width">
                        <option v-for="width in 12" :value="width">{{ width}}</option>
                      </select>
                  </div>

                  <div class=" text-center"> <button type="submit" class="btn btn-primary text-center">Submit</button></div>
                  </form>

            </div>
        </div>

        <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
            <div class="">
              <table class="table">
                <tr>
                    <th>Sl</th>
                    <th>Subtitle</th>
                    <th>Type</th>
                    <th>Layout</th>
                    <th>Width</th>
                    <th>Action</th>
                    <th>Resource</th>
                </tr>
                <tr v-for="(item,index) in article_content" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.content_subtitle}}</td>
                    <td>{{item.content_type}}</td>
                    <td>{{item.layout}}</td>
                    <td>{{item.layout_width}}</td>
                    <td>
                        <nuxt-link :to="`/admin/article/content/${item.id}/update`" class="btn btn-xs btn-warning">Edit</nuxt-link>
                        <nuxt-link :to="`/admin/article/content/${item.id}/delete`" class="btn btn-xs btn-danger">Delete</nuxt-link>
                    </td>
                    <td>
                        <div v-if="item.content_type=='text'">
                            <nuxt-link :to="`/admin/article/content/${item.id}-${item.article_id}/add_text`" class="btn btn-xs btn-primary">Add Text</nuxt-link>
                        </div>

                        <div v-if="item.content_type=='image'">
                            <nuxt-link :to="`/admin/article/content/${item.id}-${item.article_id}/add_image`" class="btn btn-xs btn-primary">Add Image</nuxt-link>
                        </div>

                        <div v-if="item.content_type=='video'">
                            <nuxt-link :to="`/admin/article/content/${item.id}/add_video`" class="btn btn-xs btn-primary">Add Video</nuxt-link>
                        </div>

                        <div v-if="item.content_type=='quote'">
                            <nuxt-link :to="`/admin/article/content/${item.id}/add_video`" class="btn btn-xs btn-primary">Add Quote</nuxt-link>
                        </div>

                        <div v-if="item.content_type=='left_text_video'">
                            <nuxt-link :to="`/admin/article/content/${item.id}/add_video`" class="btn btn-xs btn-primary">Left Text Vid</nuxt-link>
                        </div>

                        <div v-if="item.content_type=='right_text_video'">
                            <nuxt-link :to="`/admin/article/content/${item.id}/add_video`" class="btn btn-xs btn-primary">Right Text Vid</nuxt-link>
                        </div>

                        <div v-if="item.content_type=='into'">
                            <nuxt-link :to="`/admin/article/content/${item.id}/add_video`" class="btn btn-xs btn-primary">Add Intro</nuxt-link>
                        </div>


                    </td>
                </tr>
              </table>

            </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>


export default {
  layout: 'admin',
  middleware: 'admin_middleware',
  data(){
    return{
      token : this.$auth.strategy.token.get(),
      article_id: this.$route.params.id,
      form_data:{
        article_id: this.$route.params.id,
        content_subtitle: null,
        content_type:null,
        layout:null,
        layout_width:null,
      },
      article_content: {},

    }
  },
  methods:{
    async formSubmit(){
      let res =  await this.$axios.post('api/v1/auth/article-content/store',this.form_data,{ headers: {
        'Authorization': `Basic ${this.token}`
      }});

      this.getArticleContent();
    },

    async getArticleContent(){
      let res =  await this.$axios.get(`api/v1/auth/article-content/get/${this.article_id}`,
                                          { headers: {
                                                        'Authorization': `Basic ${this.token}`
                                                      }
                                          }
                                     );
          this.article_content =  res.data.data;
    }
  },
  mounted(){
    this.getArticleContent();
  }

}
</script>
<style lang="">

</style>
