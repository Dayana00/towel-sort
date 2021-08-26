module.exports = function towelSort (matrix) {
  let result=[];

  if ( matrix == null || matrix.length === 0 ){
    return [];
  } 
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        result.push(matrix[i][j]);
      } else {
        result.push(matrix[i][matrix[i].length - j - 1]);
      }
    }
  }

  return result;
}
