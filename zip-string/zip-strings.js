function zipStrings(strA, strB) {
  let mergedString = "";
  let maxLength;

  if (strA.length >= strB.length) {
    maxLength = strA.length;
  } else {
    maxLength = strB.length;
  }
  // let mergedString = "";
  // let maxLength = Math.max(strA.length, strB.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < strA.length) {
      mergedString += strA[i];
    }
    if (i < strB.length) {
      mergedString += strB[i];
    }
  }

  return mergedString;
}
