<template lang="">
  <div>
    <hr/>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
            <AdminSidebar/>
        </div>
        <div class="col-md-9">
            <div class="main_content">
                <h1>Article List</h1>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdminSidebar from '~/components/admin/AdminSidebar.vue';
export default {
  components:{
    AdminSidebar
  }
}
</script>
<style lang="">

</style>
