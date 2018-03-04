<template lang="pug">
  .edu-app-set
    .edu-app-task(v-if="taskShown")
      .edu-app-task-counter Задание {{index + 1}} из {{tasks.length}}
      .edu-app-task-todo {{task.todo}}
      .edu-app-task-question {{task.question.label}}
      .edu-app-actions
        edu-task(v-bind:task="task" v-on:answerChangeEvent="answerChangeEvent")
        button.edu-app-action(v-if="actionShowNext" v-bind:disabled="!answerChanged" v-on:click="nextTask") Дальше
        button.edu-app-action(v-if="actionShowCheck" v-bind:disabled="!answerChanged" v-on:click="resultCheck") Проверить
    .edu-app-resume(v-if="resumeShown") В последний раз вы не закончили все задания. Продолжите выполнение с {{indexCookie + 1}} задания или начните c начала
      .edu-app-actions
        button.edu-app-action(v-on:click="setResume") Продолжить
        button.edu-app-action(v-on:click="setRestart") С начала
    .edu-app-result(v-if="resultShown")
      .edu-app-result-counter Вы правильно ответили на
        span.edu-app-result-percent {{resultPercent}}%
        | вопросов ({{resultCorrect}} из {{tasks.length}})
        .edu-app-result-message(v-html="resultMessage")
      .edu-app-actions
        button.edu-app-action(v-on:click="setRestart") Еще раз
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
      answerChanged: false,
      // Show block
      taskShow: true,
      resumeShow: false,
      resultShow: false
    }
  },
  mounted () {
    this.id = Number(document.getElementById('task-set').getAttribute('data-id'))
    const url = 'http://localhost/set/' + this.id + '.json' // dev
    // 'https://www.eshko.by/source_lib/data/task_set/' + this.id + '.json' // product
    http.get(url)
      .then(response => {
        this.messages = response.data['messages']
        this.tasks = response.data['tasks']
      })
    this.resultShow = this.resultCookie
    if (this.resultShow) {
      this.changes = this.changesCookie
    }
    if (this.indexCookie > 0) {
      this.resumeShow = true
    }
  },
  computed: {
    taskShown () {
      return this.taskShow
    },
    resumeShown () {
      return this.resumeShow
    },
    resultShown () {
      return this.resultShow
    },
    resultCookie () {
      return cookies.get(this.resultCookieName) === 'true'
    },
    indexCookie () {
      return Number(cookies.get(this.indexCookieName))
    },
    changesCookie () {
      return JSON.parse(cookies.get(this.changesCookieName))
    },
    resultCookieName () {
      return 'edu-tasks-' + this.id + '-result'
    },
    indexCookieName () {
      return 'edu-tasks-' + this.id + '-index'
    },
    changesCookieName () {
      return 'edu-tasks-' + this.id + '-changes'
    },
    task () {
      return this.tasks[this.index]
    },
    actionShowNext: function () {
      return !this.lastTask
    },
    actionShowCheck: function () {
      return this.lastTask
    },
    lastTask: function () {
      return this.tasks.length === this.index + 1
    },
    resultPercent: function () {
      return Number((this.resultCorrect / this.tasks.length * 100).toFixed(0))
    }
  },
  watch: {
    tasks (val) {
      if (this.resultShow) {
        this.resultCheck()
      }
    },
    taskShow (val) {
      if (val) {
        this.resumeShow = false
        this.resultShow = false
      }
    },
    resultShow (val) {
      if (val) {
        this.taskShow = false
        this.resumeShow = false
      }
      cookies.set(this.resultCookieName, val)
    },
    resumeShow (val) {
      if (val) {
        this.taskShow = false
        this.resultShow = false
      }
    },
    index: function (val) {
      cookies.set(this.indexCookieName, val)
      cookies.set(this.changesCookieName, JSON.stringify(this.changes))
    }
  },
  methods: {
    answerChangeEvent: function (val) {
      if (val) {
        this.changes.answers[this.index] = val
        this.answerChanged = true
      }
    },
    nextTask: function () {
      this.index += 1
      this.answerChanged = false
    },
    resultCheck: function () {
      this.index += 1
      this.resultCorrect = 0
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.changes.answers[i] > 0) {
          if (this.tasks[i].correct === this.changes.answers[i]) {
            this.resultCorrect += 1
          }
        }
      }
      for (let i = 0; i < this.messages.length; i++) {
        if (this.resultPercent >= this.messages[i].percent) {
          this.resultMessage = this.messages[i].message
        }
      }
      this.resultShow = true
    },
    setRestart () {
      cookies.delete(this.indexCookieName)
      cookies.delete(this.changesCookieName)
      cookies.delete(this.resultCookieName)
      this.index = 0
      this.changes = {answers: [0]}
      this.taskShow = true
    },
    setResume: function () {
      this.index = this.indexCookie
      this.changes = this.changesCookie
      this.taskShow = true
    }
  }
}
</script>
