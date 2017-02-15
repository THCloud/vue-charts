<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <input type='text' :value="title" @input="update">
        <chart :options="point" auto-resize></chart>
        <chart :options="line" auto-resize></chart>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
    name: 'hello',

    data () {
        return {
            msg: 'hello echarts'
        }
    },

    computed: {
        ...mapGetters({
            point: 'getLargeScalaPointsOptions',
            line: 'getLineOptions'
        }),
        ...mapState({
            title: state => state.chart.option.title.text
        })
    },

    methods: {
        update (e) {
            this.$store.commit('updateTitle', e.target.value)
        }
    }
}
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
