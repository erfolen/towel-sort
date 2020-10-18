
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let result = [];
  matrix.forEach (
    function (val,ind,arr) {
      if (ind % 2 != 0) {
        val.reverse(); 
        result = result.concat(val); 
      } else {
        result = result.concat(val);
      }
    }
  )
  return result;
}
