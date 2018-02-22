<template lang="pug">
.edu-app-set
  .edu-app-result(v-if="resultShow")
    edu-task-result(v-bind:tasks="tasks")
  .edu-app-task(v-else)
    .edu-app-set-totals
      .edu-app-set-count Задание {{index + 1}} из {{tasks.length}}
    edu-task(v-bind:task="task" v-on:answerChangeEvent="answerChangeEvent")
    button.edu-app-action(v-bind:disabled="answerNotChanged" v-on:click="nextTask") Дальше
</template>

<script>
import http from 'axios'
import EduTask from './EduTask'
import EduTaskResult from './EduTaskResult'

export default {
  components: {
    EduTask, EduTaskResult
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
  },
  methods: {
    answerChangeEvent: function (val) {
      this.$set(this.task, 'change', val)
    },
    nextTask: function () {
      this.index += 1
    }
  },
  computed: {
    task: function () {
      return this.tasks[this.index]
    },
    answerNotChanged: function () {
      try {
        return this.task.change == null
      } catch (e) {
        return true
      }
    },
    resultShow: function () {
      return this.tasks.length < this.index + 1
    }
  }
}
</script>
