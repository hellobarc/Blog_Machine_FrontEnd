<template lang="">
    <div>
        <div>
            <HeaderComponent/>
            <NavigationComponent/>
        </div>
        <div>
          <Nuxt/>
        </div>
    </div>
</template>
<script>
import HeaderComponent from '~/components/common/HeaderComponent.vue';
import NavigationComponent from '~/components/common/NavigationComponent.vue';

import "~/assets/css/style_light.css";

export default {
  components: {
    HeaderComponent,
    NavigationComponent
  },
    created(){
        console.log(process.env.URL)
    }

}
</script>
<style lang="">

</style>
