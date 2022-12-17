const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  id: 1,
  about: "Тут я рассказываю о себе....",
  avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};

const users = {
  0: {name: "Валерия", lastname: "Юкина", id: 4 },
  1: {name: "Ипполит", lastname: "Яблочков", id: 9 },
  2: {name: "Вдадислав", lastname: "Юкин", id: 7 },
  3: {name: "Евгения", lastname: "Садовская", id: 2 },
  4: {name: "Серж", lastname: "Тетерин", id: 22 },
  5: {name: "Константин", lastname: "Ежов", id: 14 },
}

export function getUser(userId) {
  for(let i = 0; i < Object.keys(user).length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export function getUsers() {
  return users;
}