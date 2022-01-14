<template>
  <h2>Timeline sagt Hallo</h2>
  <ul>
    <li v-for="date in dates" :key="date">{{ date }}</li>
  </ul>
</template>

<script>
import { createAPI } from "./api.js";

const api = createAPI();

export default {
  setup() {},
  computed: {
    dates() {
      return api.timelineView();
    },
  },
  methods: {},
};
</script>