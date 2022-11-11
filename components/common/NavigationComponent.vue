<template lang="">
  <div>
    <hr/>
    <div class="container-fluid">
      <div class="inner_box">
        <div class="">
            <div class="row">
              <div class="col-md-6">
                <div class="left_item_nav">
                  <span class="large_font">All Category</span>
                  <b-dropdown id="dropdown-1" text="" variant="outline-default " class="m-md-2">
                    <b-dropdown-item class="test">First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
              <div class="col-md-6">
                  <SearchComponent/>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchComponent from './SearchComponent.vue';
export default {
  components:{
    SearchComponent
  }

}
</script>


<style>

</style>
