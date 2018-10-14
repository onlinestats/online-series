# online-series
Stack multiple stats one by one in Series. Get all results in an object.
Instead of dealing with each stat separately, you can create a Series object, then call it once for each data observation.
Another benefit is that all stats have a common result object. So it can help optimize calculation in the future.

Instead of:
```javascript
const Mean = require('online-mean')
const Variance = require('online-variance')

const mean = Mean()
const variance = Variance()

;[1,2,3].forEach(v => {
  mean(v)
  variance(v)
})

results = {
  mean: mean.value,
  variance: variance.value
}
```

You can use Series:
```javascript
const Mean = require('online-mean')
const Variance = require('online-variance')
const Series = require('online-series')

const s = Series(Mean(), Variance())

;[1,2,3].forEach(v => {
  s(v)
})

result = s.values
```

To create a `Series` object, call Series() with initialized Stats objects (for example `Mean()`)
Then use it as you use mean, variance, min, max etc
The only difference is its output. Insted if a scalar value it returns an object with corresponding keys: mean, median, min, max etc...
Available getter is `***.values`.

You can add [Groups](https://github.com/onlinestats/online-group) inside Series:
```javascript
const s = Series(Group(Mean(), Mean()), Group(Variance(), Variance()))
```
