var numbers = [8, 9, 10, 11, 12];
     
      function arrayMax(arr) {
        var len = arr.length,
          max = -Infinity;
        while (len--) {
          if (arr[len] > max) {
            max = arr[len];
          }
        }
        return max;
      }
      maximum = arrayMax(numbers);
      function insert(num) {
        if (num > maximum) {
          numbers.push(num);
          console.log(numbers)
        } else 
        {
          console.log ("number should be greater than any number in list");
        }
      }
