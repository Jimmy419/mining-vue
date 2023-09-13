<script setup>
import { ref } from 'vue'
import { getAsteroidsListApi } from '../api'

import socket from '../socket'

socket.on('tick', (...args) => {
  dataList.value = [...args[0].asteroids]
})

const dataList = ref([])
const getDataCall = () => {
  getAsteroidsListApi().then(({ data }) => {
    console.log('data', data)
    dataList.value = data
  })
}

getDataCall()
</script>

<template>
  <table class="common-table" cellpadding="0" cellspacing="0">
    <tr>
      <th>Name</th>
      <th>Minerals</th>
      <th>Current miner</th>
      <th>Position</th>
    </tr>
    <tr v-for="item in dataList" :key="item._id">
      <td class="color-white">{{ item.name }}</td>
      <td :class="item.minerals == 0 ? 'color-fail' : ''">{{ item.minerals }}</td>
      <td>{{ item.currentMiner ? item.currentMiner.name : '' }}</td>
      <td>{{ item.position.x }},{{ item.position.y }}</td>
    </tr>
  </table>
</template>

<style scoped>
.main-box {
  display: block;
  width: 100vw;
  padding: 20px;
  background-color: #101123;
}

.inner-box {
  display: flex;
}

.left-part {
  width: 50%;
  flex: 0 0 auto;
}

.right-part {
  width: 50%;
  flex: 0 0 auto;
}
</style>
