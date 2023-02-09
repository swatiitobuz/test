let inputValue = document.querySelector(".input");
console.log(inputValue.value);

console.log("Startss");
const button = document.querySelector("#add");
button.addEventListener("click", runfunction);

function runfunction() {
  if ((inputValue.value.trim().length == 0)) {
    console.log("If is called");
    return alert("no task");
  }
  add_Item(inputValue.value);
  showitems();
}

inputValue.addEventListener("keyup", (e) => {
  e.keyCode === 13 ? runfunction() : null;
});

const task = document.querySelector(".todotask");

function getId() {
  return Date.now();
}
function isChecked() {
  if (document.querySelector("#myCheck").checked == true) {
    return true;
  } else {
    return false;
  }
}

let ob = {};
let todos = [];
ob = {
  id: getId(),
  checked: false,
  input: inputValue.value,
};

function add_Item(text) {
  todos.push({
    id: getId(),
    checked: false,
    input: text,
  });
  console.log(todos);
}

function showitems() {
  if ((inputValue.value.trim().length = 0)) {
    return console.log("Stops Here!");
  } 
  task.innerHTML=""
inputValue.value=""
  todos.forEach((item)=>{
    const newtask = document.createElement("li");
    const checkbutton = document.createElement("form-check-input");
    checkbutton.className = "check";
       newtask.setAttribute('data-id',item.id)
  checkbutton.setAttribute('id',`${item.id}`)
    const deletebutton = document.createElement("button");
    deletebutton.className = "delete";
    checkbutton.innerHTML =
    `<input class="form-check-input ckeckbox" id="myCheck" type="checkbox" value="" id="flexCheckDefault">`;
    deletebutton.innerHTML = '<i class="fa fa-trash"></i>';
    newtask.className = "newtask";
    console.log(inputValue.value);
      newtask.textContent = item.input;
      task.appendChild(newtask);
      newtask.appendChild(checkbutton);
      newtask.appendChild(deletebutton);
    checkbutton.addEventListener("click", function () {
      const parent = this.parentNode;
      let index = todos.findIndex(()=>Number(this.id))
      todos[index].checked=true
      document.getElementById("myCheck").disabled = true;
      parent.classList.add('completed')
      
    });
     deletebutton.addEventListener("click", function () {
      const parent = this.parentNode;
      parent.remove();
      let index = todos.findIndex(()=>Number(this.id))
      todos.splice(index,1)
    });
  })

  document.getElementById('completedButton').addEventListener('click',function completedTask() {
    let completedTasks=document.querySelectorAll('.completed')
    completedTasks.forEach((item)=>{
      console.log(item);
      item.classList.remove('hide')
    })
    let remaining = document.querySelectorAll('li:not(.completed)')
    remaining.forEach((item)=>{
      console.log(item);
      item.classList.add('hide')
    })
  })


  
  document.getElementById("activeButton").addEventListener("click",function activeTask() {
    let activeTasks = document.querySelectorAll('.completed')
    activeTasks.forEach((item)=>{
      item.classList.add('hide')
    })
    let remaining = document.querySelectorAll('li:not(.completed)')
    remaining.forEach((item)=>{
      item.classList.remove('hide')
    })

  });
  document.getElementById("allTask").addEventListener('click',function allTask() {
    let activeTasks = document.querySelectorAll('.completed')
    activeTasks.forEach((item)=>{
      item.classList.remove('hide')
    })
    let remaining = document.querySelectorAll('li:not(.completed)')
    remaining.forEach((item)=>{
      item.classList.remove('hide')
    })

  })

  document.getElementById("clearCompleted").addEventListener('click',function allCompleteClear(){
    let allCompleteClear = document.querySelectorAll('.completed')
    allCompleteClear.forEach((item)=>{
      
    })
    let remaining = document.querySelectorAll('li:not(.completed)')
    remaining.forEach((item)=>{
      item.classList.remove('hide')
    })
  })



document.getElementById('clearAllTask').addEventListener('click',function clearAllTask() {
  document.querySelector(".todotask").innerHTML = "";
})

}



