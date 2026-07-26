<template>
  <div class="timeline-section">
    <div class="timeline-line"></div>
    <div class="timeline-days">
      <DayCard
        v-for="day in days"
        :key="day.day"
        :day="day"
      />
    </div>
  </div>
</template>

<script setup>
import { getAllDays } from '../../data/itinerary.js'
import DayCard from './DayCard.vue'

const days = getAllDays()
</script>

<style scoped>
.timeline-section {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg,
    var(--accent), var(--accent-amber), var(--accent-red), var(--accent-green), var(--accent-violet), #ec4899
  );
  transform: translateX(-50%);
}
.timeline-days {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
@media (max-width: 768px) {
  .timeline-line { left: 24px; }
}
</style>
