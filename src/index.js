import React from 'react';
//把一个组件渲染到一个DOM节点上
import ReactDOM from 'react-dom';
//App相当于一个自定义的react组件，大写字符开头
import TodoList from './TodoList.js';
import './style.css'

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

