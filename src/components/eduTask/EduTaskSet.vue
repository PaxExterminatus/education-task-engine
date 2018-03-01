<template lang="pug">
.edu-app-set
  button.edu-app-action(v-on:click="coo") Coo
  div(v-if="!showResult")
    .edu-app-note
      .edu-app-set-counter Задание {{index + 1}} из {{tasks.length}}
      .edu-app-task-todo {{task.todo}}
      .edu-app-task-question {{task.question.label}}
    .edu-app-actions
      edu-task(v-bind:task="task" v-on:answerChangeEvent="answerChangeEvent")
      button.edu-app-action(v-if="!lastTask" v-bind:disabled="answerNotChanged" v-on:click="nextTask") Дальше
      button.edu-app-action(v-if="lastTask" v-bind:disabled="answerNotChanged" v-on:click="resultCheck") Проверить
  .edu-app-result(v-if="showResult")
    .edu-app-result-counter Вы правильно ответили на
      span.edu-app-result-percent {{resultPercent}}%
      | вопросов ({{resultCorrect}} из {{tasks.length}})
    .edu-app-result-message(v-html="resultMessage")
  div {{changes}}
</template>

<script>
import http from 'axios'
import EduTask from './EduTask'
import cookies from 'vue-cookie'

export default {
  components: {
    EduTask, cookies
  },
  name: 'edu-task-set',
  data () {
    return {
      id: 0,
      index: 0,
      messages: [{percent: 0, message: ''}],
      tasks: [{ id: 0, type: '', todo: '', correct: 0, change: 0, question: {label: '', answers: [ {id: 0, label: ''} ]} }],
      changes: {
        answers: [0]
      },
      resultCorrect: 0,
      resultMessage: '',
      showResult: false,
      answerNotChanged: true
    }
  },
  beforeCreate () {
    this.id = document.getElementById('task-set').getAttribute('data-id')
    const url = 'http://localhost/set/' + this.id + '.json'
    // 'https://www.eshko.by/source_lib/data/task_set/' + setId + '.json' // deploy test
    http.get(url)
      .then(response => {
        this.messages = response.data['messages']
        this.tasks = response.data['tasks']
      })
  },
  watch: {
    index: function (val) {
      cookies.set('edu-tasks-' + this.id + '-index', val)
      cookies.set('edu-tasks-' + this.id + '-changes', JSON.stringify(this.changes))
    }
  },
  methods: {
    coo: function () {
      this.index = Number(cookies.get('edu-tasks-' + this.id + '-index'))
      this.changes = JSON.parse(cookies.get('edu-tasks-' + this.id + '-changes'))
    },
    answerChangeEvent: function (val) {
      if (val) {
        this.changes.answers[this.index] = val
        this.answerNotChanged = false
      }
    },
    nextTask: function () {
      this.index += 1
      this.answerNotChanged = true
    },
    resultCheck: function () {
      this.resultCorrect = 0
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.changes.answers[i] > 0) {
          if (this.tasks[i].correct === this.changes.answers[i]) {
            this.resultCorrect += 1
          }
        }
      }
      this.resultMessage = ''
      for (let i = 0; i < this.messages.length; i++) {
        if (this.resultPercent >= this.messages[i].percent) {
          this.resultMessage = this.messages[i].message
        }
      }
      this.showResult = true
    }
  },
  computed: {
    task: function () {
      return this.tasks[this.index]
    },
    lastTask: function () {
      return this.tasks.length === this.index + 1
    },
    resultPercent: function () {
      return Number((this.resultCorrect / this.tasks.length * 100).toFixed(0))
    }
  }
}
</script>
