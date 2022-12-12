<template lang="">
  <div>
    <hr/>
    <div class="container-fluid">
      <div class="inner_box">
        <div class="">
            <div class="row">
              <div class="col-md-6">
                <div class="left_item_nav">
                  <span class="large_font">All Category</span>
                  <b-dropdown id="dropdown-1" text="" variant="outline-default " class="m-md-2">
                    <b-dropdown-item  v-for="category_list in all_category" :key="category_list.cat_id"><nuxt-link :to="`/category/${category_list.cat_id}/${category_list.cat_name}`">{{category_list.cat_name}}</nuxt-link></b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <div class="col-md-6">
                  <SearchComponent/>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchComponent from './SearchComponent.vue';
export default {
  components:{
    SearchComponent
  },
  data(){
    return{
       all_category: {},
    }
  },
  methods:{
    async getCategory() {
      let res = await this.$store.dispatch("allCategory");
      this.all_category = res.data.data;
    }
  },
  mounted() {
    this.getCategory();
  }

}
</script>


<style>

</style>
