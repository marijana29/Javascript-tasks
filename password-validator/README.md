# Password Validator Kata

Complete the function `validatePassword` in the given JavaScript file.

The function will validate a password to match the following requirements:

- minimum length of 10
- must contain at least one numbers, one letters and one special characters (`!` or `?` or `#`)
- no duplicate numbers, characters or special characters
- no consecutive numbers or characters (i.e. "ab" or "12")
  - starting from 1 to 9
  - starting from a to z

## Return Value

The function will return a object with the following properties

- `valid` (boolean) indicating if the password is valid
- `reasons` (string array) indicating what requirements the password did not match when it is not valid

```js
{
  valid: true/false,
  reasons: [] / ["reason1", "reason2"]
}
```

## Error Messages for reasons array

- "no character"
- "no number"
- "no special character"
- "duplicate character"
- "duplicate number"
- "duplicate special character"
- "consecutive character"
- "consecutive number"
- "min length"

## Unit Tests

There is only one unit test given - write unit tests for each possible error message (not the combination).

Hint: Inspect the given unit test of the kata or all other unit tests of the other katas for help.

## Example Code

```js
const result = validatePassword("?a1b2c3d4!");
console.log(result);
/*
{  
    valid: true, 
    reasons: []
}
*/
```

```js
const result = validatePassword("!a1b2c3d4!");
console.log(result);
/*
{  
    valid: true, 
    reasons: ["duplicate special character"]
}
*/
```

```js
const result = validatePassword("?ab18c3d4!");
console.log(result);
/*
{  
    valid: false, 
    reasons: ["consecutive character"]
}
*/
```

```js
const result = validatePassword("?a12c3d4!9");
console.log(result);
/*
{  
    valid: false, 
    reasons: ["consecutive number"]
}
*/
```

```js
const result = validatePassword("?a2b2c3d4!");
console.log(result);
/*
{  
    valid: false, 
    reasons: ["duplicate number"]
}
*/
```

```js
const result = validatePassword("");
console.log(result);
/*
{  
    valid: false, 
    reasons: ["min length", "no number", "no character", "no special character"]
}
*/
```
