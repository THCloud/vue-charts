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

    methods: {
        update (e) {
            this.$store.commit('updateTitle', this.title);
            this.$store.commit('updateLegend', Array.of(this.legend));
            this.$store.commit('updateXName', this.xName);
            this.$store.commit('updateXFormatter', this.xFormatter);
            this.$store.commit('updateYName', this.yName);
            this.$store.commit('updateYFormatter', this.yFormatter);

            let file = this.$el.querySelector('#upload-file').files[0];
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                let data = e.target.result.toString().split('\n');
                let series = data.map((val, idx) => Array.of(idx, val));
                this.$store.commit('updateSeriesData', Array.of(series));
            };
        }
    }
};
</script>

<style>
.row {
    margin-top: 10px;
}
</style>
