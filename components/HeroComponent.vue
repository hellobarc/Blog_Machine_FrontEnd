<template lang="">
  <div>
    <div class="inner_box">
        <div class="here_content">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-xs-12">
                <div class="hero_image">
                    <img src="~/assets/temp_image/hero_image.png"   alt="Card image cap"/>
                 </div>
            </div>
            <div class="col-lg-4 col-md-4 col-xs-12">
                <div style="height: 100%; " class="d-flex align-items-center">
                  <div class="hero_text" >
                      <div class="text-center">
                          <h1>Title of the Article</h1>
                      </div>
                      <div class="text_content">
                          <p class="font_para">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover ma ..
                          </p>
                         <div class=" pull-right float-right"><ReadmoreButton/></div>
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
