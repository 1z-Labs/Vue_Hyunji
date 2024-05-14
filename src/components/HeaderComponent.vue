<template>
<div class="header">
    <h2><router-link to="/" class="link">This is sooo.. umm..</router-link></h2>
    <ul>
        <li><router-link to="/hmm" class="link">Hmm..</router-link></li>
        <li>Hah..?</li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.header {
    padding: 20px;
    border-bottom: 1px solid #454545;
    display: flex;
}

.header ul {
    display: flex;
    list-style: none;
    gap: 70px;
    align-items: center;
    margin-left: 100px;
}

.header li {
    font-size: 20px;
}

.link {
    color: black; 
    text-decoration: none; 
}
</style>
