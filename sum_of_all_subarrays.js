exports.sumOfAllSubarrays = function(arr) {
  var sum = 0;
  var len = arr.length;
  for (var i = 0; i < len; i ++) {
    sum += arr[i] * (len - i) * (i + 1);
  }
  return sum;
}
