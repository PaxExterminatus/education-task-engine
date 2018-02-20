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
/*http://colrd.com/palette/19065/*/
$el-width: 350px
$el-padding: 10px 15px
=el-action
  cursor: pointer
  border-radius: 10px
  max-width: $el-width
  padding: $el-padding

$clr1: #ffffe5
$clr2: #f7fcb9
$clr3: #d9f0a3
$clr4: #addd8e
$clr5: #78c679
$clr6: #41ab5d
$clr7: #238443
$clr8: #006837
$clr9: #004529
$clrf1: #2c3e50
$clrf2: #fff

.edu-tasks-app
  color: $clrf1
  font: 100% Gill Sans, Tahoma
  height: 94vh
  max-height: 480px
  .tasks-set
    display: flex
    flex-direction: column
    justify-content: space-around
    height: 100%
    .totals
      text-align: center
    .answer-radio
      display: none
    .answer-block
      +el-action
      background-color: $clr1
      margin: 5px 0
    .answer-block:hover
      background-color: $clr2
    .answer-radio:checked + .answer-block
      background-color: $clr3
    .actions
      display: flex
      justify-content: center
    .action
      border: none
      +el-action
      width: 100%
      background-color: $clr8
      color: $clrf2
    .action:hover
      background-color: $clr7
</style>
