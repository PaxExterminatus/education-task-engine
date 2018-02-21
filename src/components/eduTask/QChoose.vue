<template lang="pug">
.edu-app-quest
  .edu-app-quest-label {{question.label}}
  template(v-for="answer in question.answers")
    label.edu-app-answer-label
      input.edu-app-answer-radio(type="radio" v-bind:value="answer.id" v-model="answerChange")
      .edu-app-answer-block {{answer.label}}
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
