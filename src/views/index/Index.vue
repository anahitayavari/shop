<script>
import Index_Slider from "@/views/index/Index_Slider.vue";
import Index_Banners from "@/views/index/Index_Banners.vue";
import Index_New_Products from "@/views/index/Index_New_Products.vue";

export default {
  name: "Index",
  components:{
    "index_slider" : Index_Slider,
    "index_banner" : Index_Banners,
    "new_products" : Index_New_Products,
  }
}
</script>

<template>
  <div class="row">
    <div class="col-md-8 col-sm-12 q-pa-sm">
      <index_slider class="rounded-borders"></index_slider>
    </div>
    <div class="col-md-4 q-pa-sm">
      <index_banner></index_banner>

    </div>

    <div class="col-12 q-mt-sm q-pa-sm">
      <new_products></new_products>
    </div>


  </div>

</template>

<style scoped>

</style>