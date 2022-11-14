<template lang="">
  <div>
    <div class="inner_box">
      <div class="">
          <nav class="navbar navbar-expand-lg">
            <div class="brand"><NuxtLink to="/"><img src="~/assets/images/logo.png" alt="LOGO" /></NuxtLink></div>
            <b-button  class="navbar-toggler" type="button" v-b-toggle.my-collapse>
              <b-icon icon="justify"></b-icon>
            </b-button >
            <b-collapse id="my-collapse"  class="collapse navbar-collapse">
              <div class="flex-space-between width_100 font-weight-bold">
                <div class="left_m_50">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="p-2 text-dark" href="#"><NuxtLink to="/">Home</NuxtLink></a>
                    </li>
                    <li class="nav-item">
                      <a class="p-2 text-dark" href="#"><NuxtLink to="/">Courses </NuxtLink> </a>
                    </li>
                  </ul>
                </div>
                <div class="right_">
                  <div v-if="this.$auth.loggedIn">
                    <a class="btn btn-outline-danger" href="#" @click="logoutuser">Sign Out</a>
                  </div>
                  <div v-else>
                    <a class="btn btn-outline-primary" href="#"><NuxtLink to="/login">Sign in</NuxtLink></a>
                  </div>
                </div>
              </div>
            </b-collapse>
          </nav>
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
<style scoped>
.hero_image img{
  border-radius: 32px 0px 0px 30px;
    width: 100%;
}
.text_title{

}

.hero_text{
  padding: 15px;
}

.here_content{
      /* padding: 11px; */
      background: rgb(233, 237, 248);
    border-radius: 32px;
    margin-left: 10px;
    margin-right: 10px;
}
</style>
