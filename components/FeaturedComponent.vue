<template lang="">
  <div>
      <div class="inner_box">
        <div class="featured_content">
          <h1 class="sub_head"> Featured Article </h1>
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12" >
                <CarauselComponent  :items="items"/>
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
import CarauselComponent from '~/components/parts/CarauselComponent.vue';


export default {
  components:{
    ReadmoreButton,
    CardPost,
    CarauselComponent
  },
  data() {
      return {
        items: [],
      }
  },
  methods:{
    async getFeaturedPost() {
      let res = await this.$store.dispatch("featruedPost");
      const articles = res.data.data;
          articles.forEach(element => {
              this.items.push({
                article_id: element.article_id,
                article_title:  element.article_title,
                cat_name:  element.cat_name,
                slug: element.slug,
                thumbnail: element.thumbnail
              });
        });

    }
  },
  mounted() {
    this.getFeaturedPost();
  }
}
</script>
<style>
.featured_content{
  margin-top: 30px;
}

</style>
