import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(ID, title, completed);
});

const logTodo = (ID: number, title: string, completed: boolean) => {
  console.log(
    "\n    The Todo with ID : " +
      ID +
      "\n    Has a title of : " +
      title +
      "\n    is it finnished? " +
      completed +
      "\n    "
  );
};
