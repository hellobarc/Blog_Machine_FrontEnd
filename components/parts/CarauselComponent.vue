<template lang="">
  <div>
    <vue-horizontal-list :items="items" :options="options">
      <template v-slot:default="{item}">
        <div class="item_wrapper">
            <div class="carausel_image">
              <img src="~/assets/temp_image/course_2.png" width="100%"/>
            </div>
            <div class="carausel_text">
              <h6>Category</h6>
              <h1> Reading Tips for IELTS</h1>
            </div>
        </div>
      </template>
    </vue-horizontal-list>
  </div>
</template>
<script>
export default {
  props:['items'],
  data() {
      return {
        options: {
          responsive: [
            {end: 576, size: 3},
            {start: 576, end: 768, size: 2},
            {start: 768, end: 992, size: 3},
            {size: 3}
          ],
          list: {
            // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
            windowed: 1200,

            // Because: #app {padding: 80px 24px;}
            padding: 24
          }
        }
      }
  },

}
</script>
<style lang="">

</style>
