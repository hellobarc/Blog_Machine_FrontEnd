<template lang="">
  <div>
    <div class="content_area">
      <div style="display: flex; justify-content: space-between">
        <div><h2> Article Text ={{content_id}}</h2></div>
        <div>
            <nuxt-link class="btn btn-primary" :to="`/admin/article/${content_id}/add_content`">  Add Content </nuxt-link>
        </div>
      </div>

      <hr/>

      <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <div class="">

              <form @submit.prevent="formSubmit">

                  <div class="form-group">
                    <label for="content"> Text Content </label>
                    <editor
                        api-key="73t8fjsg0wa37r22h1gnoznhivgiwf2sxzvt50fu3jdigjo0"
                        :init="{
                          height: 500,
                          menubar: false,
                          plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount textcolor',
                            'checklist mediaembed casechange  formatpainter  linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage  tableofcontents footnotes mergetags autocorrect'
                          ],
                          toolbar:
                            'undo redo | formatselect | blocks fontfamily fontsize | bold italic forecolor backcolor | underline strikethrough| \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help | '
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
                <h2>Subtitle </h2>
                <p>Text hobe</p>
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
      content_id: this.$route.params.id,
      form_data:{
        content_id: this.$route.params.id,
        content_subtitle: null,
        content_type:null,
        layout:null,
        layout_width:null,
        content:null,
      },
      article_content: {},

    }
  },
  methods:{
    async formSubmit(){
      let res =  await this.$axios.post('api/v1/auth/article-content/store',this.form_data,{ headers: {
        'Authorization': `Basic ${this.token}`
      }});
    },

    async getArticleContent(){
      let res =  await this.$axios.get(`api/v1/auth/article-content/show/${this.content_id}`,
                                          { headers: {
                                                        'Authorization': `Basic ${this.token}`
                                                      }
                                          }
                                     );
          this.article_content =  res.data;
    }
  },
  mounted(){
    this.getArticleContent();
  }

}
</script>
<style lang="">

</style>
