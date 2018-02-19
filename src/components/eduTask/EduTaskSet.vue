<template lang="pug">
.tasks-set
  .totals {{index + 1}} / {{tasks.length}}
  edu-task(:task="tasks[index]")
  .actions
    button.action Дальше
  div {{tasks}}
</template>

<script>
import http from 'axios'
import EduTask from './EduTask'
export default {
  components: {EduTask},
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
