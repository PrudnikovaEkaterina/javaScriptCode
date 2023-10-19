const list = document.querySelector('#list');
const filter = document.querySelector('#filter');
let users = []

// Асинхронные функции возвращают всегда только PROMISE
// Чтобы что-то вернуть из Асин функции нужно вызвать ее в другой Асин функции и не забыть перед ней добавить await
// ПРИМЕР
//    async function start (){
//    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//    return  resp.json();}
// Пишем вторую функцию в которой вызываем первую
//    async function go(){
//    const json = await start()
//    console.log(json) }
// Вызываем вторую функцию  go ()


async function start (){
    try{
      list.innerHTML = 'Loading ...'
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      const jsonFromResp = await resp.json();
      users = jsonFromResp;
      setTimeout(()=>{  //добавляем искусственную задержку в 3 сек перед вызовом функции render
        render(jsonFromResp)
      }, 3000);
    }
    catch(err){
        list.style.color = 'red'
        list.innerHTML = err.message;
    }
}

start()


function render (userArray){
    const userNameHTMLArray = [];
    for (const user of userArray) {
        userNameHTMLArray.push( `<li class="list-group-item">${user.name}</li>`);
    }
    list.innerHTML = userNameHTMLArray.join('');
}

// обрабатывает (слушает) действия пользователя. В данном случае ввод в поле  document.querySelector('#filter');
// event.target.value - обрабатывает каждый ввод от пользователя

filter.addEventListener('input', (event)=>{
  const value = event.target.value.toLowerCase()
  const filteredUsersArray = []
  for (let user of users) {
    console.log(users)
    if(user.name.toLowerCase().includes(value)){
    filteredUsersArray.push(user)}
  }
  console.log(filteredUsersArray)
  render(filteredUsersArray)
}
 );



