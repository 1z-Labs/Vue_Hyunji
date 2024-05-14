<!--뷰 컴포넌트의 구조를 HTML 태그를 사용하여 구성-->
<template>
  <h1>Hello, Vue!</h1>
</template>

<!--
  해당 스크립트가 위치하는 파일의 템플릿에 대해서만 스코프가 적용
  import를 사용하여 다른 모듈이나 라이브러리를 가져올 수 있음.
-->
<script>
export default {
  name: 'App',
  components: {}
}
</script>

<!--
  스타일 속성에 관련한 css 코드 삽입
  스타일 태그에 scoped 옵션을 부여하면 해당 템플릿에만 스타일 적용
-->
<style>
</style>
