export function validate(regex, field) {
    if (regex.test(field.value)) {
        field.classList.remove("error")
    } else {
        field.classList.add("error")
    }
}
