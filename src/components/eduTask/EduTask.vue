<template lang="pug">
  .edu-app-task
    .edu-app-task-label {{task.todo}}
    componet(v-if="taskComponent" v-bind:is="taskComponent" v-bind:question="task.question")
</template>

<script>
import QChoose from './QChoose'
import QSequence from './QSequence'
export default {
  components: {
    QChoose,
    QSequence
  },
  name: 'edu-task',
  props: {
    task: {
      type: Object,
      default: function () {
        return {
          id: 0,
          type: '',
          todo: '',
          question: {label: '', answers: [{id: 0, label: ''}]}
        }
      }}
  },
  data () {
    return {
      answerChange: null
    }
  },
  computed: {
    taskComponent: function () {
      try {
        return (this.task.type === '') ? null : 'q-' + this.task.type
      } catch (e) {
        return null
      }
    }
  }
}
</script>
