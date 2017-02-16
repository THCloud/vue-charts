<template>
<div>
    <h1>{{ msg }}</h1>
    <input-group></input-group>
    <chart :options="point" auto-resize></chart>
    <!-- <chart :options="line" auto-resize></chart> -->
</div>
</template>

<script>
import Chart from './Echarts';
import InputGroup from './InputGroup';
import { mapGetters } from 'vuex';

export default {
    name: 'hello',

    data () {
        return {
            msg: 'hello echarts'
        };
    },

    components: {
        Chart,
        InputGroup
    },

    computed: {
        ...mapGetters({
            point: 'getLargeScalaPointsOptions',
            line: 'getLineOptions'
        })
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
