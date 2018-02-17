<template lang="pug">
.tasks-set
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
