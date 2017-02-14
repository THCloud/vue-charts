export const mergeObject = (srcOption, des) => {
    let src = Object.assign({}, srcOption)
    console.log('print this !!!!!')
    console.log(JSON.stringify(src, null, 4))
    console.log('finished !!!!')
    for (var prop in des) {
        if (Array.isArray(des[prop])) {
            if (src[prop] === undefined) {
                src[prop] = des[prop]
            } else {
                for (var i in des) {
                    Object.assign(src[i], des[i])
                }
            }
        } else {
            for (var obj in des[prop]) {
                if (src[prop] === undefined) {
                    src[prop] = {}
                }
                src[prop][obj] = des[prop][obj]
            }
        }
    }
    return src
}
