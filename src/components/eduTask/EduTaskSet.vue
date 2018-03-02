<template lang="pug">
.edu-app-set
  div(v-if="taskShow")
    .edu-app-note
      .edu-app-set-counter Задание {{index + 1}} из {{tasks.length}}
      .edu-app-task-todo {{task.todo}}
      .edu-app-task-question {{task.question.label}}
    .edu-app-actions
      edu-task(v-bind:task="task" v-on:answerChangeEvent="answerChangeEvent")
      button.edu-app-action(v-if="actionShowNext" v-bind:disabled="answerNotChanged" v-on:click="nextTask") Дальше
      button.edu-app-action(v-if="actionShowCheck" v-bind:disabled="answerNotChanged" v-on:click="resultCheck") Проверить
  div.edu-app-resume(v-if="actionsShowResume") В последний раз вы не закончили все задания.
    |  Продолжите с {{cookieIndex + 1}} задания или начните c начала
    button.edu-app-action(v-on:click="tasksResume") Продолжить
    button.edu-app-action(v-on:click="tasksStart") С начала
  .edu-app-result(v-if="showResult")
    .edu-app-result-counter Вы правильно ответили на
      span.edu-app-result-percent {{resultPercent}}%
      | вопросов
      div ({{resultCorrect}} из {{tasks.length}})
    .edu-app-result-message(v-html="resultMessage")
    div.edu-app-resume
      button.edu-app-action(v-on:click="tasksStart") Еще раз
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
      answerNotChanged: true,
      actionsResumeChange: false
    }
  },
  beforeCreate () {
    this.id = document.getElementById('task-set').getAttribute('data-id')
    const url = 'http://localhost/set/' + this.id + '.json'
    // 'https://www.eshko.by/source_lib/data/task_set/' + setId + '.json' // deploy test
    http.get(url)
      .then(response => {
        this.id = response.data['id']
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
    tasksResume: function () {
      this.index = this.cookieIndex
      this.changes = this.cookieChanges
      this.actionsResumeChange = true
    },
    tasksStart: function () {
      this.index = 0
      cookies.delete('edu-tasks-' + this.id + '-index')
      cookies.delete('edu-tasks-' + this.id + '-changes')
      this.showResult = false
      this.actionsResumeChange = true
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
    },
    /**
     * Last task index in cookies
     * @returns {number}
     */
    cookieIndex: function () {
      return Number(cookies.get('edu-tasks-' + this.id + '-index'))
    },
    /**
     * Task Set changes in cookies
     * @returns {string}
     */
    cookieChanges: function () {
      return JSON.parse(cookies.get('edu-tasks-' + this.id + '-changes'))
    },
    actionShowNext: function () {
      return !this.lastTask
    },
    actionShowCheck: function () {
      return this.lastTask
    },
    actionsShowResume: function () {
      return (this.cookieIndex > 0 && !this.actionsResumeChange)
    },
    taskShow: function () {
      if (this.actionsShowResume) {
        return false
      } else if (this.showResult) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
