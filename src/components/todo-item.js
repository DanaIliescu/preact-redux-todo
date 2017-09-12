import { h, Component } from 'preact';

export default class TodoItem extends Component {
	shouldComponentUpdate({ todo, onRemove }) {
		return todo !== this.props.todo || onRemove !== this.props.onRemove;
	}

	remove = () => {
		let { onRemove, todo } = this.props;
		onRemove(todo);
	};

	toggle = () => {
		let {onToggle, todo } = this.props;
		onToggle(todo.text);
	}

	render({ todo }) {
		return (
			<li>
				{ ' ' + todo.text + ' ' }
				<button onClick={this.toggle}>done</button>
				<button onClick={this.remove}>&times;</button>
			</li>
		);
	}
}
