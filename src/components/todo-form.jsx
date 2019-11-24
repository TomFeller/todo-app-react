import React from 'react'

const TodoForm = (props) => {
    const {handleInputChange, currentItem, addItem} = props;
    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={addItem}>
                    <input
                        placeholder="Task"
                        value={currentItem.text}
                        name={'text'}
                        onChange={handleInputChange}
                    />
                    <button type="submit"> Add Task</button>
                </form>
            </div>
        </div>
    )
};
export default TodoForm;
