<template lang="pug">
  .edu-app
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
@import "assets/colors"
@import "assets/presets"
@import "assets/fonts"
//component App
.edu-app
  color: $color-font-dark
  font-family: 'Rubik', sans-serif
  height: 94vh
  max-height: 480px
  //component TaskSet
  .edu-app-set
    display: flex
    flex-direction: column
    justify-content: space-around
    height: 100%
    .edu-app-set-totals
      font-size: $font-size-small
      display: flex
      .edu-app-set-count
        color: initial
    .edu-app-action
      +action
      flex: 0 0 auto
      font: inherit
      text-align: center
      color: $color-font-light
      background-color: $color-theme8
    .edu-app-action:hover
      background-color: $color-theme7
    .edu-app-totals > *
      margin-right: 10px
    .edu-task
      flex: 1 0 auto
      display: flex
      flex-direction: column
    .todo
      font-size: $font-size-small
    .question
      margin-top: 2vh
      .question-label
        font-size: $font-size-big
      .answer-label
        display: block
        max-width: $action-max-width
      .answer-radio
        display: none
      .answer-block
        +action
        background-color: $color-theme1
      .answer-block:hover
        background-color: $color-theme2
      .answer-radio:checked + .answer-block
        background-color: $color-theme3
@media (max-width: 400px)
  .edu-app
    .tasks
      .question
        .question-label
          font-size: 6vw
</style>
