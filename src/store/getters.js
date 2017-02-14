export const getChartOptions = (state) => {
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }

    let tmp = state.chart.polarOptions
    tmp.series[0].data = data
    return tmp
}
