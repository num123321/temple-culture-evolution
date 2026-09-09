<template>
  <div class="research-conclusion">
    <KeyFindings :findings="keyFindings" />
    <Limitations :limitations="limitations" />
  </div>
</template>

<script setup>
import { getKeyFindings, getLimitations } from '../../data/conclusions.js'
import KeyFindings from './KeyFindings.vue'
import Limitations from './Limitations.vue'

const keyFindings = getKeyFindings()
const limitations = getLimitations()
</script>

<style scoped>
.research-conclusion { max-width: 900px; margin: 0 auto; }
</style>
