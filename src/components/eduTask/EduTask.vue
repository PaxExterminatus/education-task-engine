<template lang="pug">
  div {{task.question.label}}
    template(v-for="answer of task.question.answers")
      label
        input.answer-radio(type="radio" :value="answer.id" v-model="answerChange")
        div.answer-block {{answer.label}}
</template>

<script>
export default {
  name: 'edu-task',
  props: {
    task: {
      type: Object,
      default: function () {
        return {
          id: 0,
          type: '',
          question: {label: '', answers: [{id: 0, label: ''}]}
        }
      }}
  },
  data () {
    return {
      answerChange: null
    }
  }
}
</script>
