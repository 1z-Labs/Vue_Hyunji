<template>
  <p v-if="condition === 'A'">condition의 값은 {{ condition }}</p>
  <p v-if="condition === 'B'">condition의 값은 {{ condition }}</p>
  <p v-if="condition === 'C'">condition의 값은 {{ condition }}</p>
</template>

<script>
export default {
  data() {
    return {
      condition: 'B'
    };
  }
}
</script>

<style>
.title {
  color: red;
}
</style>
