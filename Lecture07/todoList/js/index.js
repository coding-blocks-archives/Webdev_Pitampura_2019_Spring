$(() => {

  todos = []


  printTodos = function (firstReload = false) {

    if(firstReload){
      todos = JSON.parse(localStorage.getItem("todos"))
      todos = todos == null ? [] : todos
    }

    localStorage.setItem("todos", JSON.stringify(todos))

    let list = $('#todolist')

    list.empty();

    console.log(todos)
    for(let i in todos) {
      let todotask = todos[i]
      console.log(i)

      list.append(
        $('<li>').attr('class', 'list-group-item').append(
          $('<div>').attr('class', todotask.done ? "row done" : "row").append(
            $('<span>').attr('class', 'col').text(todotask.todo)
          ).append(
            $('<button>').attr('class', 'col-2').text(todotask.done ? "\u2716" : "\u2714").click(
              (ev) => {
                console.log(i)
                console.log(todotask)
                todotask.done = !todotask.done
                printTodos()

              }
            )
          ).append(
            $('<button>').attr('class', 'col-2').append(`<i class="fas fa-trash"></i>`).click(() => {

              console.log(i)
              todos.splice(i,1)
              printTodos()

            })
          )
        )
      )
    }
  }

  $('#add-todos').click(() => {
    let todo = $('#todo-input').val()
    let todoTask = {
      "todo" : todo,
      "done" : false
    }
    todos.push(todoTask)
    printTodos()
    $('#todo-input').val("")


  })

  printTodos(true)


  // todos.sort((a,b) => {
  //   return a.done - b.done
  // })

})