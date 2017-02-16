<template>
<div class="container">
    <div class="page-header">
        <h3>图表信息配置</h3>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon">图表标题</span>
                <input type='text' class="form-control" v-model="title">
            </div>
        </div>
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon">图例名称</span>
                <input type='text' class="form-control" v-model="legend">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon">x轴名称</span>
                <input type='text' class="form-control" v-model="xName">
            </div>
        </div>
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon">x轴单位</span>
                <input type='text' class="form-control" v-model="xFormatter">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon">y轴名称</span>
                <input type='text' class="form-control" v-model="yName">
            </div>
        </div>
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon">y轴单位</span>
                <input type='text' class="form-control" v-model="yFormatter">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="input-group">
                <span class="input-group-addon">数据</span>
                <input type='file' class="form-control" id="upload-file">
            </div>
        </div>
        <div class="col-md-4">
            <button type="button" class="btn btn-primary" @click="update">确认配置</button>
        </div>
    </div>
</div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
    name: 'input-group',

    data () {
        return {
            title: '',
            legend: '',
            xName: '',
            xFormatter: '',
            yName: '',
            yFormatter: ''
        };
    },

    mounted () {
        this.title = this.$store.state.chart.option.title.text;
        this.legend = this.$store.state.chart.option.legend.data[0];
        this.xName = this.$store.state.chart.option.xAxis.name;
        this.xFormatter = this.$store.state.chart.option.xAxis.axisLabel.formatter.replace('{value}', '');
        this.yName = this.$store.state.chart.option.yAxis.name;
        this.yFormatter = this.$store.state.chart.option.yAxis.axisLabel.formatter.replace('{value}', '');
    },

    // computed: {
    //     ...mapState({
    //         title: state => state.chart.option.title.text,
    //         legend: state => state.chart.option.legend.data[0],
    //         xName: state => state.chart.option.xAxis.name,
    //         xFormatter: state => state.chart.option.xAxis.axisLabel.formatter.replace('{value}', ''),
    //         yName: state => state.chart.option.yAxis.name,
    //         yFormatter: state => state.chart.option.yAxis.axisLabel.formatter.replace('{value}', '')
    //     })
    // },

    methods: {
        update (e) {
            this.$store.commit('updateTitle', this.title);
            let l = [];
            l.push(this.legend);
            this.$store.commit('updateLegend', l);
            this.$store.commit('updateXName', this.xName);
            this.$store.commit('updateXFormatter', this.xFormatter);
            this.$store.commit('updateYName', this.yName);
            this.$store.commit('updateYFormatter', this.yFormatter);

            let file = this.$el.querySelector('#upload-file').files[0];
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                let data = e.target.result.toString().split('\n');
                let series = [];
                for (var i = 0; i < data.length; ++i) {
                    var util = [];
                    util.push(i + 1);
                    util.push(parseInt(data[i]));
                    series.push(util);
                }
                let res = [];
                res.push(series);
                this.$store.commit('updateSeriesData', res);
                // console.log(e.target.result);
            };
        }
        // updateTitle (e) {
        //     this.$store.commit('updateTitle', e.target.value);
        // },
        // updateLegend (e) {
        //     let legend = [];
        //     legend.push(e.target.value);
        //     this.$store.commit('updateLegend', legend);
        // },
        // updateXName (e) {
        //     this.$store.commit('updateXName', e.target.value);
        // },
        // updateXFormatter (e) {
        //     this.$store.commit('updateXFormatter', e.target.value);
        // },
        // updateYName (e) {
        //     this.$store.commit('updateYName', e.target.value);
        // },
        // updateYFormatter (e) {
        //     this.$store.commit('updateYFormatter', e.target.value);
        // },
        // getFile (e) {
        //     let file = e.target.files[0];
        //     let reader = new FileReader();
        //     reader.readAsText(file);
        //     reader.onload = (e) => {
        //         let data = e.target.result.toString().split('\n');
        //         let series = [];
        //         for (var i = 0; i < data.length; ++i) {
        //             var util = [];
        //             util.push(i + 1);
        //             util.push(parseInt(data[i]));
        //             series.push(util);
        //         }
        //         let res = [];
        //         res.push(series);
        //         this.$store.commit('updateSeriesData', res);
        //         // console.log(e.target.result);
        //     };
        // }
    }
};
</script>

<style>
</style>
