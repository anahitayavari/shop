<script>
export default {
  name: "Product_Item_One",
  props:["id","title","price","sale","description","image"],
  created() {
    if (this.title){
      this.url = this.title.replace(" ",'-');
    }
  },
  data(){
    return {
      url:null,
    }
  }
}

</script>
<template>
  <q-card class="my-card">
    <router-link :to="{name : 'product_show' , params : {id : id , title : url }}">
      <q-img v-if="image" :src="image">
        <div class="absolute-bottom text-h6">
          {{ title }}
        </div>
      </q-img>
    </router-link>
    <q-card-section>
      <div>
        <strong class="text-grey-8">Price : </strong>
        <strong class="text-green-8 price" >{{price}}</strong>
      </div>
      <div v-if="sale" class="q-mt-sm">
        <strong class="text-grey-8">Sale : </strong>
        <strong class=" price" >{{ sale }}</strong>
      </div>
      <div class="q-mt-sm">
        <strong class="text-grey-8">Description : </strong>
        <p>{{description}}</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.price{
  font-size: 17px;
}
</style>