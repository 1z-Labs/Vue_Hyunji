<template>
    <div class="description">
        <p class="hello1">Hmm.. Where is Here..? 🤔</p>
        <p class="hello2">I think I had a dream..</p>
        <p class="hello3"><strong>is not it..??</strong></p>
    </div>
</template>
    
<script>
export default {
    name: 'HmmComponent'
}
</script>
    
<style scoped>
.description {
    padding: 50px;
    display: inline-block;
}
.description p {
    line-height: 120%;
    font-size: 30px;
    display: block;
}
.hello1 {
    animation: fadeIn 0.7s ease-in-out;
}
.hello2 {
    animation: fadeIn 1s ease-in-out;
}
.hello3 {
    animation: fadeIn 1.3s ease-in-out;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 3;
        transform: none;
    }
}
</style>