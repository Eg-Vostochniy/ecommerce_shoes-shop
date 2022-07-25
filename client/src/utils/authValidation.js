export const valid = {
  register: ({ username, email, password }) => {
    let errs = []

    if (!username) errs = [...errs, 'Input user name']

    if (!email) errs = [...errs, 'Input your email']
    else if (!validateEmail(email)) errs = [...errs, 'Invalid email']

    if (!password) errs = [...errs, 'Create a password']

    return { errs, errsLength: errs.length }
  },
  login: ({ email, password }) => {
    let errs = []

    if (!email) errs = [...errs, 'Input your email']
    else if (!validateEmail(email)) errs = [...errs, 'Invalid email']

    if (!password) errs = [...errs, 'Input your password']

    return { errs, errsLength: errs.length }
  },
}

function validateEmail(email) {
  //eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
