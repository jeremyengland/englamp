// sorts sections by order for rendering
const sortLines = (lineArray) => {
  let sortedArray = [];
  lineArray.forEach((section) => {
    console.log(section);
    sortedArray[Number(section[0].section) - 1] = section;
    console.log('sorted array: ', sortedArray);
  })
  return sortedArray;
}

module.exports = sortLines;
