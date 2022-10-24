import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  return useEffect(() => {
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
}

const addTodoItem = (title) => {
  setTodoItems([
    ...todoItems,
    { id: todoItems.length + 1, title: title, is_done: false },
  ]);
};

<InputComponent addTodoItem={addTodoItem} />;

export default App;
