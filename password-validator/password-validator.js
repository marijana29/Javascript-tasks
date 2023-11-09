function validatePassword(password) {
  let reasons = [];
  let specialCharacters = ["!", "?", "#"];
  let seenNumbers = new Set(); // Initializing a set to keep track of seen numbers

  if (password.length < 10) {
    reasons.push("min length");
  }

  let hasNumber = false;
  let hasLetter = false;
  let hasSpecialChar = false;
  let normalizedInput = password.toLowerCase();

  for (let char of password) {
    if (/[0-9]/.test(char)) {
      let number = parseInt(char, 10);
      if (seenNumbers.has(number)) {
        reasons.push("duplicate number");
        break;
      } else {
        seenNumbers.add(number);
      }

      hasNumber = true;
    } else if (/[a-zA-Z]/.test(char)) {
      hasLetter = true;
    } else if (specialCharacters.includes(char)) {
      hasSpecialChar = true;
    }
  }

  if (!hasNumber) {
    reasons.push("no number");
  }

  if (!hasLetter) {
    reasons.push("no character");
  }

  if (!hasSpecialChar) {
    reasons.push("no special character");
  }

  for (let i = 0; i < normalizedInput.length - 1; i++) {
    if (
      /[a-z]/.test(normalizedInput[i]) &&
      /[a-z]/.test(normalizedInput[i + 1]) &&
      normalizedInput.charCodeAt(i) === normalizedInput.charCodeAt(i + 1) - 1
    ) {
      reasons.push("consecutive letter");
    }
  }

  for (let i = 0; i < normalizedInput.length - 1; i++) {
    if (
      /[0-9]/.test(normalizedInput[i]) &&
      /[0-9]/.test(normalizedInput[i + 1]) &&
      normalizedInput.charCodeAt(i) === normalizedInput.charCodeAt(i + 1) - 1
    ) {
      reasons.push("consecutive number");
    }
  }

  for (let i = 0; i < password.length - 1; i++) {
    if (
      specialCharacters.includes(password[i]) &&
      specialCharacters.includes(password[i + 1]) &&
      password[i] === password[i + 1]
    ) {
      reasons.push("duplicate special character");
    }
  }

  return {
    valid: reasons.length === 0,
    reasons: reasons,
  };
}
