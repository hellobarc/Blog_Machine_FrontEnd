<template>
  <div>
    <div class="min-height-100">
          <HeroComponent/>
        <div style="margin-bottom: 250px;">
          <featured-component/>
          <latestpost-component/>
        </div>
    </div>
  </div>
</template>

<script>
import HeroComponent from '~/components/HeroComponent.vue';
import FeaturedComponent from '~/components/FeaturedComponent.vue';
import LatestpostComponent from '~/components/LatestpostComponent.vue';


export default {
  name: 'Home-Page',
  components:{
    HeroComponent,
    FeaturedComponent,
    LatestpostComponent,
    LatestpostComponent
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
