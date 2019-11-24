import React from 'react'

const TodoFilters = (props) => {
    const {handleFilter, filter} = props;
    return (
        <div className="todo-filters">
            <input type={'checkbox'} checked={filter === 0} value={filter} onChange={() => handleFilter(0)}/>all
            <input type={'checkbox'} checked={filter === 1} value={filter} onChange={() => handleFilter(1)}/>completed
            <input type={'checkbox'} checked={filter === 2} value={filter} onChange={() => handleFilter(2)}/>not
            completed
        </div>
    )
};
export default TodoFilters;
