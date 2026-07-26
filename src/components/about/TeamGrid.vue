<template>
  <div class="team-grid">
    <div class="tg-info">
      <h3>{{ teamInfo.name }}</h3>
      <p class="tg-institution">{{ teamInfo.institution }} · {{ teamInfo.year }}</p>
      <p class="tg-desc">{{ teamInfo.description }}</p>
    </div>
    <div class="tg-members">
      <TeamMember
        v-for="member in members"
        :key="member.id"
        :member="member"
      />
    </div>
  </div>
</template>

<script setup>
import { getTeamMembers, getTeamInfo } from '../../data/team.js'
import TeamMember from './TeamMember.vue'

const members = getTeamMembers()
const teamInfo = getTeamInfo()
</script>

<style scoped>
.team-grid { max-width: 1000px; margin: 0 auto; }
.tg-info { text-align: center; margin-bottom: 48px; }
.tg-info h3 { font-size: 24px; font-weight: 700; color: var(--text-heading); margin: 0 0 8px; }
.tg-institution { font-size: 15px; color: var(--text-muted); margin: 0 0 12px; }
.tg-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.7; max-width: 600px; margin: 0 auto; }
.tg-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}
</style>
