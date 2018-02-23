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
//App
.#{$appName}-extend-action
  width: 100%
  cursor: pointer
  border-radius: 10px
  padding: $action-padding
  margin: 1vh 0
  border: $action-border
  box-sizing: border-box
.#{$appName}
  color: $color-font-dark
  font-family: 'Rubik', sans-serif
  //App.TaskSet
  .#{$appName}-set
  //App.TaskSet.Note
  .#{$appName}-note
    font-size: $font-size-small
  .#{$appName}-set-counter
  .#{$appName}-task-todo
  .#{$appName}-task-question
    font-size: $font-size-big
  //App.TaskSet.Action
  .#{$appName}-actions
    max-width: $action-max-width
  .#{$appName}-action
    @extend .#{$appName}-extend-action
    font: inherit
    text-align: center
    color: $color-font-light
    background-color: $color-theme8
  .#{$appName}-action:hover
    background-color: $color-theme7
  .#{$appName}-action:disabled
    background-color: $color-disabled
    cursor: not-allowed
  //App.TaskSet.Task
  .#{$appName}-task
  //App.TaskSet.Task.Question
  .#{$appName}-answers
    margin-top: 2vh
  //App.TaskSet.Task.Question.Answer
  .#{$appName}-answer-radio
    display: none
  .#{$appName}-answer-action
    @extend .#{$appName}-extend-action
    background-color: $color-theme1
  .#{$appName}-answer-block:hover
    background-color: $color-theme2
  .#{$appName}-answer-radio:checked + .#{$appName}-answer-action
    background-color: $color-theme3
  //Result.Totals
  .#{$appName}-result-labels
    display: flex
    text-align: center
  .#{$appName}-result-labels > *
    border: solid 1px green
    width: 100%
    padding: 5px
  .#{$appName}-result-values
    @extend .#{$appName}-result-labels
  //Result.Detail
  .#{$appName}-detail-task
    @extend .#{$appName}-result-labels
  .edu-app-detail-index
    width: 5%
  .edu-app-detail-correct
    @extend .edu-app-detail-index
  .edu-app-detail-question
    text-align: left
@media (max-width: 400px)
  .#{$appName}
    .#{$appName}-quest-label
      font-size: 6vw
</style>
