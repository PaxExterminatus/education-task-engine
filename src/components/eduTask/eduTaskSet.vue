<template lang="pug">
  div.edu-tasks-set
    div.totals {{msg}}
</template>

<script>
export default {
  name: 'edu-task-set',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="sass">
.edu-tasks-set
  .totals
    text-align: center
</style>
