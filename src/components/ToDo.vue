<template>
	<li>
        <b>{{index}}.</b> 
        {{task.title}}
        <span class="completed" v-if="this.$store.state.tasks[index].completed">(Completed)</span>
        <button class="delete-button" @click="removeTask(task)">X</button>
        <button class="delete-button" @click="toggleStatus(task)">Toggle</button>
      </li>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    task: Object,
    index: Number
  },
  data () {
    return {
      sortFilter: 'all'
    }
  },
  methods: {
    removeTask: function (task) {
      this.$store.commit('removeTask', task)
    },
    toggleStatus (task) {
      this.$store.commit('toggleTask', task)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: block;
  margin: 0 10px;
  text-align: left;
  padding: 5px 0;
  border-bottom: 1px solid #2E4053;

}

.delete-button {
  float: right;
  background-color: #44B17C;
  border-color: #44B17C;
  border-radius: 5px;
  margin-left: 5px;
}

.completed {
  color: #44B17C;
}
</style>