<template>
  <!--v-if와 같은 조건부 렌더링-->
  <!--디렉티브에 할당된 값에 따라 템플릿 태그 영역에 작성된 요소를 숨기거나 보여줌 - 렌더링 방식이 다름!-->
  <!--v-if : DOM에 추가히지 않음 / v-show : display: none;으로 숨김-->
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
