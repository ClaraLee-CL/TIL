'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration 

console.log('1');
setTimeout(function() {
  console.log('2')
}, 1000)
// setTimetout(() => console.log('2'),1000)  // short form
// console.log('2');
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print()
}
printImmediately(()=> console.log('hello'));

// Asynchronous callback
function printWithDelay(print, time) {
  setTimeout(print, time)
}
printWithDelay(()=> console.log('Async callback'), 2000);


// 🧨Callback Hell example
class UserStorage {
  loginUser (id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        ( id === "clara" && password === "lee" )||
        ( id === "toronto" && password === "canada")
      ){
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if(user === "clara") {
        onSuccess({name: "clara", role: "admin"});
      } else {
        onError(new Error("not access"))
      }
    }, 1000)
  }
}

const userStorage = new UserStorage();
// console.log(userStorage);
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`
        )
      }, error => {
        console.log(error);
      }
    )
  }, error => {
    console.log(error)
  }
)


