<template lang="">
  <div>
    <client-only>
      <vue-scroll-indicator height="5px" color="#ed1d24" background="none"> </vue-scroll-indicator>
    </client-only>

      <div class="d-flex flex-column min-vh-100" style="2px solid blue">
        <div>
          <HeaderAdmin/>
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
import HeaderAdmin from '~/components/common/HeaderAdmin.vue';
import FooterComponent from '~/components/common/FooterComponent.vue';

import "~/assets/css/style_light.css";

export default {
components: {
  HeaderAdmin,
  FooterComponent
},
  created(){
      console.log(process.env.URL)
  }

}
</script>
<style lang="">

</style>
