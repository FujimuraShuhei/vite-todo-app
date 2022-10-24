import React from 'react'

const InputComponent = () => {
    const [title, setTitle] = useState('')

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const save = (e) => {
        e.preventDefault()
        props.addTodoItem(title)
        setTitle('')
    }

  return (
    <form action="">
        <input type="text" placeholder="タイトル" value={title} onChange={changeTitle} />
        <button onclick={save}>保存</button>
    </form>
  )
}

export default InputComponent