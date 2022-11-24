<template lang="">
  <div>
    <div class="content_area">
      <div style="display: flex; justify-content: space-between">
        <div><h2> Article Text </h2></div>
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
                    <label for="content"> Text Content  </label>
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
                  <h2>Tex content</h2>
                  <p>{{text_content}}</p>
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
        article_id:1,
        article_content_id:1,
        content:null,
        font:'san-serif',
        font_size:'22',
      },
      text_content: {},
    }
  },
  methods:{

    async formSubmit(){
      let res =  await this.$axios.post('api/v1/auth/text-content/store',this.form_data,{ headers: {
        'Authorization': `Basic ${this.token}`
      }});
    },

    async getTextContent(){
      let res =  await this.$axios.get(`api/v1/auth/text-content/get/${this.content_id}`,
                                          { headers: {
                                                        'Authorization': `Basic ${this.token}`,
                                                        'Accept': `Application/json`,
                                                      }
                                          }
                                     );
          this.text_content =  res.data;
    }


  },
  mounted(){
    this.getTextContent();
  }

}
</script>
<style lang="">

</style>
