/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
  if (typeof rowIndex !== "number" || rowIndex < 0) {
    return;
  }

  const row = [1];
  for (let i = 1; i < rowIndex + 1; i++) {
    const length = row.length;
    row[length] = 1;
    for (let j = length - 1; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
    row[0] = 1;
  }
  return row;
};

export default getRow;
