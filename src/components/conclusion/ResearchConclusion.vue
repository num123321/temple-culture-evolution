<template>
  <div class="research-conclusion">
    <KeyFindings :findings="keyFindings" />
    <Limitations :limitations="limitations" />
    <div class="rc-next-steps">
      <h3>后续工作</h3>
      <ul>
        <li v-for="(step, i) in nextSteps" :key="i">{{ step }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getKeyFindings, getLimitations, getNextSteps } from '../../data/conclusions.js'
import KeyFindings from './KeyFindings.vue'
import Limitations from './Limitations.vue'

const keyFindings = getKeyFindings()
const limitations = getLimitations()
const nextSteps = getNextSteps()
</script>

<style scoped>
.research-conclusion { max-width: 900px; margin: 0 auto; }
.rc-next-steps {
  background: #f8f9fc;
  border-radius: 14px;
  padding: 28px;
}
.rc-next-steps h3 {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 16px;
}
.rc-next-steps ul { margin: 0; padding-left: 18px; }
.rc-next-steps li {
  font-size: 14px;
  color: #666;
  line-height: 1.8;
}
</style>
