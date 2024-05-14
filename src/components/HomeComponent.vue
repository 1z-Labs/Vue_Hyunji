<template>
<div class="description">
    <div class="box1">
        <div class="comment1"><strong>안녕하세요 </strong>👋</div>
        <div class="comment2">Vue 오늘 처음봐요..</div>
        <div class="comment3">이쁘게 봐주세요!</div>
    </div>
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
.description .box1 {
    padding: 30px;
    display: inline-block;
    background-color: rgb(76, 76, 76);
    color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    animation: fadeInLeft 0.7s;
}

.description .comment1 {
    animation: fadeInLeft 0.7s;
    display: block;
}
.description .comment2 {
    animation: fadeInLeft 1s;
    display: block;
}
.description .comment3 {
    animation: fadeInLeft 1.3s;
    display: block;
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