<template lang="">
  <div>
    <div class="mycard" style="width:95%">
      <img src="~/assets/temp_image/course_1.png"   alt="Card image cap"/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <ReadmoreButton :to="'/detail/'+post_id"/>
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
      post_id: 1
    }
  }

}
</script>
<style lang="">

</style>
