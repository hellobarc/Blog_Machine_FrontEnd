<template lang="">
  <div>
    <div class="read_more_button text-center"><NuxtLink :to="`${to}`"> Read more  <b-icon icon="arrow-right"></b-icon></NuxtLink></div>
  </div>
</template>
<script>
export default {
  props:['to'],
  created() {
    // props are exposed on `this`
    console.log(this.to)
  }
}
</script>
<style lang="">

</style>
