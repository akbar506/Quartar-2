'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Divide, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label"
import { useTheme } from "@/components/theme-provider";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";


type todo = {
  id: number,
  task: string,
  status: boolean
}

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([]);
  const [checked, setChecked] = useState<boolean>(false)
  const [editingTask, setEditingTask] = useState<todo | null>(null);
  const [editedTask, setEditedTask] = useState<string>('');
  const { theme, setTheme } = useTheme()
  const newTodo = { id: todos.length + 1, task: task, status: false };


  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const onButtonClickAddTodo = (event: React.MouseEvent<HTMLButtonElement | HTMLElement>) => {
    if (task === "") {
      alert("Please enter a task");
    } else {
      setTodos([...todos, newTodo]);
    }
  }

  const handleRemoveTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  // Update the handleEditTodo function to also set the edited task value
  const handleEditTodo = (todo: todo) => {
    setEditingTask(todo);
    setEditedTask(todo.task); // Set the edited task value to the current task
  };

  // Update the handleSaveChanges function to use the edited task value
  const handleSaveChanges = () => {
    if (editingTask) {
      const updatedTodos = todos.map(todo =>
        todo.id === editingTask.id ? { ...todo, task: editedTask } : todo
      );
      setTodos(updatedTodos);
      setEditingTask(null); // Clear the editing task
      setEditedTask(''); // Clear the edited task value
    }
  };

  // Add an onChange function for the Input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(event.target.value);
  };

  <div className="flex items-center flex-col justify-center">

  </div>

  return (
    <main>
      <div>
        <div className="flex justify-between p-7">
          <div>
            {theme === "dark" ? <Link href={"/"}><Image src={"/navbar.png"} width={150} height={150} alt={"Navbar"}></Image></Link> : <Link href={"/"}><Image src={"/navbar.png"} width={150} height={150} alt={"Navbar"} className="invert"></Image></Link>}
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex item-center flex-col">
          <div className="mt-10">
            <h1 className="font-bold text-3xl text-center">Todo App</h1>
          </div>
          <div className="flex mt-5 justify-center p-5">
            <Input placeholder="Enter task" onChange={onInputChange} className="max-w-96" />
            <Button className="text-black font-bold text-2xl p-3 rounded-full ml-5" onClick={onButtonClickAddTodo}>+</Button>
          </div>

        </div>
        {newTodo.id > 1 ? (
          <div className="flex justify-center mx-4">
            <ScrollArea className="max-h-[400px] min-h-[10px] h-screen max-w-[700px] w-screen rounded-md border p-4">
              <div>
                <h4 className="mb-4 text-sm font-medium leading-none">List</h4>
                {todos.map((todo) => (
                  <>
                    <div className="flex items-center ml-1">
                      <Checkbox className="mr-4 w-6 h-6 rounded-full hover:outline-none hover:ring-2 hover:ring-ring hover:ring-offset-2" checked={checked} onClick={() => { handleRemoveTodo(todo.id); setChecked(false); }} />
                      <div key={todo.id} className="flex items-center">
                        <div>
                          {todo.task}
                        </div>
                        <div className="ml-4">
                          <AlertDialog>
                            <AlertDialogTrigger><Button variant="ghost" className="p-0" onClick={() => { handleEditTodo(todo); open; }}>
                                <Image src={"/edit-button.svg"} width={15} height={15} alt="Edit"></Image>
                              </Button></AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Edit Task</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Make changes to your Todo here. Click save when you're done.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                  <Label htmlFor="name" className="text-right">
                                    Task
                                  </Label>
                                  <Input id="name" value={editedTask} onChange={handleInputChange} className="col-span-3" />
                                </div>
                              </div>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleSaveChanges}>Save Changes</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </div>
                    <Separator className="my-2" />
                  </>
                ))}
              </div>

            </ScrollArea>
          </div>
        ) : <div></div>}

      </div>
    </main>
  );
}
