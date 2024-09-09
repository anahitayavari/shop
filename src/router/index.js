import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/index/Index.vue";
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";
import Product_Single from "@/views/products/Product_Single.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name : "index",
      component : Index
    },
    {
      path:"/register",
      name : "register",
      component : Register
    },
    {
      path:"/login",
      name : "login",
      component : Login
    },
    {
      path : "/product/:id/:title",
      name : "product_show",
      component : Product_Single,
    }


  ]
})

export default router
