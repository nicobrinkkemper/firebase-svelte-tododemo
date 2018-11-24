<script>
	import TodoFormView from "./components/TodoForm/TodoFormView/TodoFormView";
	export default class TodoFormController extends TodoFormView {
		oncreate = () => {}

	  methods = {
	    onSubmit(event) {
	      if (event.keyCode === 13) this.get().onAdd();
	    },
	    handelDateTimeChange(selectedDates, dateStr, instance) {
	      const state = this.get();
	      console.log(state);
	      this.set({
	        ...state,
	        todo: {
	          ...state.todo,
	          datetime: selectedDates[0]
	        }
	      });
	    }
	  }
	}
</script>