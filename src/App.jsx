import { useEffect, useState } from 'react';
import './App.css';
import { FilterComponent } from './FilterComponent';
import { InputComponent } from './InputComponent';
import { ListComponent } from './ListComponent';
import React from 'react';

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    async () => {
      setTodoItems([
        { id: 1, title: 'あああ', is_done: false },
        { id: 2, title: 'いいい', is_done: false },
        { id: 3, title: 'ううう', is_done: false },
        { id: 4, title: 'えええ', is_done: false },
        { id: 5, title: 'おおお', is_done: false },
      ]);
    };
  });

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
          todoItem.is_done = !todoItem.is_done;
        }
        return todoItem;
      })
    );
  };

  const removeTodoItem = (id) => {
    setTodoItems(todoItems.filter(todoItem => todoItem.id !== id))
  }

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
