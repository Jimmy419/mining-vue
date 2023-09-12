<template>
  <nav class="navigator">
    <RouterLink to="/" v-slot="{ isActive }">
      <div class="link-item" :class="{ active: isActive }">
        <span class="icon-miner nav-icon"></span>
        <div class="nav-text">Miners</div>
      </div>
    </RouterLink>
    <RouterLink to="/asteroids" v-slot="{ isActive }">
      <div class="link-item" :class="{ active: isActive }">
        <span class="icon-asteroid nav-icon"></span>
        <div class="nav-text">Asteroids</div>
      </div>
    </RouterLink>
    <RouterLink to="/planets" v-slot="{ isActive }">
      <div class="link-item" :class="{ active: isActive }">
        <span class="icon-planet nav-icon"></span>
        <div class="nav-text">Planets</div>
      </div>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigator {
  display: flex;
  margin-top: 30px;
}

.link-item {
  width: 70px;
  border-radius: 8px;
  text-align: center;
  padding: 8px;
}

.link-item.active {
  border: 1px solid #32334a;
}

.nav-icon::before {
  color: #fff;
}

.link-item.active .nav-icon::before {
  color: #38d9a9;
}

.nav-icon {
  font-size: 32px;
}

.nav-text {
  color: #9499c3;
  font-size: 12px;
}
</style>
