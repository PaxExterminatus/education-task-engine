<template lang="pug">
.edu-app-answers
  template(v-for="answer in question.answers")
    label
      input.edu-app-answer-radio(type="radio" v-bind:value="answer.id" v-model="answerChange")
      .edu-app-answer-action {{answer.label}}
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
  },
  watch: {
    answerChange: function (val) {
      this.$emit('answerChangeEvent', val)
    },
    question: function () {
      this.answerChange = null
    }
  }
}
</script>
