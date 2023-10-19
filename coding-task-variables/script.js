let userName = "Brad";
userName = "Jenna";

function getUserNameLength() {
  return userName.length;
}

console.log(getUserNameLength(userName) > 4);

function isString(data) {
  return typeof data === "string";
}

console.log(isString("Hello"));
console.log(isString(3));

console.log(isString(undefined));

console.log(isString(""));

console.log(isString("John" + "Doe"));
