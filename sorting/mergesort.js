console.log(mergesort([18, 39, 39, 41, 23, 15, 3, 9103, 24, 3, 52, 55, 55, 109, 204, 148, 5, 833]))

function mergesort(array) {
  // divide unsorted list into sublists
  lists = array.map(function(value) { return [value]; });

  // combine sublists into merged list
  return combine(lists);
}

// recursively combines an array of arrays by merging
function combine(array) {
  if (array.length === 1) return array[0];

  var result = [];
  while(array.length > 0) {
    if (array[1]) {
      result.push( merge(array[0], array[1]) )
      array.shift();
    }
    else result.push(array[0]);
    array.shift();
  }

  return combine(result);
}

// merge algorithm
function merge(a, b) {
  var result = [];
  while(a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) { result.push(a[0]); a.shift(); }
    else { result.push(b[0]); b.shift(); }
  }
  var remaining = (a.length > 0) ? a : b;
  return result.concat(remaining);
}
