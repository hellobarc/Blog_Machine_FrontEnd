<template lang="">
  <div>
      <div class="inner_box">
        <div class="featured_content">
          <h1 class="sub_head"> {{category_name}}</h1>
          <div class="row">
            <article class="col-md-3 col-lg-3 col-sm-6 col-xs-12" v-for="list in artiles" :key="list.article_id">
                <section>
                    <card-post :title="list.title" :description="list.meta_description" :article_id="list.id"  :article_slug="list.slug" :thumbnail="list.thumbnail"/>
                </section>
            </article>
          </div>
        </div>
      </div>
      <div class="clearfix">...</div>
  </div>
</template>
<script>

import CardPost from '~/components/parts/CardPost.vue';

export default {
  components:{
    CardPost
  },
  data(){
    return{
       artiles: {},
       category_name: this.$route.params.slug,
    }
  },
  methods:{
    async getPost() {
      let res = await this.$store.dispatch("categoryPost");
      this.artiles = res.data.data;
    }
  },
  mounted() {
    this.getPost();
  }
}
</script>
<style>
.featured_content{
  margin-top: 30px;
}

</style>
