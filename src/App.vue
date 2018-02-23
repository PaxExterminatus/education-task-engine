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
    background-color: #d9f0a3
    max-width: $action-max-width
  .#{$appName}-action
    +action
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
