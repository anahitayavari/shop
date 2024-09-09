<script>
export default {
  name: "Product_Single",
  data(){
    return {
      product : {
        id : 1,
        title : "product 1",
        description : "W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use cookie and privacy policy Copyright 1999-2024 by Refsnes Data. All Rights Reserved. W3Schools is Powered by W3.CSS",
        price : 150,
        sale : 140,
        image : "https://picsum.photos/250/250"
      },
      quantity : 1,
    }
  },
  methods : {
    plus(){
      this.quantity += 1;
    },
    negative(){
      this.quantity -= 1;
    }
  }
}
</script>

<template>
  <div class="q-mt-lg q-pa-lg">
    <div class="row">
      <div class="col-md-6 text-center">
        <q-img  >
          <img class="rounded-borders" :src="product.image" width="500" alt="">
        </q-img>
      </div>
      <div class="col-md-6">
        <div class="q-mb-md">
          <strong class="text-grey-7">Product Name : </strong>
          <strong class="font-18 text-red q-mr-md">{{product.title}}</strong>
        </div>
        <div class="q-mb-md">
          <strong class="text-grey-7">Product Price : </strong>
          <span class="text-dark">$</span>
          <strong class="font-18 text-dark q-mr-md">{{product.price}}</strong>
        </div>
        <div class="q-mb-md">
          <strong class="text-grey-7">Product Sale : </strong>
          <span class="text-dark">$</span>
          <strong class="font-18 text-dark q-mr-md">{{product.sale}}</strong>
        </div>
        <div class="q-mb-md">
          <strong class="text-grey-7">Product Description : </strong>
          <p class="q-mt-md text-justify">
            {{product.description}}
          </p>
        </div>
        <div class="q-mb-md q-mt-xl">
          <div class="row">
            <div class="col-md-4 q-pa-sm">
              <q-input dense rounded outlined v-model="quantity" style="text-align: center">
                <template v-slot:prepend>
                  <q-icon v-if="quantity>1" @click="negative" name="fas fa-minus" class="hands" />
                </template>
                <template v-slot:append>
                  <q-icon @click="plus" name="fas fa-plus" class="hands" />
                </template>
              </q-input>
            </div>
            <div class="col-md-8 q-pa-sm">
              <q-btn style="width: 100%"  color="primary" glossy rounded label="Add to Cart"></q-btn>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.hands{
  cursor: pointer;
}

</style>