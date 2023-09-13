<script setup>
import { ref } from 'vue'
// import { getPlanetListApi } from '../api'
import { MinerCreator } from '../components'
import { PopUp } from '../common'

import socket from '../socket'

socket.on('tick', (...args) => {
  dataList.value = [...args[0].planets]
})

const show = ref(false)
const createItem = (item) => {
  show.value = true
  planetId.value = item._id
}

const dataList = ref([])

// const getDataCall = () => {
//   getPlanetListApi().then(({ data }) => {
//     dataList.value = data
//   })
// }

// getDataCall()

const showMessage = ref(false)
const dataSaved = () => {
  show.value = false
  //   getDataCall()
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 2000)
}

const planetId = ref()
</script>

<template>
  <PopUp v-model:show="showMessage" content="The miner was successfully created"></PopUp>
  <MinerCreator
    v-model:show="show"
    :planetId="planetId"
    :planetList="dataList"
    @dataSaved="dataSaved"
  ></MinerCreator>
  <table class="common-table" cellpadding="0" cellspacing="0">
    <tr>
      <th>Name</th>
      <th>Miners</th>
      <th>Minerals</th>
      <th></th>
    </tr>
    <tr v-for="item in dataList" :key="item._id">
      <td class="color-white">{{ item.name }}</td>
      <td>{{ item.miners }}</td>
      <td>
        <div :class="item.minerals >= 1000 ? 'color-success' : ''">{{ item.minerals }}/1000</div>
      </td>
      <td>
        <span class="action-kit" @click="createItem(item)" v-if="item.minerals >= 1000">
          <span class="icon-add-miner"></span><span> Create a miner</span>
        </span>
      </td>
    </tr>
  </table>
</template>

<style scoped>
.action-kit {
  color: #00f0ff;
  cursor: pointer;
}

.action-kit .icon-add-miner::before {
  color: #00f0ff;
}
</style>
