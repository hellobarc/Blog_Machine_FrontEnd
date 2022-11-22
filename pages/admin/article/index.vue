<template lang="">
  <div>
    <div class="">
      <div style="display: flex; justify-content: space-between">
        <div><h2>Article List</h2></div>
        <div><nuxt-link class="btn btn-primary" to="/admin/article/addarticle">Add Article</nuxt-link></div>
      </div>
      <div class="table_wrapper">
          <table class="table">
              <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Action</th>
                  <th>Resource</th>
              </tr>
              <tr v-for="(item,index) in all_article">
                  <td>{{item.article_title}}</td>
                  <td>{{item.cat_name}}</td>
                  <td>
                    <nuxt-link to="" class="btn btn-primary btn-xs">Detail</nuxt-link>
                    <nuxt-link to="" class="btn btn-warning btn-xs">Edit</nuxt-link>
                    <nuxt-link to="" class="btn btn-danger btn-xs">Delete</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link :to="`/admin/article/${item.article_id}/add_content`" class="btn btn-primary btn-xs">Add Content</nuxt-link>
                  </td>
              </tr>
          </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  layout: 'admin',
  middleware: 'admin_middleware',
  data(){
    return {
      all_article: {},
    }
  },
  methods:{
    async getArticle(){
      const res = await this.$store.dispatch("admin_store/getArticle");
        this.all_article = res.data.data;
    },
  },
  mounted(){
    this.getArticle();
  }


}
</script>
<style lang="">

</style>
