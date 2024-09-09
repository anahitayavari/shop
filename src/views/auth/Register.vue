<script>
export default {
  name: "Register",
  data(){
    return{
      loading:false,
      items : {
        name:null,
        email:null,
        phone:null,
        password:null,
      }
    }
  },
  methods:{
    Register(){
      this.loading =true;
    }
  }
}
</script>


<template>
  <div class="row justify-center q-mt-xl">
    <div class="col-md-7 col-sm-12 col-xs-12 row ">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <img src="src/assets/images/register-bg.svg" width="400" alt="">
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="q-mt-md q-mb-md">
          <strong class="text-red" style="font-weight:550; font-size: 17px">Register in shop</strong>
        </div>
        <div>
          <q-input rounded filled v-model="items.name" label="Full name" />
        </div>
        <div class="q-mt-md">
          <q-input rounded filled v-model="items.email" type="email" label="Email" />
        </div>
        <div class="q-mt-md">
          <q-input rounded filled v-model="items.phone" label="Phone" />
        </div>
        <div class="q-mt-md">
          <q-input rounded filled type="password" v-model="items.password" label="Password" />
        </div>
        <div class="q-mt-md">
          <q-btn color="blue-7" :loading="loading" @click="Register" label="Register" glossy class="float-right"></q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>