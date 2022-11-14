<template lang="">
  <div>
      <div class="inner_box">
        <div class="featured_content">
          <h1> Latest Article </h1>
          <div class="row">
            <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12" v-for="list in artiles" :key="list.article_id">
                <div>
                    <card-post :title="list.title" :description="list.meta_description" :article_id="list.id"  :article_slug="list.slug"/>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix">...</div>
  </div>
</template>
<script>
import ReadmoreButton from '~/components/parts/ReadmoreButton.vue';
import CardPost from '~/components/parts/CardPost.vue';

export default {
  components:{
    ReadmoreButton,
    CardPost
  },
  data(){
    return{
       artiles: {},
    }
  },
  methods:{
    async getLatestPost() {
      let res = await this.$store.dispatch("latestPost");
      this.artiles = res.data.data;
    }
  },
  mounted() {
    this.getLatestPost();
  }
}
</script>
<style>
.featured_content{
  margin-top: 30px;
}

</style>
