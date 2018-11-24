
import TodoFormView from "./TodoFormView/TodoFormView";
import store from '../store'
export const TodoFormController = (data) => new TodoFormView({store});
export default TodoFormController