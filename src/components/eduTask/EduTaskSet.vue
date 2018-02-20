<template lang="pug">
.edu-app-set
  .edu-app-set-totals
    .edu-app-set-count Задание {{index + 1}} из {{tasks.length}}
  edu-task(:task="tasks[index]")
  button.edu-app-action Дальше
</template>

<script>
import http from 'axios'
import EduTask from './EduTask'

export default {
  components: {
    EduTask
  },
  name: 'edu-task-set',
  data () {
    return {
      id: 0,
      index: 0,
      tasks: []
    }
  },
  created () {
    http.get('http://localhost/set/1.json')
      .then(response => { this.tasks = response.data['tasks'] })
  }
}
</script>
