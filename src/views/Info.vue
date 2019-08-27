<template>
<div>
  <div>info</div>
  <h1>hi</h1>
 <button type="button" @click="increase()">点我</button>
</div>

</template>
<script>
import store from "@/store.js"

export default {
  name:"Info",

  methods:{
    increase(){
      debugger
      store.commit("increase");
    },

    output(){
      alert("output")
    }
  },


  mounted (){
    window.vue = this  // 把this 绑定给window.vue 这样可方便调试， 以后调试时，
    //在console窗口是直接用 window.vue 可直接调试
  }
}
</script>

<style  scoped>

</style>
