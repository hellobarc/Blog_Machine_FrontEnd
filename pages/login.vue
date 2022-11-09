<template lang="">
  <div>

    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Login</h4>
              </div>
              <div class="card-body">
                <form @submit.prevent="login">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" v-model="credential.email" placeholder="Enter your email">
                    <small id="emailHelp" class="form-text text-muted">Your Email here </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" v-model="credential.password" placeholder="*******" id="password">
                    <small id="emailHelp" class="form-text text-muted">Password for login </small>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
export default {
    head: {
      title: 'Login page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Login Page Description'
        }
      ],
    },
    data(){
        return{
            credential:{
                email:'',
                password:'',
            }
        };
    },
    methods:{
        login(){
            this.$auth.loginWith('laravelJWT', { data: this.credential })
        },
    }
}
</script>
