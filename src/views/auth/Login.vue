<script>
export default {
  name: "Login",
  data(){
 return {
   loading : false,
   log : {
   email : null,
   password: null
   }
 }

  },
  methods : {
    login(){
      this.loading=true;
    }
  }
}
</script>

<template>
  <div class="row justify-center">
    <div class="col-md-7 col-sm-12 col-xs-12 row ">
    <div class="col-md-6">
        <img src="src/assets/images/login-animate.svg" width="500" alt="">
      </div>
      <div class="col-md-6">
        <div class="q-mt-xl q-mb-md q-ml-xl text-center">
        <strong class="text-red " style="font-weight:550; font-size: 17px">Login</strong>
        </div>
        <div class="q-mt-md">
          <q-input rounded filled v-model="text" label="Email" type="email"  />
        </div>
        <div class="q-mt-md">
          <q-input rounded filled v-model="text" label="Password" type="password"  />
        </div>

          <div class="q-pa-md q-gutter-sm">
            <q-btn push color="white" text-color="primary" label="Login"  class="float-right" @click="login" :loading="loading">
            </q-btn>

          </div>

      </div>
</div>


  </div>

</template>

<style scoped>

</style>