const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  id: 1,
  about: "Тут я рассказываю о себе....",
  avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};

const users = {
  0: {name: "Валерия", lastname: "Юкина" },
  1: {name: "Ипполит", lastname: "Яблочков" },
  2: {name: "Вдадислав", lastname: "Юкин" },
  3: {name: "Евгения", lastname: "Садовская" },
  4: {name: "Серж", lastname: "Тетерин" },
  5: {name: "Константин", lastname: "Ежов" },
}

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}