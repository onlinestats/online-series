var test = require('tape')
var Mean = require('online-mean')
var Variance = require('online-variance')
var Group = require('online-group')
var Series = require('./')

var values = [1, 3, 5, NaN, 'Bob', '6', 8]

test('Simple test', (_) => {
  var series = Series(Mean(), Variance())
  values.forEach(v => { series(v) })
  console.log(series.values)
  _.equal(series.values.mean, 4.6)
  _.equal(series.values.n, 5)
  _.true(series.values.variance - 5.84 < 0.0001)
  _.end()
})
