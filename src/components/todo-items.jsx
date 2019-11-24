import React from 'react';


const TodoItems = (props) => {
    const getFilteredItems = () => {
        const {items, filter} = props;
        switch (filter) {
            case 0:
                return items;
            case 1:
                return items.filter(item => item.completed);
            case 2:
                return items.filter(item => !item.completed);
            default:
                return items;
        }
    };
    const {removeItem, toggleCompleted} = props;
    const items = getFilteredItems();
    return (
        <ul className="todo-list" style={{listStyle: 'none'}}>
            {items.map(item => {
                const {text, completed, key} = item;
                return (
                    <li key={key}>

                        <button onClick={() => removeItem(key)}>X</button>
                        <input type={'checkbox'}
                               checked={completed}
                               value={completed}
                               onChange={() => toggleCompleted(key)}/>
                        <h5>{text}</h5>
                    </li>
                )
            })}
        </ul>
    )
};

export default TodoItems;