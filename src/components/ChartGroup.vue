<template>
<div class="container">
    <div class="page-header">
        <h3>图表预览</h3>
    </div>
    <ul class="nav nav-tabs">
        <li v-for='tab in tabs' :class="{active: cur == tab.id}"
        @click="cur=tab.id">
            <a data-toggle="tab">{{ tab.name }}</a>
        </li>
    </ul>
    <chart :options="largeScalaPointOption" v-if="cur == 1" auto-resize></chart>
    <chart :options="lineOption" auto-resize v-else></chart>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Chart from './Echarts';

export default {
    data () {
        return {
            tabs: [
                {
                    name: '生成散点图',
                    id: 1
                },
                {
                    name: '生成折线图',
                    id: 2
                }
            ],
            cur: 1
        };
    },

    components: {
        Chart
    },

    computed: {
        ...mapGetters({
            largeScalaPointOption: 'getLargeScalaPointsOptions',
            lineOption: 'getLineOptions'
        })
    }
};
</script>

<style lang="css">
</style>
