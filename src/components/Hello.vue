<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <chart :options="polar" auto-resize></chart>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import { mergeObject } from '../util/utils'

export default {
    name: 'hello',

    data () {
        return {
            msg: 'hello echarts'
        }
    },

    computed: {
        polar () {
            let option = {
                title: {
                    text: 'large scala test'
                },
                legend: {
                    data: ['test']
                },
                xAxis: [
                    {
                        scale: true
                    }
                ],
                yAxis: [
                    {
                        scale: true
                    }
                ],
                series: [
                    {
                        type: 'scatter',
                        data: [[0, 1], [1, 2], [2, 3]]
                    }
                ]
            }
            // let src = Object.assign({}, this.$store.getters.getLargeScalaPointsOptions)
            return option
            // return mergeObject(src, option)
        }
        // ...mapGetters({
        //     polar: 'getChartOptions'
        // })
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
