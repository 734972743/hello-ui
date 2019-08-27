import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // state 是用来管理vuex里面的所有的状态值的
  state: {
    count: 0
  },

  // 用来管理state值的方法
  mutations: {
    increase () {
      this.state.count++
    }

  },
  actions: {

  }
})
