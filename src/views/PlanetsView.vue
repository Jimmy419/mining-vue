<script setup>
import { ref } from 'vue'
import { PopUp } from '../common'
import { getPlanetListApi } from '../api'

const show = ref(false)
// onMounted(() => {
//   show.value = true
// })
const dataList = ref([])

const getDataCall = () => {
  getPlanetListApi().then(({ data }) => {
    console.log('data', data)
    dataList.value = data
  })
}

getDataCall()
</script>

<template>
  <PopUp v-model:show="show" header="List of miners of Pl1" content="hello">
    <template v-slot:content> 'asdfasdfasdfasdfasd' </template>
  </PopUp>
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
        <span class="action-kit">
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
