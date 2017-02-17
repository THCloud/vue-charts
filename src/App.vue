<template>
    <div id="app">
        <navbar></navbar>
        <jumbo></jumbo>
        <router-view></router-view>
        <hr>
        <page-footer></page-footer>
    </div>
</template>

<script>
import Navbar from './views/Navbar';
import PageFooter from './views/Footer';
import Jumbo from './views/Jumbo';

export default {
    name: 'app',
    components: {
        Jumbo,
        Navbar,
        PageFooter
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 50px;
}
</style>
