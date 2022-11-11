<template>
  <div>
      <HeroComponent/>
  </div>
</template>

<script>
import HeroComponent from '~/components/HeroComponent.vue';

export default {
  name: 'IndexPage',
  components:{
    HeroComponent
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
