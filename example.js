const Mean = require('../online-mean/')
// const Variance = require('../online-variance/')
// const Covariance = require('../online-covariance/')
const Group = require('../online-group/')
const Series = require('./index')

// const s = Series(Group(Mean(), Mean()), Covariance())
const s = Series(Group(Mean(), Mean()))
/*
const ret = {
  n: 10,
  covariance: 1.4,
  group: [4, 6]
}
*/
;[[1, 2], [3, [6, 6]], [5, 6]].forEach(v => s(v[0], v[1]))

console.log(s.values)
// console.log('Variance: ', s.values.variance)
