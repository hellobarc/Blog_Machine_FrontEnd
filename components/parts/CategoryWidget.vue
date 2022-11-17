<template lang="">
  <div>
      <ul>
        <li v-for="(category_list,index) in all_category"><nuxt-link to="/">{{category_list.cat_name}}</nuxt-link></li>
      </ul>
  </div>
</template>
<script>
export default {
  data(){
      return {all_category:{}}
  },
  methods:{

    async getCategory() {
      let res = await this.$store.dispatch("allCategory");
      this.all_category = res.data.data;
    }

  },
  mounted(){
    this.getCategory();
  }
}
</script>
<style lang="">

</style>
