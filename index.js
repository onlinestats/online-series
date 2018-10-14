var order = ['covariance', 'std', 'variance', 'mean'] // Order of functions. Last - first

module.exports = function Series () {
  var stats
  var values = {}

  if (arguments.length > 1) {
    // Convert Array-like arguments to real array
    stats = Array.prototype.slice.call(arguments)
    // Sort arguments by level of details
    stats.sort(function (a, b) {
      return order.indexOf(b.name) - order.indexOf(a.name)
    })
  } else if (arguments.length === 1) {
    // Only one argument provided - maybe array of objects?
    if (Array.isArray(arguments[0])) {
      stats = arguments[0]
    } else {
      stats = [arguments[0]]
    }
  } else {
    throw new Error('No function arguments')
  }

  var series = function series () {
    // Check if arguments exist
    if (arguments.length) {
      // Track n updates
      var isCounterUpdated = false
      // Values pushed to series object:
      var args = arguments
      // Add series results to sub-functions arguments
      Array.prototype.push.call(args, values)
      // Iterate over all series functions
      stats.forEach(function (stat) {
        values[stat.name] = stat.apply(null, args)
        if (!isCounterUpdated) {
          values.n = stat.n
          isCounterUpdated = true
        }
      })
    }
    return values
  }

  Object.defineProperty(series, 'values', {
    get: function () {
      return values
    }
  })

  return series
}
