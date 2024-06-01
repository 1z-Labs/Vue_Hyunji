<template>
  <!--이렇게 출력하면 h1 태그까지 문자열로 인식하여 그대로 출력됨-->
  {{ message }} 
</template>

<script>
export default {
  data() {
    return {
      message: '<h1>Hello, Vue.JS !</h1>'
    };
  }
}
</script>

<style>
</style>
