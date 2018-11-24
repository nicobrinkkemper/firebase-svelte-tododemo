import TodoFormController from './TodoFormController'

export default TodoForm = ()=>new TodoFormController({
    data: {
        todo: {
            text: '',
            datetime: new Date(),
            priority: 0
        },
        flatpickrOptions: {
            enableTime: true,
            defaultDate: new Date(),
            time_24hr: true,
            minDate: new Date(),
            onChange(selectedDates, dateStr, instance) {
                console.log("Options onChange handler");
            }
        },
    },
    methods: {
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
    },
});