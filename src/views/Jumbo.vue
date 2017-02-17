<template>
<header class="jumbotron subhead">
    <div class="container">
        <h1>{{ current }}</h1>
    </div>
</header>
</template>

<script>
export default {
    name: 'jumbo',
    computed: {
        current () {
            if (this.$route.path === '/') return '图表制作';
            else return '帮助页';
        }
    }
};
</script>

<style>
.subhead {
	background:rgba(0, 0, 0, 0) linear-gradient(45deg, rgb(2, 0, 49) 0px, rgb(109, 51, 83) 100%) repeat scroll 0% 0% / auto padding-box border-box;
	color: #FFF;
	border-bottom: 1px solid #ddd;
	margin-top: 40px;
}
</style>
