<template>
  <div class="error-page">
    <h1 class="title">Oops, something went wrong!</h1>
    <p class="subtitle">Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
    height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
