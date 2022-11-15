import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

import { Todo } from './todo.model';

const App: React.FC = () => {
  //create some example typescript code

  const [todos, setTodos] = useState<Todo[]>([]);

  //what is the type of ref here? it is a function that takes a string and returns void (no return value)
  const todoAddHandler = (text: string, textInputRef: React.RefObject<HTMLInputElement>) => {

    if (text.length === 0) return;
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
    textInputRef.current!.value = "";
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => { return prevTodos.filter(todo => todo.id !== todoId) });
  };

  return (
    <div className="App">
      <NewTodo
        onAddTodo={todoAddHandler}
      />

      <TodoList
        items={todos}
        onDeleteTodo={todoDeleteHandler}
      />
    </div>
  );
}

export default App;
