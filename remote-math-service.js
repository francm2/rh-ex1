/*
 * MF 030818 - one possible solution for Javascript for remoteMathService exercise 1.
 * This works, but try the other method you thought of tonight. May need to fix tests
 * as a result of any change here. Also may need to adjust tests for timeouts.
 */
function remoteMathService(cb) {
  var one, two;

  setTimeout(
    callOneService (function(err, num) {
      one = num;
    }), 1000);

  setTimeout(
    callTwoService (function(err, num) {
      two = num;
    }), 1500);

  return cb(undefined, one + two);
}

function callOneService(cb) {
  return cb(undefined, 1);
}

function callTwoService(cb) {
  return cb(undefined, 2);
}

remoteMathService(function(err, answer) {
  if (err) console.log("error", err);
  if (answer !== 3) {
    console.log("wrong answer", answer);
  } else {
    console.log("correct");
  }
});

module.exports = {
  remoteMathService: remoteMathService,
  callOneService: callOneService,
  callTwoService: callTwoService
};