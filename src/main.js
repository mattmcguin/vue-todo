// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask (state, task) {
      state.tasks.push(task)
    },
    removeTask (state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1)
    },
    toggleTask (state, task) {
      task.completed = !task.completed
      this.state.tasks.splice(this.state.tasks.indexOf(task), 1, task)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created: function () {
    this.$http.get('http://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      this.$store.state.tasks = response.data
    })
  }
})
