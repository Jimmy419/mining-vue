<script setup>
import { ref, onMounted } from 'vue'
import { getPlanetListApi } from '../api'
import { MinerCreator } from '../components'
import { PopUp } from '../common'

const show = ref(false)
const createItem = () => {
  show.value = true
}

const dataList = ref([])

const getDataCall = () => {
  getPlanetListApi().then(({ data }) => {
    console.log('data', data)
    dataList.value = data
  })
}

getDataCall()

const showMessage = ref(false)
const dataSaved = () => {
  show.value = false
  getDataCall()
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 2000)
}

// onMounted(() => {
//   showMessage.value = true
//   //   setTimeout(() => {
//   //     showMessage.value = false
//   //   }, 2000)
// })
</script>

<template>
  <PopUp v-model:show="showMessage" content="The miner was successfully created"></PopUp>
  <MinerCreator v-model:show="show" :planetList="dataList" @dataSaved="dataSaved"></MinerCreator>
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
        <span class="action-kit" @click="createItem">
          <span class="icon-add-miner"></span><span> Create a miner</span>
        </span>
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

.action-kit {
  color: #00f0ff;
  cursor: pointer;
}

.action-kit .icon-add-miner::before {
  color: #00f0ff;
}
</style>
