<template>
  <!--v-html은 데이터 속 태그를 인식해 렌더링 -> Cross Site Scripting 공격에 매우 취약!-->
  <!--사용자가 입력한 데이터 출력 (X) / 개발자가 직접 작성한 데이터를 출력할때만 사용하기!-->
  <div v-html="message"></div>
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
