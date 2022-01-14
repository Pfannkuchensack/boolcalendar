<template>
    <h2>Calendar View</h2>
    <div v-for="question in questions" key="question.question">
        <h3>{{ question.question }}</h3>
        <ul>
            <li v-for="answer in question.answers">{{ answer[0] }}: {{ answer[1] }}</li>
        </ul>
    </div>
</template>

<script>
import { createAPI } from "./api.js";

const api = createAPI();

export default {
  setup() {},
  computed: {
    questions() {
      return api.calendarView();
    },
  },
  methods: {},
};
</script>