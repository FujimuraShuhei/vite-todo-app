import { useEffect, useState } from 'react';
import './App.css';
import InputComponent from '../InputComponent';
import ListComponent from './ListComponent';
import FilterComponent from './FilterComponent';
import React from 'react'

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

  return (
    <div>
      <InputComponent addTodoItem={addTodoItem} />
      <FilterComponent />
      <ListComponent />
    </div>
  );
};

export default App;
