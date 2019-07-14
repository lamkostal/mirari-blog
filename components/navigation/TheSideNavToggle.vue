<template>
  <div
    class="drawer-toggle"
    role="button"
    @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40px;
  width: 40px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle .bar {
  width: 80%;
  height: 2px;
  background-color: white;
  border-radius: 10px
}
</style>
