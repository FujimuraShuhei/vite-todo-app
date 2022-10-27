import { useState } from 'react';
import './App.css';
import { FilterComponent } from './FilterComponent';
import { InputComponent } from './InputComponent';
import { ListComponent } from './ListComponent';
import React from 'react';

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (title) => {
    setTodoItems([
      ...todoItems,
      { id: todoItems.length + 1, title: title, is_done: false },
    ]);
  };

  const updateStatusTodoItem = (id) => {
    setTodoItems(
      todoItems.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, is_done: !todoItem.is_done };
        }
        return todoItem;
      })
    );
  };

  const removeTodoItem = (id) => {
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <>
      <InputComponent addTodoItem={addTodoItem} />
      <FilterComponent />
      <ListComponent
        todoItems={todoItems}
        updateStatusTodoItem={updateStatusTodoItem}
        removeTodoItem={removeTodoItem}
      />
    </>
  );
};

export default App;
