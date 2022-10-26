import React, { useState } from 'react';

export const InputComponent = (props) => {
  const [title, setTitle] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const save = (e) => {
    e.preventDefault();
    props.addTodoItem(title);
    setTitle('');
  };

  return (
    <form action="">
      <input
        type="text"
        placeholder="タイトル"
        value={title}
        onChange={changeTitle}
      />
      <button onClick={save}>保存</button>
    </form>
  );
};
