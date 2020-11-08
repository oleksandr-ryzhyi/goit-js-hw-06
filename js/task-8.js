// Задача 6-8
// Массив объектов пользователей
// filter, includes и map
// Получи массив имен всех пользователей у которых есть друг с заданным именем.

// Используй деструктурирующее присваивание для параметра функции {friends}и ({name}) без пробелов и переносов на новую строку

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Write code under this line
const objFriends = { friends: "" };
function getFriends({ friends }) {
  return friends;
}
const objName = { name: "" };
function getName({ name }) {
  return name;
}
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user["friends"].includes(friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(users, "Briana Decker"));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, "Goldie Gentry"));
// [ 'Elma Head', 'Sheree Anthony' ]
