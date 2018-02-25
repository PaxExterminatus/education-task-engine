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
//Extend
%action
  width: 100%
  cursor: pointer
  border-radius: 10px
  padding: $action-padding
  margin: 1vh 0
  border: $action-border
  box-sizing: border-box
//App
.#{$appName}
  font-family: 'Rubik', sans-serif
  color: $color-font-dark
  //App.TaskSet
  &-set
  //App.TaskSet.Note
  &-note
    font:
      size: $font-size-small
  &-set-counter
  &-task-todo
  &-task-question
    font-size: $font-size-big
  //App.TaskSet.Action
  &-actions
    max-width: $action-max-width
  &-action
    @extend %action
    font: inherit
    text-align: center
    color: $color-font-light
    background-color: $color-theme8
    &:hover
      background-color: $color-theme7
    &:disabled
      background-color: $color-disabled
      cursor: not-allowed
  //App.TaskSet.Task
  &-task
  //App.TaskSet.Task.Question
  &-answers
    margin-top: 2vh
  //App.TaskSet.Task.Question.Answer
  &-answer-radio
    display: none
  &-answer-action
    @extend %action
    background-color: $color-theme1
  &-answer-block:hover
    background-color: $color-theme2
  &-answer-radio:checked + .#{$appName}-answer-action
    background-color: $color-theme3
  //App.TaskSet.Result
  &-result
    background-color: #d9f0a3
  &-result-totals
@media (max-width: 400px)
  .#{$appName}
    &-task-question
      font-size: 6vw
</style>
