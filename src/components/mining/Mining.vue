<script setup>
import { io } from 'socket.io-client'
import { reactive, ref, onMounted } from 'vue'
import PlanetNode from './PlanetNode.vue'

import socket from '../../socket'

// const URL = 'https://asteroids.dev.mediasia.cn'
// const socket = io(URL)

// socket.on('connect', () => {})

// socket.on('disconnect', () => {})

const dataSource = reactive({
  miners: [
    {
      _id: '64ffe7e1873d474c4fac31fb',
      name: 'Miner 1',
      planet: {
        position: { x: 172, y: 223 },
        _id: '64ffe7e1873d474c4fac31de',
        name: 'Planet 3',
        minerals: 0,
        miners: 3,
        __v: 0
      },
      x: 206.06817689822947,
      y: 436.2964118845671,
      angle: 81,
      carryCapacity: 130,
      travelSpeed: 54,
      miningSpeed: 162,
      status: 1,
      minerals: 0,
      __v: 0,
      target: {
        position: { x: 287, y: 943 },
        _id: '64ffe7e1873d474c4fac31d0',
        name: 'Asteroid 10',
        minerals: 1138,
        status: 1,
        currentMiner: null,
        __v: 0
      },
      targetType: 'Asteroid'
    },
    {
      _id: '64ffe7e1873d474c4fac31fc',
      name: 'Miner 2',
      planet: {
        position: { x: 672, y: 422 },
        _id: '64ffe7e1873d474c4fac31dd',
        name: 'Planet 2',
        minerals: 0,
        miners: 5,
        __v: 0
      },
      x: 808,
      y: 717,
      angle: 65,
      carryCapacity: 51,
      travelSpeed: 92,
      miningSpeed: 155,
      status: 2,
      minerals: 0,
      __v: 0,
      target: {
        position: { x: 808, y: 717 },
        _id: '64ffe7e1873d474c4fac31d4',
        name: 'Asteroid 14',
        minerals: 958,
        status: 1,
        currentMiner: null,
        __v: 0
      },
      targetType: 'Asteroid'
    },
    {
      _id: '64ffe7e1873d474c4fac31fd',
      name: 'Miner 3',
      planet: {
        position: { x: 172, y: 223 },
        _id: '64ffe7e1873d474c4fac31de',
        name: 'Planet 3',
        minerals: 0,
        miners: 3,
        __v: 0
      },
      x: 25,
      y: 118,
      angle: -144,
      carryCapacity: 35,
      travelSpeed: 118,
      miningSpeed: 30,
      status: 1,
      minerals: 35,
      __v: 0,
      target: {
        position: { x: 25, y: 118 },
        _id: '64ffe7e1873d474c4fac31da',
        name: 'Asteroid 20',
        minerals: 996,
        status: 1,
        currentMiner: null,
        __v: 0
      },
      targetType: 'Planet'
    },
    {
      _id: '64ffe7e1873d474c4fac31fe',
      name: 'Miner 4',
      planet: {
        position: { x: 672, y: 422 },
        _id: '64ffe7e1873d474c4fac31dd',
        name: 'Planet 2',
        minerals: 0,
        miners: 5,
        __v: 0
      },
      x: 668.1996879875196,
      y: 420.7519500780031,
      angle: -162,
      carryCapacity: 134,
      travelSpeed: 1,
      miningSpeed: 97,
      status: 1,
      minerals: 0,
      __v: 0,
      target: {
        position: { x: 63, y: 222 },
        _id: '64ffe7e1873d474c4fac31cf',
        name: 'Asteroid 9',
        minerals: 1042,
        status: 1,
        currentMiner: null,
        __v: 0
      },
      targetType: 'Asteroid'
    },
    {
      _id: '64ffe7e1873d474c4fac31ff',
      name: 'Miner 5',
      planet: {
        position: { x: 748, y: 375 },
        _id: '64ffe7e1873d474c4fac31dc',
        name: 'Planet 1',
        minerals: 0,
        miners: 1,
        __v: 0
      },
      x: 88.25656644642498,
      y: 227.6412476880336,
      angle: -167,
      carryCapacity: 132,
      travelSpeed: 169,
      miningSpeed: 1,
      status: 1,
      minerals: 0,
      __v: 0,
      target: {
        position: { x: 63, y: 222 },
        _id: '64ffe7e1873d474c4fac31cf',
        name: 'Asteroid 9',
        minerals: 1042,
        status: 1,
        currentMiner: null,
        __v: 0
      },
      targetType: 'Asteroid'
    },
    {
      _id: '64ffe7e1873d474c4fac3200',
      name: 'Miner 6',
      planet: {
        position: { x: 672, y: 422 },
        _id: '64ffe7e1873d474c4fac31dd',
        name: 'Planet 2',
        minerals: 0,
        miners: 5,
        __v: 0
      },
      x: 517.0003076653493,
      y: 404.3621039757122,
      angle: -174,
      carryCapacity: 167,
      travelSpeed: 39,
      miningSpeed: 81,
      status: 1,
      minerals: 0,
      __v: 0,
      target: {
        position: { x: 92, y: 356 },
        _id: '64ffe7e1873d474c4fac31c7',
        name: 'Asteroid 1',
        minerals: 870,
        status: 1,
        currentMiner: null,
        __v: 0
      },
      targetType: 'Asteroid'
    },
    {
      _id: '64ffe7e1873d474c4fac3201',
      name: 'Miner 7',
      planet: {
        position: { x: 672, y: 422 },
        _id: '64ffe7e1873d474c4fac31dd',
        name: 'Planet 2',
        minerals: 0,
        miners: 5,
        __v: 0
      },
      x: 380.06593144105443,
      y: 506.7968137055918,
      angle: 164,
      carryCapacity: 70,
      travelSpeed: 76,
      miningSpeed: 129,
      status: 1,
      minerals: 0,
      __v: 0,
      target: {
        position: { x: 221, y: 553 },
        _id: '64ffe7e1873d474c4fac31d7',
        name: 'Asteroid 17',
        minerals: 1141,
        status: 1,
        currentMiner: null,
        __v: 0
      },
      targetType: 'Asteroid'
    },
    {
      _id: '64ffe7e1873d474c4fac3202',
      name: 'Miner 8',
      planet: {
        position: { x: 172, y: 223 },
        _id: '64ffe7e1873d474c4fac31de',
        name: 'Planet 3',
        minerals: 0,
        miners: 3,
        __v: 0
      },
      x: 63,
      y: 222,
      angle: -179,
      carryCapacity: 88,
      travelSpeed: 60,
      miningSpeed: 54,
      status: 1,
      minerals: 88,
      __v: 0,
      target: {
        position: { x: 63, y: 222 },
        _id: '64ffe7e1873d474c4fac31cf',
        name: 'Asteroid 9',
        minerals: 1042,
        status: 1,
        currentMiner: null,
        __v: 0
      },
      targetType: 'Planet'
    },
    {
      _id: '64ffe7e1873d474c4fac3203',
      name: 'Miner 9',
      planet: {
        position: { x: 672, y: 422 },
        _id: '64ffe7e1873d474c4fac31dd',
        name: 'Planet 2',
        minerals: 0,
        miners: 5,
        __v: 0
      },
      x: 287,
      y: 943,
      angle: 126,
      carryCapacity: 147,
      travelSpeed: 164,
      miningSpeed: 183,
      status: 2,
      minerals: 0,
      __v: 0,
      target: {
        position: { x: 287, y: 943 },
        _id: '64ffe7e1873d474c4fac31d0',
        name: 'Asteroid 10',
        minerals: 1138,
        status: 1,
        currentMiner: null,
        __v: 0
      },
      targetType: 'Asteroid'
    }
  ],
  planets: [
    {
      position: { x: 748, y: 375 },
      _id: '64ffe7e1873d474c4fac31dc',
      name: 'Planet 1',
      minerals: 0,
      miners: 1,
      __v: 0
    },
    {
      position: { x: 672, y: 422 },
      _id: '64ffe7e1873d474c4fac31dd',
      name: 'Planet 2',
      minerals: 0,
      miners: 5,
      __v: 0
    },
    {
      position: { x: 172, y: 223 },
      _id: '64ffe7e1873d474c4fac31de',
      name: 'Planet 3',
      minerals: 0,
      miners: 3,
      __v: 0
    }
  ],
  asteroids: [
    {
      position: { x: 92, y: 356 },
      _id: '64ffe7e1873d474c4fac31c7',
      name: 'Asteroid 1',
      minerals: 870,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 612, y: 203 },
      _id: '64ffe7e1873d474c4fac31c8',
      name: 'Asteroid 2',
      minerals: 883,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 572, y: 752 },
      _id: '64ffe7e1873d474c4fac31c9',
      name: 'Asteroid 3',
      minerals: 905,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 899, y: 59 },
      _id: '64ffe7e1873d474c4fac31ca',
      name: 'Asteroid 4',
      minerals: 873,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 358, y: 677 },
      _id: '64ffe7e1873d474c4fac31cb',
      name: 'Asteroid 5',
      minerals: 806,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 33, y: 645 },
      _id: '64ffe7e1873d474c4fac31cc',
      name: 'Asteroid 6',
      minerals: 974,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 200, y: 915 },
      _id: '64ffe7e1873d474c4fac31cd',
      name: 'Asteroid 7',
      minerals: 1105,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 819, y: 540 },
      _id: '64ffe7e1873d474c4fac31ce',
      name: 'Asteroid 8',
      minerals: 928,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 63, y: 222 },
      _id: '64ffe7e1873d474c4fac31cf',
      name: 'Asteroid 9',
      minerals: 1096,
      status: 1,
      currentMiner: {
        _id: '64ffe7e1873d474c4fac3202',
        name: 'Miner 8',
        planet: '64ffe7e1873d474c4fac31de',
        x: 63,
        y: 222,
        angle: -179,
        carryCapacity: 88,
        travelSpeed: 60,
        miningSpeed: 54,
        status: 2,
        minerals: 54,
        __v: 0,
        target: '64ffe7e1873d474c4fac31cf',
        targetType: 'Asteroid'
      },
      __v: 0
    },
    {
      position: { x: 287, y: 943 },
      _id: '64ffe7e1873d474c4fac31d0',
      name: 'Asteroid 10',
      minerals: 1138,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 979, y: 469 },
      _id: '64ffe7e1873d474c4fac31d1',
      name: 'Asteroid 11',
      minerals: 1083,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 3, y: 951 },
      _id: '64ffe7e1873d474c4fac31d2',
      name: 'Asteroid 12',
      minerals: 963,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 929, y: 24 },
      _id: '64ffe7e1873d474c4fac31d3',
      name: 'Asteroid 13',
      minerals: 954,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 808, y: 717 },
      _id: '64ffe7e1873d474c4fac31d4',
      name: 'Asteroid 14',
      minerals: 958,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 691, y: 304 },
      _id: '64ffe7e1873d474c4fac31d5',
      name: 'Asteroid 15',
      minerals: 1037,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 914, y: 576 },
      _id: '64ffe7e1873d474c4fac31d6',
      name: 'Asteroid 16',
      minerals: 979,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 221, y: 553 },
      _id: '64ffe7e1873d474c4fac31d7',
      name: 'Asteroid 17',
      minerals: 1141,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 649, y: 25 },
      _id: '64ffe7e1873d474c4fac31d8',
      name: 'Asteroid 18',
      minerals: 807,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 985, y: 915 },
      _id: '64ffe7e1873d474c4fac31d9',
      name: 'Asteroid 19',
      minerals: 1199,
      status: 1,
      currentMiner: null,
      __v: 0
    },
    {
      position: { x: 25, y: 118 },
      _id: '64ffe7e1873d474c4fac31da',
      name: 'Asteroid 20',
      minerals: 1026,
      status: 1,
      currentMiner: {
        _id: '64ffe7e1873d474c4fac31fd',
        name: 'Miner 3',
        planet: '64ffe7e1873d474c4fac31de',
        x: 25,
        y: 118,
        angle: -144,
        carryCapacity: 35,
        travelSpeed: 118,
        miningSpeed: 30,
        status: 2,
        minerals: 30,
        __v: 0,
        target: '64ffe7e1873d474c4fac31da',
        targetType: 'Asteroid'
      },
      __v: 0
    }
  ],
  currentTick: 4
})

