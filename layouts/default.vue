<template lang="">
    <div>
        <div>
            <HeaderComponent/>
        </div>
        <div>
          <nuxt/>
        </div>
    </div>
</template>
<script>
import HeaderComponent from '~/components/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent
  },
    created(){
        console.log(process.env.URL)
    }

}
</script>
<style lang="">

</style>
