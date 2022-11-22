<template lang="">
  <div>
    <div class="main_content">
      <div style="display: flex; justify-content: space-between">
        <div><h2>Add Category</h2></div>
        <div><nuxt-link class="btn btn-primary" to="/admin/category"> Category</nuxt-link></div>
      </div>
      <hr/>
      <div class="insert_form col-md-6 mx-auto" >
          <form @submit.prevent="formSubmit">
            <div class="form-group">
              <label for="cat_name">Category Name </label>
              <input type="text" class="form-control" id="cat_name" aria-describedby="cat_name" placeholder="Category Name" v-model="form_data.cat_name">
            </div>

            <div class="form-group">
              <label for="cat_name">Parent Cateogry</label>
              Optional now
            </div>

            <div class="form-group">
              <label for="slug">Category Slug</label>
              <input type="text" class="form-control" id="slug" aria-describedby="slug" placeholder="Category Slug">
            </div>

            <div class="form-group">
              <label for="keyword">Meta Keyword</label>
              <input type="text" class="form-control" id="meta_keyword" aria-describedby="meta_keyword" placeholder="Meta Keyword">
            </div>

            <div class="form-group">
              <label for="meta_description">Meta Desctiption</label>
              <input type="text" class="form-control" id="meta_description" aria-describedby="meta_description" placeholder="Meta Description">
            </div>

            <div class="form-group">
              <label for="page_title">Page Title </label>
              <input type="text" class="form-control" id="page_title" aria-describedby="page_title" placeholder="Page Title">
            </div>

            <div class="form-group">
              <label for="page_title">Category Featured Image </label>
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
        cat_name: null,
        slug:null,
        meta_keyword:null,
        meta_description:null,
        page_title:null,
      },
      selected_file:null
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
      fd.append('featured_image',this.selected_file,this.selected_file.name);
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
