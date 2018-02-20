<template lang="pug">
  .question
    .question-label {{question.label}}
    template(v-for="answer in question.answers")
      label.answer-label
        input.answer-radio(type="radio" v-bind:value="answer.id" v-model="answerChange")
        .answer-block {{answer.label}}
</template>

<script>
export default {
  name: 'q-choose',
  props: {
    question: {
      type: Object,
      default: function () {
        return {
          label: '',
          answers: [{id: 0, label: ''}]
        }
      }
    }
  },
  data () {
    return {
      answerChange: null
    }
  }
}
</script>
