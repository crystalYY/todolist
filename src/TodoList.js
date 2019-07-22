import React from 'react';
import TodoItem from './TodoItem'


//function App() {
class TodoList extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			list:[],
			inputValue: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	handleInputChange(e){
		this.setState({
			inputValue: e.target.value
		});

	}

	handleBtnClick(){
		if(this.state.inputValue !== ''){
			this.setState({
				list:[...this.state.list, this.state.inputValue],
				inputValue:''
			});
		}
		
	}
//解决input为空时的情况
	handleKeyDown(e){
		if(e.keyCode === 13&&this.state.inputValue !== ''){
			this.setState({
				list:[...this.state.list, this.state.inputValue],
				inputValue:''
			});
		}
		
	}

	handleItemClick(index){
		//避免直接操作state，性能更优
		// ...为扩展运算符，将一个数组转换为用逗号分隔的参数序列
		const list = [...this.state.list];
		list.splice(index, 1);
		this.setState({
			list
		})
	}

	getTodoItems(){
		return(
			this.state.list.map((item,index) =>{
			//return <li onClick={this.handleItemClick.bind(this, index)} key={index}>{item}</li>
			//key为循环要用的值，不会传递给子组件
				return (
					<TodoItem 
						handleDelete = {this.handleItemClick} 
						key = {index} 
						content = {item} 
						index = {index}
					/>
				)
			})
		)		
	}

  render() {
    return (
    	//返回一个jsx区块（包裹在一个封闭的标签里），不能返回两个
    	
    	<div className = 'main-div'>
	      <div>
	    		{/*定义行内样式，使用style属性，外层的花括号代表是一个JS表达式，内层的{}表示是一个对象 style = {{borderColor:'red'}}*/}
	      	<input  value = {this.state.inputValue} onChange = {this.handleInputChange} onKeyDown = {this.handleKeyDown}/>
	      	<button className='style-btn' onClick = {this.handleBtnClick}>add</button>
	      </div>
	      <ul>{this.getTodoItems()}</ul>
	    </div>
    )
  }
 
}

export default TodoList;
