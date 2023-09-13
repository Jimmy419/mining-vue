<template>
  <div class="form-item">
    <label class="form-label" :for="name">{{ label }}</label>
    <div class="controller-box" :class="error ? 'error' : ''">
      <slot></slot>
    </div>

    <!-- <input type="text" id="name" v-model="formData.name" /> -->
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
// const showFlag = ref(false)
defineProps({
  label: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-item {
  text-align: left;
}

.controller-box.error {
  border-radius: 4px;
  border: 1px solid #eb5757;
  overflow: hidden;
}
.form-label {
  font-size: 11px;
  color: #9499c3;
}

.error {
  color: #eb5757;
  font-size: 9px;
  line-height: 12px;
}
</style>
