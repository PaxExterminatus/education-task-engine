<template lang="pug">
.tasks-set
  .totals {{msg}}
    | {{tasks}}
  .actions
    button.action Дальше
</template>

<script>
import http from 'axios'
export default {
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
