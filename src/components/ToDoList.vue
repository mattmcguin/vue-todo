<template>
  <div class="todolist">
    <h1>ToDo</h1>
    <br/>
    <form v-on:submit="addTask" class="input">
      <input type="text" v-model="newTask.title" placeholder="New Task">
      <input class="submit-button" type="submit" value="Add Task"/>
    </form>
    <br/>
    <div>
      <button class="toggle-button" v-on:click="sort('closed')">Show Completed</button>
      <button class="toggle-button" @click="sort('open')">Show Not Done</button>
      <button class="toggle-button"@click="sort('all')">Show All</button>
    </div>
    <br/>
    <ol>
      <to-do v-for="(task, index) in sortedTasks" :task="task" v-bind:index="index" v-bind:key="task.title"></to-do>
    </ol>
  </div>
</template>

<script>
import ToDo from './todo'

export default {
  name: 'ToDoList',
  components: {
    'to-do': ToDo
  },
  data () {
    return {
      newTask: {},
      sortFilter: 'all'
    }
  },
  methods: {
    addTask: function (e) {
      e.preventDefault()
      this.newTask.completed = false
      this.$store.commit('addTask', this.newTask)
      this.newTask = {}
    },
    sort (value) {
      this.sortFilter = value
    }
  },
  computed: {
    sortedTasks () {
      return this.$store.state.tasks.filter((task) => {
        if (this.sortFilter === 'closed') {
          return task.completed
        } else if (this.sortFilter === 'open') {
          return !task.completed
        } else {
          return task
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todolist {
  max-width: 50%;
  margin: 0 auto;
  border: 1px solid #2E4053;
  padding: 0 5px;
}

.input {
  display: flex;
  justify-content: center;
  height: 30px;
}

h1, h2 {
  font-weight: normal;
}

ol {
  list-style-type: none;
  padding: 0;
}

.submit-button, .toggle-button {
  background-color: #44B17C;
  border-color: #44B17C;
  border-radius: 5px;
  margin: 0 5px;
}

a {
  color: #42b983;
}
</style>
