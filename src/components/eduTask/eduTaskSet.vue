<template lang="pug">
.edu-tasks-set
  .totals {{msg}}
  .actions
    button.action Дальше
</template>

<script>
export default {
  // #fdf7cf
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
  .actions
    width: 100%
    max-width: 250px
    margin: 0 auto
    .action
      cursor: pointer
      width: 100%
      color: #FFF
      padding: 5px
      border: none
      background-color: green
    .action:disabled
      cursor: not-allowed
      background-color: #CCC
</style>
