export const validationPhone = value => {
  if (!value) return false

  if (value.match(/^1(3|4|5|6|7|8|9)\d{9}$/)) {
    return true
  }
}

export const validationEmail = value => {
  if (!value) return false

  if (value.match(/\w+[@]{1}\w+[.]\w+/)) {
    return true
  }
}
