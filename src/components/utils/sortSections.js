// sorts sections by order for rendering
const sortSections = (secArray) => {
  let sortedArray = []
  secArray.forEach((section) => {
    sortedArray[section.sectionorder - 1] = section
  })
  return sortedArray;
}

module.exports = {
  sortSections
}