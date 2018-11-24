
import TodoFormView from "./components/TodoForm/TodoFormView/TodoFormView";
import Flatpickr from "svelte-flatpickr";
export const TodoFormController = () => new TodoFormView({
	components: {
		Flatpickr
	}
});
