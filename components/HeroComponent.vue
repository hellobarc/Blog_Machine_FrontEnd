<template lang="">
  <div>
    <div class="inner_box">
        <div class="here_content" v-for="item in articles">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-xs-12">
                <div class="hero_image">
                    <img src="~/assets/temp_image/hero_image.png"   :alt="item.title"/>
                 </div>
            </div>
            <div class="col-lg-4 col-md-4 col-xs-12">
                <div style="height: 100%; " class="d-flex align-items-center" >
                  <div class="hero_text" >
                      <div class="text-center">
                          <h1>{{item.title}}</h1>
                      </div>
                      <div class="text_content">
                          <p class="font_para">
                            {{item.meta_description}}
                          </p>
                         <div class=" pull-right float-right"><ReadmoreButton :to="`/detail/${item.id}/slub-pore-asbe`" /></div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import ReadmoreButton from '~/components/parts/ReadmoreButton.vue';
export default {
  components:{
    ReadmoreButton
  },
  data(){
    return {
       articles : {},
    }
  },
  methods:{
      async getPremiumPost(){
        let res = await this.$store.dispatch("premiumPost");
        this.articles = res.data.data;
      }
  },
  mounted(){
      this.getPremiumPost();
  }
}
</script>
<style>
  .hero_image img{
  border-radius: 32px 0px 0px 30px;
    width: 100%;
}
.text_title{

}

.hero_text{
  padding: 15px;
}

.here_content{
      /* padding: 11px; */
      background: rgb(233, 237, 248);
    border-radius: 32px;
    margin-left: 10px;
    margin-right: 10px;
}
</style>
