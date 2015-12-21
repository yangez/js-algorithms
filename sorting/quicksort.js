function quicksort(array) {

  // base condition
  if (array.length === 0) return [];

  // pick pivot from center, remove from original array
  var middle_index = Math.floor(array.length/2),
      pivot = array[middle_index];
  array.splice(middle_index, 1);

  // assign elements to left or right
  var larger = [], smaller = [];
  array.forEach(function(element) {
    if (element <= pivot) smaller.push(element);
    else if (element > pivot) larger.push(element);
  });

  // quicksort sub-arrays and form the whole array
  var final = quicksort(smaller).concat([pivot]).concat(quicksort(larger));

  return final;

}

console.log(quicksort([18, 39, 39, 41, 23, 15, 3, 9103, 24, 3, 52, 55, 55, 109, 204, 148, 5, 833]))
