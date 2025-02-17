function MyApp() {
  const [inputValue, setInputValue] = React.useState("");
  const [todoList, setTodoList] = React.useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Angular", completed: false },
    { id: 3, text: "Learn Vue", completed: false },
    { id: 4, text: "Learn Svelte", completed: true },
  ]);
  // 添加代办项
  const handleAdd = () => {
    if (!inputValue.length) {
      alert("Please enter a todo item");
      return;
    }
    // const newTodoList = JSON.parse(JSON.stringify(todoList));
    // const newTodo = {
    //   id: new Date().getTime(),
    //   text: inputValue,
    //   completed: false,
    // };
    // newTodoList.unshift(newTodo);
    // setInputValue("");
    // setTodoList(newTodoList);
    const newTodoList = [
      ...todoList,
      {
        id: new Date().getTime(),
        text: inputValue,
        completed: false,
      },
    ];
    newTodoList.sort(sortTodo);
    setTodoList(newTodoList);
  };
  // 修改代办项目状态
  const handleChange = (index) => {
    // const newTodoList = JSON.parse(JSON.stringify(todoList));
    // const curItem = newTodoList[index];
    // if (!curItem.completed) {
    //   const item = newTodoList.splice(index, 1)[0];
    //   item.completed = !item.completed;
    //   newTodoList.push(item);
    // } else {
    //   curItem.completed = !curItem.completed;
    // }
    // setTodoList(newTodoList);

    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoList[index].id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    newTodoList.sort(sortTodo);
    setTodoList(newTodoList);
  };
  // 删除代办项目
  const handleDel = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    newTodoList.sort(sortTodo);
    setTodoList(newTodoList);
  };
  // 代办项目排序规则
  const sortTodo = (o1, o2) => {
    if (o1.completed !== o2.completed) {
      return o1.completed ? 1 : -1;
    }
    return o1.id - o2.id;
  };

  return (
    <main>
      <h1>React Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Add item into as todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              onChange={() => handleChange(index)}
            />
            <span className={todo.completed ? "deleted" : ""}>{todo.text}</span>
            <button onClick={() => handleDel(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
