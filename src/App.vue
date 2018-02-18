<template lang="pug">
  .edu-tasks-app
    edu-task-set
</template>

<script>
import EduTaskSet from './components/eduTask/EduTaskSet'

export default {
  name: 'App',
  components: {
    EduTaskSet
  }
}
</script>

<style lang="sass">
$clr-border-1: red
$clr-border-2: #000
$clr-txt-1: #2c3e50

.edu-tasks-app
  color: $clr-txt-1
  font: 100% Arial, Helvetica, sans-serif
  border: 1px solid $clr-border-1
  height: 94vh
  max-height: 480px
  .tasks-set
    height: 100%
    border: 1px solid $clr-border-2
    .totals
      text-align: center
</style>
