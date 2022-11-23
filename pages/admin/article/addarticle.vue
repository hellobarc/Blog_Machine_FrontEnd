<template lang="">
  <div>
    <div class="content_area">
      <div style="display: flex; justify-content: space-between">
        <div><h2>Add Article</h2></div>
        <div><nuxt-link class="btn btn-primary" to="/admin/article"> Article</nuxt-link></div>
      </div>
      <hr/>

      <div class="insert_form col-md-6 mx-auto">

          <form @submit.prevent="formSubmit">

              <div class="form-group">
                <label for="title">Article Title </label>
                <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Article title" v-model="form_data.title">
              </div>

              <div class="form-group">
                <label for="category_id"> Category = {{selected}}</label>
                  <select class="form-control" v-model="selected">
                    <option disabled value="">Please select Category</option>
                    <option v-for="option in allcategory" :value="option.id">
                      {{ option.cat_name }}
                    </option>
                  </select>
              </div>

              <div class="form-group">
                <label for="meta_keyword">Meta Keywords</label>
                <input type="text" class="form-control" id="meta_keyword" aria-describedby="meta_keyword" placeholder="Meta Keyword">
              </div>

              <div class="form-group">
                <label for="meta_description">Meta Keyword</label>
                <input type="text" class="form-control" id="meta_description" aria-describedby="meta_description" placeholder="Meta Description">
              </div>

              <div class="form-group">
                <label for="meta_description">Meta Description</label>
                <input type="text" class="form-control" id="meta_description" aria-describedby="meta_description" placeholder="Meta Description">
              </div>

              <div class="form-group">
                <label for="page_title">Page Title </label>
                <input type="text" class="form-control" id="page_title" aria-describedby="page_title" placeholder="Page Title">
              </div>

              <div class="form-group">
                <label for="slug">Slug</label>
                <input type="text" class="form-control" id="slug" aria-describedby="slug" placeholder="Slug Title">
              </div>

              <div class="form-group">
                <label for="custom_date">Custom Date </label>
                <input type="text" class="form-control" id="custom_date" aria-describedby="custom_date" placeholder="Date Title">
              </div>

              <div class="">
                <input type="checkbox" class="form-checkbox" id="is_featured" aria-describedby="is_featured">
                <label for="custom_date">Is Featured</label>
              </div>

              <div class="form-group">
                <label for="page_title">Category Featured Image/Thumbnail </label>
                <input type="file" class="form-control" id="feature_image" aria-describedby="featured_image" placeholder="Featured Image" @change="onFileSelected">
              </div>

              <div class=" text-center"> <button type="submit" class="btn btn-primary text-center">Submit</button></div>
          </form>
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
      allcategory: {},
      form_data:{
        title: null,
        category_id:null,
        meta_keyword:null,
        meta_description:null,
        page_title:null,
        slug:null,
        custom_date:null,
        is_featured:null,

      },
      selected_file:null,
      selected:0
    }
  },
  methods:{
    async getCategory(){
      const res = await this.$store.dispatch("allCategory");
      this.allcategory = res.data.data;
    },
    onFileSelected(event){
            this.selected_file = event.target.files[0];
    },
    async formSubmit(){
      const fd = new FormData();
      fd.append('thumbnail',this.selected_file,this.selected_file.name);
      fd.append('cat_name',this.form_data.cat_name);
      fd.append('slug',this.form_data.slug);
      fd.append('meta_keyword',this.form_data.meta_keyword);
      fd.append('meta_description',this.form_data.meta_description);
      fd.append('page_title',this.form_data.page_title);
      fd.append('parent_id',1);

      const token = this.$auth.strategy.token.get();

      let res =  await this.$axios.post('api/v1/auth/category/store',fd,{ headers: {
        'Authorization': `Basic ${token}`
      }});

      console.log(res);

    }
  },
  mounted(){
    this.getCategory();
  }

}
</script>
<style lang="">

</style>
