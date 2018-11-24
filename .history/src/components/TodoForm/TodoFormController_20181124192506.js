
import TodoFormView from "./TodoFormView/TodoFormView";
export const TodoFormController = (props) => {
	const onLogin = props.store.onLogin;
	return new TodoFormView({
		store,
		methods: {

		},
		...props
	});
}
export default TodoFormController