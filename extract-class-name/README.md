## Extract Class Name

- First `parameter` is a string
- When the string contains the folling word pattern`Class YEAR MONTH_NAME` (e. g. Class 2023 August)
  - Then return a new string with the year, an `-` as seperator and followed by the month converted to a number e. g. `Class 2022 September > 2023-09`
  - Else return null
- The month name could contain german umlauts or the alternative version. Both are valid. e. g. `Class 2022 März > 2023-03` === `Class 2022 Maerz > 2023-03`

### Extract Class Name Example

```js
console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null
```
