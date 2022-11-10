<template lang="">
  <div>

    <div class="inner_box">
      <nav class="navbar navbar-expand-lg">
        <div><NuxtLink to="/">LOGO</NuxtLink></div>
        <b-button  class="navbar-toggler" type="button" v-b-toggle.my-collapse>
          <span class="navbar-toggler-icon"></span>
        </b-button >
        <b-collapse id="my-collapse"  class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="p-2 text-dark" href="#"><NuxtLink to="/">Home</NuxtLink></a>
            </li>
            <li class="nav-item">
              <a class="p-2 text-dark" href="#"><NuxtLink to="/">Courses </NuxtLink> </a>
            </li>
          </ul>
          <div v-if="this.$auth.loggedIn">
              <a class="btn btn-outline-danger" href="#" @click="logoutuser">Sign Out</a>
            </div>
            <div v-else>
              <a class="btn btn-outline-primary" href="#"><NuxtLink to="/login">Sign in</NuxtLink></a>
            </div>
        </b-collapse>
      </nav>
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
