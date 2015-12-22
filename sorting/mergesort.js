// 1. divide array up into a bunch of arrays with length 1
// 2

function mergesort(array) {
  // divide unsorted list into sublists
  array = array.map(function(value) {
    return [value];
  });

  // combine sublists into merged list
  combine(array)
}

// function that combines an array of arrays by merging
function combine(array) {
  // base condition
  if (array[0].constructor != Array) return array;

  var result = [];

}

// [18, 39] [15, 23] [ 3, 55]

function merge(a, b) {
  var result = [];
  while(a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) { result.push(a[0]); a.shift(); }
    else { result.push(b[0]); b.shift(); }
  }
  var remaining = (a.length > 0) ? a : b;
  return result.concat(remaining);
}

console.log(merge([18, 22, 39], [15, 23, 24]));

// [18, 22, 39] [15, 23, 24]

// console.log(mergesort([18, 39, 39, 41, 23, 15, 3, 9103, 24, 3, 52, 55, 55, 109, 204, 148, 5, 833]))
