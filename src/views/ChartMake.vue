<template>
<div>
    <input-group></input-group>
    <chart-group></chart-group>
</div>
</template>

<script>
import InputGroup from '../components/InputGroup';
import ChartGroup from '../components/ChartGroup';

export default {
    name: 'chart-make',

    data () {
        return {};
    },

    components: {
        InputGroup,
        ChartGroup
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
