import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from "./components/todo-form";
import TodoItems from "./components/todo-items";
import TodoFilters from "./components/todo-filters";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            currentItem: {text: '', completed: false, key: ''},
            filter: 0 // 0 = all, 1 = completed, 2 = uncompleted
        }
    }
    handleInputChange = (e) => {
        const currentItem = {text: e.target.value, key: Date.now()};
        this.setState({
            currentItem: currentItem
        })
    };
    addItem = (e) => {
        e.preventDefault();
        const {currentItem} = this.state;
        if (currentItem.text !== '') {
            const items = [...this.state.items, currentItem];
            this.setState({
                items: items,
                currentItem: {text: '', completed: false, key: ''},
            })
        }
    };

    removeItem = (key) => {
        const items = this.state.items.filter(item => item.key !== key);
        this.setState({
            items: items,
        })
    };

    toggleCompleted = (key) => {
        const item = this.state.items.find(item => item.key === key);
        item.completed = !item.completed;
        this.setState({
            items: this.state.items,
        })
    };

    handleFilter = (status) => {
        this.setState({
            filter: status
        })
    };

    render() {
        return (
            <div className="App">
                <TodoFilters handleFilter={this.handleFilter}
                             filter={this.state.filter}/>
                <TodoForm addItem={this.addItem}
                          handleInputChange={this.handleInputChange}
                          filter={this.state.filter}
                          currentItem={this.state.currentItem}/>
                <TodoItems items={this.state.items}
                           removeItem={this.removeItem}
                           filter={this.state.filter}
                           toggleCompleted={this.toggleCompleted} />
            </div>
        );
    }
}

export default App;
