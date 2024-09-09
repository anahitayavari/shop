<script>
export default {
  name: "App",

}
</script>

<template>

  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-blue-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          My Shop
          <q-icon class="float-right q-mt-md q-mr-md" size="30px"  name="fas fa-cart-shopping"></q-icon>
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left">

        <q-route-tab label="Home" />
        <q-route-tab label="Categories" />
        <q-route-tab :to="{name : 'register'}" label="Register" />
        <q-route-tab :to="{name : 'login'}" label="Login" />
        <q-route-tab label="About"  />

      </q-tabs>
    </q-header>
    <q-page-container>

      <router-view />

    </q-page-container>
  </q-layout>

</template>

<style scoped>

</style>