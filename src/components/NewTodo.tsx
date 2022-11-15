import React, { useRef } from 'react'
import "./NewTodo.css"


type NewTodoProps = { //or interface
    onAddTodo: (todoText: string, textInputRef: React.RefObject<HTMLInputElement>) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value; //for fixing the error of null value we can use ! after current
        onAddTodo(enteredText, textInputRef);
    }


    return (
        <form action="" onSubmit={todoSubmitHandler}>
            <div className="">
                <label htmlFor="todo-text">Todo Text</label>
                <input
                    type="text"
                    id="todo-text"
                    ref={textInputRef}
                />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    )
}

export default NewTodo;