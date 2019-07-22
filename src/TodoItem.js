import React from 'react'

class TodoItem extends React.Component{
	//子组件和父组件通信，需要调用父组件传递过来的方法,比如this.props.handleDelete

	constructor(props) {
		super(props);

		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete() {
		//this.props.handleDelete(this.props.index); y优化后如下面代码所示
		const { handleDelete, index } =  this.props;
		handleDelete(index);
	}

	render() {
		//变量的解构赋值
		//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
		//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
		const { content } = this.props;
		
		return(
			<li className='style-item' onClick = {this.handleDelete}>{content}</li>
		)
	}
}

export default TodoItem;
