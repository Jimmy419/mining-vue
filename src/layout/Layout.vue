<template>
  <main class="main-box">
    <Header></Header>
    <div class="main-content">
      <div class="left-part">
        <Navigator></Navigator>
        <slot name="left"></slot>
      </div>
      <div class="right-part">
        <slot name="right"></slot>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Navigator from './Navigator.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-box {
  display: block;
  width: 100vw;
  background-color: #101123;
}
.main-content {
  display: flex;
}

.left-part {
  flex: 0 0 auto;
}

.right-part {
  flex: 1 1 auto;
  padding-right: 20px;
}
</style>
