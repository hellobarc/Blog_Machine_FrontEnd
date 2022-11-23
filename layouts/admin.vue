<template lang="">
  <div>
    <client-only placeholder="Loading...">
      <vue-scroll-indicator height="5px" color="#ed1d24" background="none"> </vue-scroll-indicator>
      <div class="d-flex flex-column min-vh-100" style="2px solid blue">
        <div>
          <HeaderAdmin/>
        </div>
        <div>
          <hr/>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-2 col-lg-2 col-sm-6 col-xs-12">
                <AdminSidebar/>
              </div>
              <div class="col-md-9 col-lg-9 col-sm-6 col-xs-12">
                  <div class="main_content">
                      <Nuxt/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix">...</div>
      <div style="margin-top: 100px;">
        <hr>
          <div> &copy; All right reserved. </div>
      </div>
    </client-only>
  </div>
</template>
<script>
import HeaderAdmin from '~/components/common/HeaderAdmin.vue';


import "~/assets/css/style_light.css";

export default {
components: {
  HeaderAdmin
},
  created(){
      console.log(process.env.URL)
  }

}
</script>
<style lang="">

</style>
