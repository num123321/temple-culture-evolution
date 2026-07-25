<template>
  <section class="research-questions">
    <div class="rq-inner">
      <h2 class="rq-title">研究之问</h2>
      <p class="rq-intro">
        在出发之前，我们希望带着这些问题开始这次田野调查——
      </p>
      <div class="rq-grid">
        <div
          v-for="q in questions"
          :key="q.id"
          class="rq-card"
        >
          <span class="rq-icon">{{ q.icon }}</span>
          <p class="rq-subtitle">{{ q.subtitle }}</p>
          <h3 class="rq-question">{{ q.question }}</h3>
          <p class="rq-elaboration">{{ q.elaboration }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getAllQuestions } from '../../data/research-questions.js'
const questions = getAllQuestions()
</script>

<style scoped>
.research-questions {
  padding: 80px 24px;
  background: #f8f9fc;
}
.rq-inner { max-width: 1200px; margin: 0 auto; }
.rq-title {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 16px;
}
.rq-intro {
  text-align: center;
  font-size: 16px;
  color: #888;
  margin: 0 0 48px;
}
.rq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}
.rq-card {
  background: #fff;
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s, box-shadow 0.2s;
}
.rq-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.rq-icon { font-size: 36px; display: block; margin-bottom: 16px; }
.rq-subtitle {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #6366f1;
  margin: 0 0 8px;
}
.rq-question {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 12px;
  line-height: 1.5;
}
.rq-elaboration {
  font-size: 14px;
  color: #777;
  line-height: 1.7;
  margin: 0;
}
</style>
