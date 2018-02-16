<template lang="pug">
  #app.edu-task-app
    edu-task-set
</template>

<script>
import eduTaskSet from './components/eduTask/eduTaskSet'

export default {
  name: 'App',
  components: {
    eduTaskSet
  }
}
</script>

<style lang="sass">
.edu-task-app
  border: 1px solid red
  height: 94vh
  max-height: 480px
</style>
