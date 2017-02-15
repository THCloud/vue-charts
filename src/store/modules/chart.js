const mergeOption = (option, defaultOption) => {
    let keys = [...new Set([...Object.keys(option), ...Object.keys(defaultOption)])]
    return keys.reduce((output, key) =>
        Object.assign(output, {
            [key]: Array.isArray(option[key])
                ? option[key].map(i =>
                    Object.assign(JSON.parse(JSON.stringify(i)), defaultOption[key]))
                : Object.assign({}, option[key], defaultOption[key])
        }), {})
}

const defaultOptions = {
    largeScalaPoint: {
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
            top: 'bottom'
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
        xAxis: {
            scale: true
        },
        yAxis: {
            scale: true
        },
        series: {
            type: 'scatter',
            large: true,
            symbolSize: 2
        }
    },
    line: {
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            top: 'bottom'
        },
        calculable: true,
        xAxis: {
            scale: true
        },
        yAxis: {
            scale: true
        },
        series: {
            type: 'line'
        }
    }
}

const state = {
    option: {
        title: {
            text: 'large scala test'
        },
        legend: {
            data: ['test']
        },
        xAxis: {
            name: '',
            axisLabel: {
                formatter: null
            }
        },
        yAxis: {
            name: '',
            axisLabel: {
                formatter: null
            }
        },
        series: [
            {
                name: 'test',
                data: [[0, 1], [1, 1], [1, 2], [2, 3]]
            }
        ]
    }
}

const getters = {
    getLargeScalaPointsOptions: (state) =>
        mergeOption(state.option, defaultOptions.largeScalaPoint),
    getLineOptions: (state) =>
        mergeOption(state.option, defaultOptions.line)
}

const actions = {}

// there is something wrong here.
// if legend.length != series.length, it will cause error
// may do exception latter.
const mutations = {
    updateTitle: (state, newTitle) => {
        state.option.title.text = newTitle
    },
    updateLegend: (state, newLegend) => {
        state.option.legend.data = newLegend
    },
    updateXName: (state, newName) => {
        state.option.xAxis.name = newName
    },
    updateXFormatter: (state, newFormatter) => {
        state.option.xAxis.axisLabel.formatter = '{value}' + newFormatter
    },
    updateYName: (state, newName) => {
        state.option.yAxis.name = newName
    },
    updateYFormatter: (state, newFormatter) => {
        state.option.yAxis.axisLabel.formatter = '{value}' + newFormatter
    },
    updateSeriesData: (state, newData) => {
        let series = []
        Object.keys(state.option.legend.data)
                .forEach(idx => {
                    series.push(Object.assign({}, state.option.series[idx], {'data': newData[idx]}))
                })
        state.option.series = series
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
