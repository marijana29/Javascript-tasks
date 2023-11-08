function extractClassName(sessionTitle) {
  let newArr = [];
  let month = {
    Januar: 1,
    Februar: 2,
    März: 3,
    Maerz: 3,
    April: 4,
    Mai: 5,
    Juni: 6,
    Juli: 7,
    August: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Dezember: 12,
  };

  if (sessionTitle.includes("Live-Session Class")) {
    newArr = sessionTitle.split(" ");
  } else {
    return null;
  }

  if (newArr[3] in month && newArr[2].length < 5) {
    return newArr[2] + "-0" + month[newArr[3]];
  } else {
    return null;
  }
}
