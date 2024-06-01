<template>
  <!--텍스트 보간과 비슷한 기능-->
  <!--이 디렉티브는 속성에 사용해야 해서 요소의 콘텐츠가 모두 대체됨-->
  <div v-text="message"></div>
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
