<script>
import Product_Item_One from "@/components/products/Product_Item_One.vue";

export default {
  name: "Index_New_Products",
  data(){
    return{
      products :[

        {
          id : 1,
          title : "product 1",
          description : "description for 1",
          price : 150,
          sale : 140,
          image : "https://picsum.photos/250/250"
        },
        {
          id : 2,
          title : "product 2",
          description : "description for 2",
          price : 160,
          sale : null,
          image : "https://picsum.photos/250/250"
        },
        {
          id : 3,
          title : "product 3",
          description : "description for 3",
          price : 170,
          sale : 160,
          image : "https://picsum.photos/250/250"
        },
        {
          id :4,
          title : "product 4",
          description : "description for 4",
          price : 180,
          sale :null,
          image : "https://picsum.photos/250/250"
        },

      ]
    }
  },
  components : {
    'product_item_one' : Product_Item_One
  }

}
</script>

<template>
  <q-card>
    <q-card-section>
      <div>
        <strong class="font-18 text-red">Our new products</strong>
      </div>
      <div class="row q-mt-md">
        <div v-for="item in products" class="col-md-3 q-pa-xs">
          <product_item_one :id="item.id" :title="item.title" :price="item.price" :sale="item.sale" :description="item.description" :image="item.image"></product_item_one>
        </div>
      </div>

    </q-card-section>
  </q-card>
</template>

<style scoped>

</style>