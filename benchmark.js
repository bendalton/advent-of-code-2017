/**
 * Console Logs the average execution time of `fn` across `times` executions
 * @param {Function} fn function to test
 * @param {Number} [times=1000] number of times to run the function
 */
function benchmark(fn, times) {
  times = times || 1000
  var total = 0;
  for (let i=0;i<times;i++) {
    let start = process.hrtime()
    fn();
    let end =  process.hrtime()
    total += ((end[0] * 1000000000) + end[1]) - ((start[0] * 1000000000) + start[1])
  }
  console.log("avg: "+Math.round(total/times/1000)/1000 + " ms");
}

module.exports = benchmark;