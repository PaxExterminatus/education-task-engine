<template lang="pug">
  .edu-app-result
    .edu-app-result-totals
      .edu-app-result-count {{tasks.length}}
    div {{tasks}}
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
            question: {
              label: '',
              answers: [
                {id: 0, label: ''}
              ]
            },
            correct: null,
            change: null
          } ]
      }
    }
  }
}
</script>
