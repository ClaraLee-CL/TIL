'use strict';

class UserStorage {
  loginUser (id, password) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        ( id === "clara" && password === "lee" )||
        ( id === "toronto" && password === "canada")
      ){
        resolve(id);
      } else {
        reject(new Error('not found'));
      }
      }, 2000)
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(user === "clara") {
          resolve({name: "clara", role: "admin"});
        } else {
          reject(new Error("not access"))
        }
      }, 1000)
    })
  };
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role.`))
.catch(console.log)