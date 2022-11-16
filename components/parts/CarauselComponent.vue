<template lang="">
  <div>
    <vue-horizontal-list :items="items" :options="options">
      <template v-slot:default="{item}">
        <div class="item_wrapper">
            <div class="carausel_image">
              <img :src="`${$axios.defaults.baseURL}uploads/article/thumbnail/${item.thumbnail}`" :alt="item.article_title" width="100%" class="featured_img_shadow"/>
            </div>
            <div class="carausel_text">
              <h6>{{item.cat_name}}</h6>
              <h1 class="featured_title"> {{item.article_title}}</h1>
              <div class="mt-5">
                  <readmore-button :to="`/detail/${item.article_id}/slub-pore-asbe`"></readmore-button>
              </div>
            </div>
        </div>
      </template>
    </vue-horizontal-list>
  </div>
</template>
<script>
import ReadmoreButton from './ReadmoreButton.vue';

export default {
  components:{
    ReadmoreButton
  },
  props:['items'],
  data() {
      return {
        options: {
          responsive: [
            {end: 576, size: 3},
            {start: 576, end: 768, size: 2},
            {start: 768, end: 992, size: 3},
            {size: 3}
          ],
          list: {
            // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
            windowed: 1200,

            // Because: #app {padding: 80px 24px;}
            padding: 24
          },
        //  autoplay: { play: true, repeat: true, speed: 2500 },
        }
      }
  },

}
</script>
<style scoped>

.featured_title{
    font-size: 1.5rem;
    font-weight: bold;
    font-family: 'Roboto';
}


</style>
