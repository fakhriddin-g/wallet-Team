export function regexPattern(regex, field) {
  if (regex.test(field.value)) {
    field.style.border = '1px solid green'
  } else {
    field.style.border = '1px solid red'
  }
}