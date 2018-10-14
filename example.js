const Mean = require('online-mean')
const Variance = require('online-variance')
const Covariance = require('online-covariance')
const Group = require('online-group')
const Series = require('./')

const s = Series(Group(Mean(), Mean()), Group(Variance(), Variance()), Covariance())

;[[10, 2], [3, 4], [5, 6]].forEach(v => s(v[0], v[1]))

console.log(s.values)
