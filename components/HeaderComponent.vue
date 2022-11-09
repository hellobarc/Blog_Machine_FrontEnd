<template lang="">
  <div>
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 class="my-0 mr-md-auto font-weight-normal">Blog Machine</h5>
          <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="#"><NuxtLink to="/">Home</NuxtLink></a>
            <a class="p-2 text-dark" href="#">IELTS Preparation</a>
            <a class="p-2 text-dark" href="#">Books</a>
            <a class="p-2 text-dark" href="#">Courses</a>
            <a class="p-2 text-dark" href="#">Pricing</a>
          </nav>
          <div v-if="this.$auth.loggedIn">
            <a class="btn btn-outline-danger" href="#" @click="logoutuser">Sign Out</a>
          </div>
          <div v-else>
            <a class="btn btn-outline-primary" href="#"><NuxtLink to="/login">Sign in</NuxtLink></a>
          </div>
        </div>
  </div>
</template>
<script>
export default {
  methods:{
      logoutuser() {
        this.$auth.logout('laravelJWT').then((data) => {
          console.log(data)
        })
      }
  }
}
</script>
<style lang="">

</style>
