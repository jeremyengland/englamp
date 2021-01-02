const findUniqueTitle = (data, title) => {
  let uniqueTitle;
  if (data[title]) {
    uniqueTitle = sequelGenerator(data, title);
    return uniqueTitle;
  }
  return title;
}

const sequelGenerator = (data, title, rp) => {
  // start by checking for the first repeat
  let repeatCount = rp || 2;
  if (data[title + repeatCount]) {
    // recurse until a unique name is generated
    repeatCount++;
    let result = sequelGenerator(data, title, repeatCount);
    return result;
  }
}

const customParse = (array) => {
  let data = {};
  array.forEach((object) => {
    data[findUniqueTitle(data, object.title)] = object;
  })
  return data;
}

module.exports = {
  customParse,
  findUniqueTitle,
  sequelGenerator
}