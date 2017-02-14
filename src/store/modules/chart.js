const state = {
    polarOptions: {
        title: {
            text: '极坐标双数值轴'
        },
        legend: {
            data: ['line']
        },
        polar: {
            center: ['50%', '54%']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        angleAxis: {
            type: 'value',
            startAngle: 0
        },
        radiusAxis: {
            min: 0
        },
        series: [
            {
                coordinateSystem: 'polar',
                name: 'line',
                type: 'line',
                showSymbol: false
            }
        ],
        animationDuration: 2000
    },
    largeScalaPointOptions: {
        title: {},
        tooltip: {
            trigger: 'axis',
            showDelay: 0,
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            },
            zlevel: 1
        },
        legend: {
            data: []
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataZoom: {show: true},
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
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
        series: [{
            type: 'scatter',
            large: true,
            symbolSize: 4
        }]
    }
}

const getters = {
    getPolarOptions: state => {
        let data = []

        for (let i = 0; i <= 360; i++) {
            let t = i / 180 * Math.PI
            let r = Math.sin(2 * t) * Math.cos(2 * t)
            data.push([r, i])
        }

        let tmp = state.polarOptions
        tmp.series[0].data = data
        return tmp
    },
    getLargeScalaPointsOptions: (state) => state.largeScalaPointOptions
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}
