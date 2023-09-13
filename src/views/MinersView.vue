<script setup>
import { ref } from 'vue'
import { PopUp } from '../common'
// import { getMinersListApi } from '../api'
import { MINER_STATUS_MAP } from '../constants'
import socket from '../socket'

socket.on('tick', (...args) => {
  minersList.value = [...args[0].miners]
})

const show = ref(false)
const minersList = ref([])

// const getMinersCall = () => {
//   getMinersListApi().then(({ data }) => {
//     minersList.value = data
//   })
// }

// getMinersCall()
</script>

<template>
  <PopUp v-model:show="show" header="List of miners of Pl1" content="hello">
    <template v-slot:content> 'asdfasdfasdfasdfasd' </template>
  </PopUp>
  <table class="common-table" cellpadding="0" cellspacing="0">
    <tr>
      <th>Name</th>
      <th>Planet</th>
      <th>carryCapacity</th>
      <th>travelSpeed</th>
      <th>miningSpeed</th>
      <th>Position</th>
      <th>Status</th>
    </tr>
    <tr v-for="minerObj in minersList" :key="minerObj._id">
      <td class="color-white">{{ minerObj.name }}</td>
      <td>{{ minerObj.planet.name }}</td>
      <td :class="minerObj.carryCapacity == 200 ? 'color-success' : ''">
        {{ minerObj.carryCapacity }}/200
      </td>
      <td>{{ minerObj.travelSpeed }}</td>
      <td>{{ minerObj.miningSpeed }}</td>
      <td>
        <div class="fix-width">{{ parseInt(minerObj.x) }},{{ parseInt(minerObj.y) }}</div>
      </td>
      <td>
        <div class="fix-width">{{ MINER_STATUS_MAP[minerObj.status] }}</div>
      </td>
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

.fix-width {
  width: 50px;
}
</style>
