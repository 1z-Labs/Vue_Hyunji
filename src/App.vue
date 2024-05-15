<template>
  <div>
    <!--HTML 속성도 데이터 바인딩 가능 -> :(콜론) 사용 (vue 문법)-->
    <h4 class="red" :style="스타일">{{ products[0] }}</h4>
    <p>{{ price1 }} 만원</p> <!--{{  }} -> 자동 렌더링-->
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ price2 }} 만원</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 데이터 바인딩 : js 데이터를 html에 넣는 방법
  // 데이터 보관함! - 자주 변경되는 데이터들은 데이터 바인딩을 이용할 것
  data(){
    return{
      price1 : 60,
      price2 : 70,
      스타일 : 'color: blue',
      products : ['역삼동 오피스텔', '마포구 오피스텔'],
    }
  },
  components: {
   
  }
}
</script>

<style>
</style>
