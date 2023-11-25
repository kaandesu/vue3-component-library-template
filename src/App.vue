<template>
  <div style="display:flex; gap:1rem; flex-flow: column nowrap;width:100%">
    <my-button primary label="Hello World" size="large" />
    <my-button primary label="Hello World" size="medium" />
    <my-button primary label="Hello World" size="small" />
    <br>
    <my-page :user="{ name: 'User' }" />

  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
