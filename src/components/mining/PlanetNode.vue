<template>
  <div class="planet-cube">
    <div class="planet planet-one" v-if="planetObj && planetObj.name == 'Planet 1'">
      <img class="planet-img" src="/images/planet-1.png" />
    </div>
    <div class="planet planet-two" v-if="planetObj && planetObj.name == 'Planet 2'">
      <img class="planet-img" src="/images/planet-2.png" />
    </div>
    <div class="planet planet-three" v-if="planetObj && planetObj.name == 'Planet 3'">
      <img class="planet-img" src="/images/planet-3.png" />
    </div>
    <div class="current-miner" :class="planetObj && planetObj.minerals >= 1000 ? 'done' : ''">
      {{ planetObj ? planetObj.minerals : 0 }} / 1000
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  planetObj: {
    type: Object
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.planet-cube {
  position: relative;
}

.current-miner {
  color: #fff;
  position: absolute;
  bottom: 0;
  font-size: 0.6vw;
  left: 50%;
  transform: translate(-50%, 100%);
  white-space: nowrap;
  font-family: 'Lato';
}

.current-miner.done {
  color: #00cf67;
}

.planet {
  width: 100%;
}

.planet-img {
  width: 100%;
}
</style>
