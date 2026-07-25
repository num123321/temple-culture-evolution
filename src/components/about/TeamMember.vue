<template>
  <div class="team-member">
    <div class="tm-avatar">
      <span>{{ member.avatar ? '📷' : '👤' }}</span>
    </div>
    <h4 class="tm-name">{{ member.name }}</h4>
    <span class="tm-role">{{ member.role }}</span>
    <p class="tm-responsibility">{{ member.responsibility }}</p>
    <p v-if="member.bio" class="tm-bio">{{ member.bio }}</p>
  </div>
</template>

<script setup>
defineProps({
  member: { type: Object, required: true }
})
</script>

<style scoped>
.team-member {
  background: #fff;
  border-radius: 14px;
  padding: 28px 20px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  transition: transform 0.2s;
}
.team-member:hover { transform: translateY(-4px); }
.tm-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #f0f0f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
.tm-avatar span { font-size: 32px; }
.tm-name { font-size: 17px; font-weight: 700; color: #1a1a2e; margin: 0 0 4px; }
.tm-role {
  display: inline-block;
  padding: 2px 12px;
  background: #f0f0f5;
  border-radius: 8px;
  font-size: 12px;
  color: #6366f1;
  font-weight: 600;
  margin-bottom: 12px;
}
.tm-responsibility {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}
.tm-bio { font-size: 12px; color: #999; margin: 8px 0 0; }
</style>
