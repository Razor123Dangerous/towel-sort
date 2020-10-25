
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) return [];
  else{
    let sorted_array = [];
 
    for(let i = 0, row_count = 1; i < matrix.length; i++, row_count++){
      if(row_count % 2 === 0){
        for(let j = matrix[i].length - 1; j >= 0; j--){
          sorted_array.push(matrix[i][j]); 
        }
      }
      else{
        for(let j = 0; j < matrix[i].length; j++){
          sorted_array.push(matrix[i][j]);
        }
      }
    }
    return sorted_array;
  }
}
