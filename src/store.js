import { createStore } from 'redux';

let ACTIONS = {
	ADD_TODO: ({ todos, ...state }, { text }) => ({
		todos: [...todos, {
			id: Math.random().toString(36).substring(2),
			text,
			completed: false
		}],
		...state
	}),

	REMOVE_TODO: ({ todos, ...state }, { todo }) => ({
		todos: todos.filter( i => i!==todo ),
		...state
	}),

	TOGGLE_TODO: ({ todos, ...state }, { text }) => ({
		todos: todos.map(todo => todo.text === text
			? {...todo, completed: !todo.completed }
			: todo
		),
		...state
	})
};

const INITIAL = {
	todos: []
};

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, window.devToolsExtension && window.devToolsExtension());
