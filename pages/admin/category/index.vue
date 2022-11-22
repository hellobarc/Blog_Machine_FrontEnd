<template lang="">
  <div>
    <div class="">
      <div style="display: flex; justify-content: space-between">
        <div><h2>Category</h2></div>
        <div><nuxt-link class="btn btn-primary" to="/admin/category/addcategory">Add Category</nuxt-link></div>
      </div>

      <table class="table">
          <tr>
            <th>SL</th><th>Categoy Name</th><th>Action</th>
          </tr>
          <tr v-for="(item, index) in allcategory" :key="index">
              <td>{{index+1}}</td><td>{{item.cat_name}}</td> <td><button class="btn btn-xs btn-warning">Edit</button> <button class="btn btn-xs btn-danger">Delete</button></td>
          </tr>
      </table>
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
    }
  },
  methods:{
    async getCategory(){
      const res = await this.$store.dispatch("allCategory");
      this.allcategory = res.data.data;
    },
  },
  mounted(){
    this.getCategory();
  }

}
</script>
<style lang="">

</style>
