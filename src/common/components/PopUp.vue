<template>
  <div class="modal-box" v-show="showFlag">
    <div class="content">
      <span class="icon-delete" @click="closeHander"></span>
      <div class="header-box">
        {{ header }}
        <slot name="header">{{ header }}</slot>
      </div>
      <div class="content-box">
        <slot name="content">{{ content }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits(['update:show'])

// const showFlag = ref(false)
const props = defineProps({
  header: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  show: Boolean
})

const showFlag = computed({
  get() {
    return props.show
  },
  set(value) {
    emit('update:show', value)
  }
})

const closeHander = () => {
  console.log('hide')
  showFlag.value = false
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-box {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  z-index: 1000;
}

.content {
  position: absolute;
  min-width: 500px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #0c0d2199;
  padding: 20px;
  border-radius: 12px;
}

.icon-delete {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 24px;
}

.icon-delete::before {
  color: #fff;
}

.header-box {
  text-align: center;
  color: #fff;
  font-size: 16px;
}

.content-box {
  color: #fff;
  padding: 20px;
  text-align: center;
}
</style>
