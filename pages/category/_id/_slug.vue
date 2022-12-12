<template>
  <div>
    <div class="min-height-100">
        <div style="margin-bottom: 250px;">
          <categorypost-component/>
        </div>
    </div>
  </div>
</template>

<script>
import CategorypostComponent from '../../../components/CategorypostComponent.vue';

export default {
  name: 'Home-Page',
    components:{
    CategorypostComponent,
    },
    data() {
      return {

      }
  },
  mounted(){
    console.log("Home page")
  }


}
</script>

<style>

</style>
