<template lang="">
  <div>
      <div class="inner_box">
        <div class="featured_content">
          <h1>Featured Article </h1>
          <div class="row">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12" >
                <div>
                    <CarauselComponent :items="items"/>
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
import CarauselComponent from '~/components/parts/CarauselComponent.vue';


export default {
  components:{
    ReadmoreButton,
    CardPost,
    CarauselComponent
  },
  data() {
      return {
        items: [
          {title: 'Item 0', content: 'Content item with description'},
          {title: 'Item 1', content: 'Amar Item 2'},
          {title: 'Item 1', content: 'Amar Item 2'},
          {title: 'Item 1', content: 'Amar Item 2'},
          {title: 'Item 1', content: 'Amar Item 2'},
          {title: 'Item 1', content: 'Amar Item 2'},
          {title: 'Item 1', content: 'Amar Item 2'},
          {title: 'Item 1', content: 'Amar Item 2'},
          {title: 'Item 1', content: 'Amar Item 2'},
          {title: 'Item 1', content: 'Amar Item 2'},
        ]
      }
  },
  methods:{
    async getFeaturedPost() {
      let res = await this.$store.dispatch("featruedPost");
      this.artiles = res.data.data;
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
