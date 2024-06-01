<template>
  <!--조건부 렌더링 : 디렉티브에 할당된 참/거짓 값에 따라 HTML요소를 렌더링할지 결정하는 것-->
  <p v-if="visible">이 요소는 렌더링 중</p>
  <p v-if="unvisible">이 요소는 렌더링 X</p>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      unvisible: false, // DOM 추가 후 감춰짐 X / DOM에 추가되지 않음 O
    };
  }
}
</script>

<style>
.title {
  color: red;
}
</style>
