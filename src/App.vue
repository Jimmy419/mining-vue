<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { Layout } from './layout'
import { Mining } from './components'
import socket from './socket'
const yearNo = ref(0)
socket.on('tick', (...args) => {
  yearNo.value = args[0].currentTick
})
</script>

<template>
  <Layout>
    <template v-slot:left>
      <div class="view-content">
        <RouterView />
      </div>
    </template>
    <template v-slot:right>
      <div class="font-16 color-white">{{ yearNo }} YEARS</div>
      <Mining></Mining>
    </template>
  </Layout>
</template>

<style scoped>
.view-content {
  border-top: 1px solid #33344b;
  margin-top: 20px;
  padding: 0 20px;
}
</style>
