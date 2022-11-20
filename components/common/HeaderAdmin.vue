<template lang="">
  <div>
    <div class="inner_box">
      <div class="">
          <nav class="navbar navbar-expand-lg">
            <div class="brand"><NuxtLink to="/"><img src="~/assets/images/logo.png" alt="LOGO" /></NuxtLink></div>
            <b-button  class="navbar-toggler" type="button" v-b-toggle.my-collapse>
              <b-icon icon="justify" class="black"></b-icon>
            </b-button >
            <b-collapse id="my-collapse"  class="collapse navbar-collapse">
              <div class="flex-space-between width_100 font-weight-bold">
                <div class="left_m_50">

                </div>
                <div class="right_">
                  <div v-if="this.$auth.loggedIn">
                    <button class="btn btn-outline-danger" href="#" @click="logoutuser">Sign Out</button>
                  </div>
                  <div v-else>
                    <button class="btn btn-outline-primary" href="#"><NuxtLink to="/login">Sign in</NuxtLink></button>
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
