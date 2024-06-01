<template>
  <!--태그 영역을 건너뛰게 하는 디렉티브-->
  <!--v-pre가 적용되어 div태그는 읽히지 못해 컴파일에서 제외됨-->
  <!--'{{ message }}'가 문자열로 그대로 출력됨-->
  <div v-pre>{{ message }}</div>
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