socket.on('tick', (...args) => {
  dataSource.miners = [...args[0].miners]
  dataSource.planets = [...args[0].planets]
  dataSource.asteroids = [...args[0].asteroids]
  dataSource.currentTick = args[0].currentTick
})
</script>

<template>
  <div class="map">
    <img class="mining-map" src="/images/Background.png" />
    <div
      class="planet-box"
      v-for="planetObj in dataSource.planets"
      :key="planetObj._id"
      :style="{
        left: (planetObj.position.x * 100) / 1000 + '%',
        top: (planetObj.position.y * 100) / 1000 + '%'
      }"
    >
      <PlanetNode :planetObj="planetObj"></PlanetNode>
    </div>

    <div
      class="asteroid-box"
      v-for="asteroidObj in dataSource.asteroids"
      :key="asteroidObj._id"
      :style="{
        left: (asteroidObj.position.x * 100) / 1000 + '%',
        top: (asteroidObj.position.y * 100) / 1000 + '%'
      }"
    >
      <img class="asteroid-img" src="/images/asteroid-icon.svg" />
    </div>

    <span
      class="icon-miner"
      v-for="minerObj in dataSource.miners"
      :key="minerObj._id"
      :style="{
        left: (minerObj.x * 100) / 1000 + '%',
        top: (minerObj.y * 100) / 1000 + '%',
        transform: 'translate(-50%, -50%) rotate(' + (minerObj.angle + 90) + 'deg)'
      }"
    ></span>
  </div>
</template>

<style scoped>
.map {
  position: relative;
  max-width: 100vw;
  margin: auto;
  width: 100%;
  overflow: hidden;
}

.planet-box {
  position: absolute;
  width: 10%;
  transform: translate(-50%, -50%);
}

.mining-map {
  width: 100%;
}

.icon-miner {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0;
  left: 0;
  font-size: 12px;
  transition: all 1s linear;
  /* transition: width .25s linear 1.9s, background 1s 2s, transform 2s; */
}

.icon-miner::before {
  color: #fff;
}

.asteroid-box {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 5%;
}

.asteroid-img {
  width: 100%;
}
/* 
@media (min-width: 576px) {
  .icon-miner {
    font-size: 12px;
  }
}

@media (min-width: 768px) {
  .icon-miner {
    font-size: 14px;
  }
}

@media (min-width: 992px) {
  .icon-miner {
    font-size: calc(100%);
  }
} */
</style>
