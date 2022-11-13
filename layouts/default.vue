<template lang="">
    <div>
      <vue-scroll-indicator height="5px" color="#ed1d24" background="none"> </vue-scroll-indicator>
        <div class="d-flex flex-column min-vh-100" style="2px solid blue">
          <div>
            <HeaderComponent/>
            <NavigationComponent/>
          </div>
          <div>
            <Nuxt/>
          </div>
        </div>
        <div class="clearfix">...</div>
        <div style="margin-top: 100px;">
          <hr>
          <FooterComponent/>
        </div>
    </div>
</template>
<script>
import HeaderComponent from '~/components/common/HeaderComponent.vue';
import NavigationComponent from '~/components/common/NavigationComponent.vue';
import FooterComponent from '~/components/common/FooterComponent.vue';

import "~/assets/css/style_light.css";

export default {
  components: {
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  },
    created(){
        console.log(process.env.URL)
    }

}
</script>
<style lang="">

</style>
