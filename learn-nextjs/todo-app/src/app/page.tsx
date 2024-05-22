'use client'
import React, { useState } from "react";
import Input from "@/Components/Input";

type todo = {
  id: number,
  task: string,
  status: boolean
}




export default function Home() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([]);
  const newTodo = { id: todos.length + 1, task: task, status: false, }
  
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }
  
  const onButtonClickAddTodo = (event: React.MouseEvent<HTMLButtonElement | HTMLElement>) => {
    const newTodos = [...todos, newTodo,];
    {newTodo.task === "" ? alert( "Please enter a task") : setTodos(newTodos);}
    setTask("")
  }
  const handleRemoveTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // console.log(newTodo.id)

  return (
    <main>
      <div>
        <div className="flex flex-col mt-32 items-center">

          <div className="flex border-4 flex-wrap rounded-3xl border-neutral-900 w-1/3 justify-around h-72 items-center">
            <h1 className="text-neutral-500 font-bold text-3xl">Todo App</h1>
            <p className="text-black font-bold text-6xl bg-orange-600 text-center rounded-full px-14 p-12 self-center">{todos.length}</p>
          </div>

          <div className="flex justify-center items-center my-5">
            <Input name="todo-input" type="text" placeholder="Enter task" value={task} onChange={onInputChange} className="p-4 rounded-3xl w-96 text-neutral-400 placeholder:text-neutral-500 bg-neutral-900" />
            <button onClick={onButtonClickAddTodo} className="bg-orange-600 ml-5 text-center p-2 font-bold w-14 text-4xl text-black rounded-full">+</button>
          </div>
          <div className="flex items-center flex-col justify-center">
            {todos.map((todo, index) => (
              <div className="flex justify-between p-5 rounded-3xl text-ellipsis min-w-96 max-w-96 my-2 text-neutral-400 placeholder:text-neutral-500 bg-neutral-900" key={todo.task}>
                {todo.task} <button onClick={() => handleRemoveTodo(todo.id)}><strong className="font-bold ml-5">✕</strong></button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
