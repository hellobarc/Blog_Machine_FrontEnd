<template>
  <div>
    <div class="min-height-100">
        <HeroComponent/>
        <div style="margin-bottom: 250px;">
          <featured-component/>
        </div>
    </div>
  </div>
</template>

<script>
import HeroComponent from '~/components/HeroComponent.vue';
import FeaturedComponent from '../components/FeaturedComponent.vue';
export default {
  name: 'Home-Page',
  components:{
    HeroComponent,
    FeaturedComponent
    },
  data(){
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
