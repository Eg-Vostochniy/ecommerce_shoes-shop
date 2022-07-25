export const valid = {
  register: ({ username, email, password }) => {
    let errs = []

    if (!username) errs = [...errs, 'Введите имя пользователя']
    else if (username.length > 15)
      errs = [...errs, 'Имя пользователя больше 15 символов']

    if (!fullname) errs = [...errs, 'Введите полное имя']
    else if (fullname.length > 20)
      errs = [...errs, 'Полное имя больше 20 символов']

    if (!email) errs = [...errs, 'Введите электронную почту']
    else if (!validateEmail(email)) errs = [...errs, 'Невалидная эл.почта']

    if (password.length < 6) errs = [...errs, 'Пароль меньше 6 символов']
    else if (password !== cf_password) errs = [...errs, 'Пароли не совпадают']

    return { errs, errsLength: errs.length }
  },
  login: ({ email, password }) => {
    let errs = []

    if (!email) errs = [...errs, 'Введите электронную почту']
    else if (!validateEmail(email)) errs = [...errs, 'Невалидная эл.почта']

    if (password.length < 6) errs = [...errs, 'Пароль меньше 6 символов']

    return { errs, errsLength: errs.length }
  },
}

function validateEmail(email) {
  //eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
