<template lang="">
  <div>
    <div class="mycard" style="width:95%">
      <img src="~/assets/temp_image/course_1.png"   alt="Card image cap"/>
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
  },
  data(){
    return {
      post_id: 1
    }
  }

}
</script>
<style lang="">

</style>
