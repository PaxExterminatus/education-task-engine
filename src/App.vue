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
$font-size-small: .8rem
$font-size-big: 1.5rem
=btn
  cursor: pointer
  border-radius: 10px
  max-width: $el-width
  padding: $el-padding
  margin: 1vh
  border: 0 solid
.edu-tasks-app
  color: $color-font-dark
  font-family: 'Rubik', sans-serif
  height: 94vh
  max-height: 480px
  .tasks
    display: flex
    flex-direction: column
    justify-content: space-around
    height: 100%
    .edu-task
      flex: 1 0 auto
      display: flex
      flex-direction: column
    .totals
      font-size: $font-size-small
    .totals > *
      margin-right: 10px
      display: inline-block
    .todo
      font-size: $font-size-small
    .question
      margin-top: 2vh
      .question-label
        font-size: $font-size-big
      .answer-label
        display: block
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
      +btn
      flex: 0 0 auto
      font: inherit
      text-align: center
      color: $color-font-light
      background-color: $color-theme8
    .action:hover
      background-color: $color-theme7
@media (max-width: 400px)
  .edu-tasks-app
    .tasks
      .question
        .question-label
          font-size: 6vw
</style>
