<template lang="pug">
  .edu-app-result
    .edu-app-result-labels
      div Заданий
      dev Верных
    .edu-app-result-values
      div {{tasks.length}}
      div {{correctCount}}
    .edu-app-detail
      template(v-for="(task, index) in tasks")
        .edu-app-detail-task
          .edu-app-detail-index {{index + 1}}
          .edu-app-detail-question {{task.question.label}}
          .edu-app-detail-correct {{  }}
</template>

<script>
export default {
  name: 'edu-task-result',
  props: {
    tasks: {type: Array,
      default: function () {
        return [
          {
            id: 0,
            type: '',
            todo: '',
            question: { label: '', answers: [{id: 0, label: ''}] },
            correct: null,
            change: null
          } ]
      }
    }
  },
  data () {
    return {
      correctCount: 0
    }
  },
  watch: {
    tasks: function () {
      console.log('watch - run')
      for (var i = 0; i < this.tasks.length; i++) {
        console.log('watch - for')
        if (this.tasks[i].correct === this.tasks[i].change) {
          console.log('watch - tasks')
          this.correctCount += 1
        }
      }
    }
  }
}
</script>
