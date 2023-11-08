function filterApiData(apiData, mandatoryKeys) {
  let result = [];

  for (let i = 0; i < apiData.length; i++) {
    let object = apiData[i];
    let passFilter = true;

    for (let j = 0; j < mandatoryKeys.length; j++) {
      let key = mandatoryKeys[j];
      if (!(key in object)) {
        passFilter = false;
        break;
      }
    }

    if (passFilter) {
      result.push(object);
    }
  }

  return result;
}
