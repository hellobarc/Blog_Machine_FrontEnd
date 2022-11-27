<template lang="">
  <div>
    <div class="mycard" style="width:95%">

      <img :src="`${base_url}public/uploads/article/thumbnail/${thumbnail}`"   :alt="title"/>
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-text">{{description}}</p>
        <ReadmoreButton :to="`/detail/${article_id}/${article_slug}`"/>
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
  props:{
    title: String,
    description: String,
    article_id: String,
    article_slug: String,
    thumbnail : String,
  },
  data(){
    return {
      post_id: 1,
      base_url: this.$axios.defaults.baseURL
    }
  }

}
</script>
<style lang="">

</style>
