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
$appName: 'edu-app'

@import 'assets/colors'
@import "assets/presets"
@import "assets/fonts"
//component App [1]
.#{$appName}
  color: $color-font-dark
  font-family: 'Rubik', sans-serif
  height: 94vh
  max-height: 480px
  //App.TaskSet
  .#{$appName}-set
    display: flex
    flex-direction: column
    justify-content: space-around
    height: 100%
  //App.TaskSet.Totals
  .#{$appName}-set-totals
    font-size: $font-size-small
    display: flex
  .#{$appName}-set-count
    color: initial
  .#{$appName}-set-totals > *
    margin-right: 10px
  //App.TaskSet.Action
  .#{$appName}-action
    +action
    flex: 0 0 auto
    font: inherit
    text-align: center
    color: $color-font-light
    background-color: $color-theme8
  .#{$appName}-action:hover
    background-color: $color-theme7
  //App.TaskSet.Task
  .#{$appName}-task
    flex: 1 0 auto
    display: flex
    flex-direction: column
  .#{$appName}-task-label
    font-size: $font-size-small
  //App.TaskSet.Task.Question
  .#{$appName}-quest
    margin-top: 2vh
  .#{$appName}-quest-label
    font-size: $font-size-big
  //App.TaskSet.Task.Question.Answer
  .#{$appName}-answer-label
    display: block
    max-width: $action-max-width
  .#{$appName}-answer-radio
    display: none
  .#{$appName}-answer-block
    +action
    background-color: $color-theme1
  .#{$appName}-answer-block:hover
    background-color: $color-theme2
  .#{$appName}-answer-radio:checked + .#{$appName}-answer-block
    background-color: $color-theme3
@media (max-width: 400px)
  .#{$appName}
    .#{$appName}-quest-label
      font-size: 6vw
</style>
