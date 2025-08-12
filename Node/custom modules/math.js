// 1. named exports

exports.addFunk = (a,b)=>{
    return a + b
}

exports.subFunk = (a, b)=>{
    return a - b
}

exports.divFunk = (a, b)=>{
    return a / b
}

exports.mulFunk = (a, b)=>{
    return a * b
}




//default export
module.exports = function(params) {
    console.log(" I am : ", params)
}