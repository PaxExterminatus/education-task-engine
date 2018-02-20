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
@import url('https://fonts.googleapis.com/css?family=Rubik')
@import "assets/color"
$el-width: 350px
$el-padding: 10px 15px
=btn
  cursor: pointer
  border-radius: 10px
  max-width: $el-width
  padding: $el-padding
  margin: 1vh
.edu-tasks-app
  color: $color-font-dark
  font-family: 'Rubik', sans-serif
  height: 94vh
  max-height: 480px
  .tasks-set
    display: flex
    flex-direction: column
    justify-content: space-around
    height: 100%
    .edu-task
      flex: 1 0 auto
      display: flex
      flex-direction: column
    .totals
      text-align: center
    .question
      font-size: 1.3rem
    .answer-label
      max-width: $el-width
    .answer-radio
      display: none
    .answer-block
      +btn
      background-color: $color-theme1
    .answer-block:hover
      background-color: $color-theme2
    .answer-radio:checked + .answer-block
      background-color: $color-theme3
    .action
      flex: 0 0 auto
      +btn
      border: none
      font: inherit
      text-align: center
      color: $color-font-light
      background-color: $color-theme8
    .action:hover
      background-color: $color-theme7
@media (max-width: 400px)
  .edu-tasks-app
    .tasks-set
      .question
        font-size: 6vw
</style>
