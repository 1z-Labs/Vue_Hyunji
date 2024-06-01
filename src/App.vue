<template>
  <!--v-if : 조건에 따라 렌더링하는 것은 성능에 영향을 줄 수 있음 - 조건이 자주 변경되지 않는 경우에 사용-->
  <!--v-show : 요소를 다시 그려야하는 부담이 없으므로 조건이 자주 변경되는 경우에 사용하면 좋음-->
  <p v-show="condition">v-show의 값이 참입니다!</p>
  <p v-show="!condition">v-show의 값이 거짓입니다!</p>
</template>

<script>
export default {
  data() {
    return {
      condition: false,
    };
  }
}
</script>

<style>
.title {
  color: red;
}
</style>
