<template lang="">
  <div>
    <footer class="footer">
        <div>
          <div class="inner_box">
            <div class="footer_content">
              <div class="row">
                <div class="col-md-4">
                    <div>
                      <div>
                        <div class="brand"><NuxtLink to="/"><img src="~/assets/images/logo.png" /></NuxtLink></div>
                      </div>
                       <h1 class="footer_title">Footer Title</h1>
                       <div>
                          <p>Text of the blog... Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          <ReadmoreButton/>
                       </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div>
                      <div>
                        <h1 class="footer_title">Footer Title</h1>
                          <p>Text of the blog... Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          <p>Text of the blog... Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          <ReadmoreButton/>
                       </div>
                    </div>
                </div>
                <div class="col-md-4">
                  <div>
                      <div>
                        <h1 class="footer_title">Footer Title</h1>
                          <ul>
                              <li>Link 1</li>
                              <li>Link 2</li>
                              <li>Link 3</li>
                              <li>Link 4</li>
                              <li>Link 5</li>
                          </ul>
                       </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
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
<style lang="">

</style>
