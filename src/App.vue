<template>
  <div style="display:flex; gap:1rem; flex-flow: column nowrap;width:100%">
    <Button primary label="Hello World" size="large" />
    <Button primary label="Hello World" size="medium" />
    <Button primary label="Hello World" size="small" />
    <hr>
    <Button backgroundColor="red" label="Hello World" size="small" />
    <Button backgroundColor="orange" label="Hello World" size="medium" />
    <Button backgroundColor="green" label="Hello World" size="large" />
  </div>
</template>
<script setup lang="ts">
import Button from '../src/myComponentLibrary/components/Button.vue'

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
