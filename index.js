// код для кнопки и поля вода
const div_contayner = document.querySelector(".class_conteyner");
const form = document.querySelector(".class_form_conteyner");
const input = document.createElement("input");
const inputButton = document.createElement("button");

// задаем классы
form.className = "form_class";
input.className = "input_value";
inputButton.className = "submit_button";

// Длбавляю поля вода и кнопку в form
form.append(input, inputButton);

// пишу код для кнопки отправки
inputButton.addEventListener("click", (e) => {
  if (input.value === "") return;
  e.preventDefault();
  postList(input.value);

  input.value = "";
});

// пишу код для добавление информации POST

async function postList(value) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos ", {
    method: "POST",
    body: JSON.stringify({ title: value, completed: false }),
    headers: {
      "Content-type": "application/json"
    },
  });
  const data = await res.json();
  console.log(data);

  } catch (error) {
    console.log(error)
  }
  
}
// postList();

// delete код для удаление тодо листа
async function deleteList(id) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/id', {
      method: 'DELETE',
        })
  } catch (error) {
    console.log(ero)
  }

}
deleteList()

// patch Изменение 
async function patchList() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/id', {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({completed: true})
    
     })
    
  } catch (error) {
    console.log(error)
  }



}
// patch изменение 2 
async function patchList2() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/id', {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({completed: false})
    
     })
    
  } catch (error) {
    console.log(error)
  }



}




const todoList = document.createElement("div");
div_contayner.append(todoList);

async function listTodo() {
  todoList.innerHTML = "";

  async function getList() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      // Добавляю теги для todo листа кнопка улаение и изменении
      const title_text = document.createElement("p");
      const patch_button = document.createElement("input");
      const title_list = document.createElement("div");
      const delete_button = document.createElement("button");
      patch_button.type = "checkbox";
      delete_button.textContent = "X";
      delete_button.type = "button";

      // задаем им классы
      title_list.className = "titel_list_class";
      patch_button.className = "radio_button_class";
      delete_button.className = "delete_button_class";

      // Вставляю кнопки родительские теги
      todoList.append(title_list);
      title_list.append(patch_button, title_text, delete_button);
      title_text.textContent = data[i].title;
      delete_button.addEventListener("click", (e) => {
        title_list.remove()
        title_text.remove()
        deleteList(i)
      });
// функции для работы с кнопкой изменение 

patch_button.addEventListener('click',(e) => {
  if(patch_button.checked === true) {
    patchList()
    title_list.className = 'titel_list_patch'
  }
  if(patch_button.checked === false) {
    patchList2()
    title_list.className = "titel_list_class"

  }
    
  
})


    }
   
  }
  getList();
}
listTodo();


