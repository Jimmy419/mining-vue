<template>
  <PopUp v-model:show="showFlag" header="Create a miner">
    <template v-slot:content>
      <form @submit.prevent="submitForm">
        <FormItem label="Name" name="name" :error="errors.name">
          <input class="form-item-kit" type="text" id="name" v-model="formData.name" />
        </FormItem>
        <FormItem label="Planet" name="planet" :error="errors.planet">
          <select class="form-item-kit" id="gender" v-model="formData.planet">
            <option v-for="planetObj in planetList" :key="planetObj._id" :value="planetObj._id">
              {{ planetObj.name }}
            </option>
          </select>
        </FormItem>

        <div class="inner-title">Assign points</div>
        <div class="sub-form-box">
          <div class="sub-form-box-item">
            <FormItem label="carryCapacity" name="carryCapacity" :error="errors.carryCapacity">
              <input
                type="number"
                class="form-item-kit"
                id="carryCapacity"
                v-model="formData.carryCapacity"
              />
            </FormItem>
          </div>
          <div class="sub-form-box-item">
            <FormItem label="travelSpeed" name="travelSpeed" :error="errors.travelSpeed">
              <input
                type="number"
                class="form-item-kit"
                id="travelSpeed"
                v-model="formData.travelSpeed"
              />
            </FormItem>
          </div>
          <div class="sub-form-box-item">
            <FormItem label="miningSpeed" name="miningSpeed" :error="errors.miningSpeed">
              <input
                type="number"
                class="form-item-kit"
                id="miningSpeed"
                v-model="formData.miningSpeed"
              />
            </FormItem>
          </div>
        </div>
        <div class="totl">
          Total: -{{ formData.miningSpeed }}/{{ formData.carryCapacity + formData.travelSpeed }}
        </div>
        <button type="submit" class="btn">Save</button>
      </form>
    </template>
  </PopUp>
</template>

<script setup lang="ts">
import { computed, reactive, toRaw, watch } from 'vue'
import { PopUp } from '../../common'
import { getMinersListApi, createMinersApi } from '../../api'
import { MINER_IDLE_STATUS } from '../../constants'
import { FormItem } from '../../common'

const emit = defineEmits(['update:show', 'dataSaved'])
const showFlag = computed({
  get() {
    return props.show
  },
  set(value) {
    emit('update:show', value)
  }
})
const props = defineProps({
  show: {
    type: Boolean
  },
  planetList: {
    type: Array
  },
  planetId: {
    type: String
  }
})

watch(
  () => props.planetId,
  () => {
    if (props.planetId) {
      formData.planet = props.planetId
    }
  }
)

const checkIfMinerExist = (minerName, fun) => {
  let ifExist = false
  getMinersListApi().then(({ data }) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name == minerName) {
        ifExist = true
        break
      }
    }
    if (ifExist) {
      errors.name = 'This name is already taken.'
    } else {
      errors.name = ''
      fun()
    }
  })
}

const setMinerPosition = () => {
  const positionO = { x: 0, y: 0 }
  if (props.planetList && formData.planet) {
    for (let i = 0; i < props.planetList?.length; i++) {
      if (formData.planet == props.planetList[i]._id) {
        positionO.x = props.planetList[i].position.x
        positionO.y = props.planetList[i].position.y
      }
    }
    return positionO
  }

  props.planetList
}

const formData = reactive({
  name: '',
  planet: '',
  carryCapacity: 0,
  travelSpeed: 0,
  miningSpeed: 0
})

const errors = reactive({
  name: '',
  planet: '',
  carryCapacity: '',
  travelSpeed: '',
  miningSpeed: ''
})

const validateForm = () => {
  let valid = true

  if (!formData.name) {
    errors.name = 'Please input a name'
    valid = false
  } else {
    errors.name = ''
  }

  if (!formData.planet) {
    errors.planet = 'Please choose a planet'
    valid = false
  } else {
    errors.planet = ''
  }

  if (!formData.carryCapacity) {
    errors.carryCapacity = 'Please input a carryCapacity'
    valid = false
  } else {
    errors.carryCapacity = ''
  }

  if (!formData.travelSpeed) {
    errors.travelSpeed = 'Please input a travelspeed'
    valid = false
  } else {
    errors.travelSpeed = ''
  }

  if (!formData.miningSpeed) {
    errors.miningSpeed = 'Please input a miningSpeed'
    valid = false
  } else {
    errors.miningSpeed = ''
  }

  return valid
}

const submitForm = () => {
  checkIfMinerExist(formData.name, () => {
    if (validateForm()) {
      const dataToPost = {
        ...toRaw(formData),
        ...setMinerPosition(),
        angle: 90,
        status: MINER_IDLE_STATUS,
        minerals: 1000
      }
      createMinersApi(dataToPost).then(() => {
        emit('dataSaved')
      })
    }
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner-title {
  font-size: 16px;
  text-align: center;
  color: #fff;
  padding: 20px 0;
}

.sub-form-box {
  display: flex;
  justify-content: space-between;
}

.sub-form-box-item {
  width: 30%;
}

.form-item-kit {
  background-color: #242538;
  width: 100%;
  line-height: 36px;
  height: 36px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  padding: 0 8px;
}

.totl {
  text-align: center;
  margin-top: 10px;
  font-size: 11px;
  color: #eb5757;
}

.btn {
  border-radius: 8px;
  background-color: #e1e2ef;
  color: #1a1b2f;
  font-size: 12px;
  font-family: 'Lato';
  min-width: 90px;
  height: 28px;
  border-radius: 8px;
  box-shadow: none;
  outline: 0;
  margin-top: 20px;
  border: 0;
  cursor: pointer;
}
</style>
