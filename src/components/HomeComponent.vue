<template>
<div class="description">
    <div class="comment1"><strong>안녕하세요 </strong>👋</div>
    <div class="comment2">Vue 오늘 처음봐요..</div>
    <div class="comment3">이쁘게 봐주세요!</div>
</div>
</template>

<script>
export default {
    name: "HomeComponent"
}
</script>

<style scoped>
.description {
    padding: 50px;
    font-size: 30px;
}
.description div {
    margin-bottom: 10px;
}
.description .comment1 {
    animation: fadeInLeft 0.7s;
}
.description .comment2 {
    animation: fadeInLeft 1s;
}
.description .comment3 {
    animation: fadeInLeft 1.3s;
}

@keyframes fadeInLeft {
	0% {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
	100% {
		opacity: 1;
		transform: translateZ(0);
	}
}
</style>