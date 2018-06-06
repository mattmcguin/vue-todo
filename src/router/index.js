import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import ToDoList from '@/components/ToDoList'
import Weather from '@/components/Weather'

// Allows http functionality
Vue.use(vueResource)
// Allows router functionality
Vue.use(Router)

// Exports into App.vue and renders components based on path
export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDoList',
      component: ToDoList
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    }
  ]
})
