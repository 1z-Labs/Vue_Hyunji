<template>
  <!--v-bind : 태그의 콘텐츠가 아니라 속성에 데이터를 연결할 때 사용-->
  <!--꼭 디렉티브와 class를 콜론으로 연결해주어야 함 / : 만 사용하여 축약 가능 (축약을 더 많이 쓴다)-->
  <h1 :class="className">Hello, Vue.JS !</h1>
</template>

<script>
export default {
  data() {
    return {
      className: 'title',
    };
  }
}
</script>

<style>
.title {
  color: red;
}
</style>
