<template lang="">
  <div>
      <div class="inner_box">
        <div class="featured_content">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                <div>
                    <card-post/>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                <div>
                    <card-post/>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12">
              <div>
                    <card-post/>
                </div>
            </div>
            <div class="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                <div>
                    <card-post/>
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
  }
}
</script>
<style>
.featured_content{
  margin-top: 30px;
}

</style>
