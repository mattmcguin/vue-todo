<template>
  <div class="container js-instance">
    <section class="demo-section">
      <!-- pass a static prop `weather` to the child component -->
      <!-- pass a dynamic prop `time` to the child component -->

      <child-component weather="lightly clouded" v-bind:time="currentTime" inline-template>
        <div>
          <h2 v-text="title"></h2>          
          <p>
            Currently the weather is: {{ weather }}. <br />
            The current time is: {{ time }}. <br />
          </p>
          <p>
             So it is {{ weatherAtTime }}
          </p>
        </div>
      </child-component>
    </section>
  </div>
</template>

<script>
  /**
   * Define a local component
   */
  const childComponent = {
    // the props the component can receive from outside
    // this can either be dynamic or static properties
    props: {
      weather: {
        default: 'bad'
      },
      time: {
        default: 'unknown'
      }
    },
    // internal data, shouldn't be altered from outside
    data () {
      return {
        title: 'The weather and time'
      }
    },
    // computed properties based on other props / data
    computed: {
      weatherAtTime () {
        return `${this.weather} at ${this.time}`
      }
    }
  }

  export default({
    name: 'vue-instance',
    components: {
      childComponent
    },
    data () {
      return {
        currentTime: 'early'
      }
    },
    mounted () {
      // after mount, update the time every second
      setInterval(() => {
        this.currentTime = this.formatTime()
      }, 1000)
    },
    methods: {
      formatTime () {
        return new Date().toLocaleString()
      }
    }
  })
</script>